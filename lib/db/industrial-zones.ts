import { unstable_cache } from "next/cache";
import { createSupabaseAnonReadClient } from "@/lib/supabase/server";
import type { IndustrialZone, FAQ } from "@/lib/types";
import type { IndustrialZoneRow, IndustrialZoneFaqRow } from "@/lib/supabase/types";

const REVALIDATE_SECONDS = 60;
const CACHE_TAG = "industrial-zones";

function mapFaq(row: IndustrialZoneFaqRow): FAQ {
  return { question: row.question, answer: row.answer };
}

function mapZone(row: IndustrialZoneRow, faqs: FAQ[]): IndustrialZone {
  return {
    slug: row.slug,
    name: row.name,
    fullName: row.full_name,
    district: row.district,
    description: row.description,
    servicesOffered: row.services_offered,
    notableTenantsHint: row.notable_tenants_hint ?? undefined,
    faqs,
  };
}

export const getAllIndustrialZones = unstable_cache(
  async (): Promise<IndustrialZone[]> => {
    const supabase = createSupabaseAnonReadClient();

    const result = await supabase
      .from("industrial_zones")
      .select("*")
      .eq("is_published", true)
      .order("sort_order");
    if (result.error) {
      console.error("[db.industrial-zones] getAllIndustrialZones:", result.error);
      return [];
    }
    const rows = (result.data ?? []) as IndustrialZoneRow[];

    const slugs = rows.map((z) => z.slug);
    if (slugs.length === 0) return [];

    const faqResult = await supabase
      .from("industrial_zone_faqs")
      .select("*")
      .in("zone_slug", slugs)
      .order("sort_order");
    const faqRows = (faqResult.data ?? []) as IndustrialZoneFaqRow[];

    const faqsBySlug = new Map<string, FAQ[]>();
    for (const row of faqRows) {
      const list = faqsBySlug.get(row.zone_slug) ?? [];
      list.push(mapFaq(row));
      faqsBySlug.set(row.zone_slug, list);
    }

    return rows.map((row) => mapZone(row, faqsBySlug.get(row.slug) ?? []));
  },
  ["industrial-zones-all"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);

export const getIndustrialZoneBySlug = unstable_cache(
  async (slug: string): Promise<IndustrialZone | null> => {
    const supabase = createSupabaseAnonReadClient();

    const result = await supabase
      .from("industrial_zones")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle();
    if (result.error || !result.data) return null;
    const row = result.data as IndustrialZoneRow;

    const faqResult = await supabase
      .from("industrial_zone_faqs")
      .select("*")
      .eq("zone_slug", slug)
      .order("sort_order");
    const faqRows = (faqResult.data ?? []) as IndustrialZoneFaqRow[];

    return mapZone(row, faqRows.map(mapFaq));
  },
  ["industrial-zone-by-slug"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);
