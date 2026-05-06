import { unstable_cache } from "next/cache";
import { createSupabaseAnonReadClient } from "@/lib/supabase/server";
import type {
  Service,
  ServiceCategory,
  ServicePackage,
  FAQ,
} from "@/lib/types";
import type {
  ServiceRow,
  ServicePackageRow,
  ServiceFaqRow,
} from "@/lib/supabase/types";

/**
 * DB fetchers for services. Cached with revalidate=60 (ISR pattern).
 * Admin mutations should call revalidateTag("services") to invalidate.
 */

const REVALIDATE_SECONDS = 60;
const CACHE_TAG = "services";

function mapPackage(row: ServicePackageRow): ServicePackage {
  return {
    name: row.name,
    priceRange: row.price_range,
    description: row.description ?? undefined,
    includes: row.includes,
    popular: row.popular,
  };
}

function mapFaq(row: ServiceFaqRow): FAQ {
  return { question: row.question, answer: row.answer };
}

function mapService(
  row: ServiceRow,
  packages: ServicePackage[],
  faqs: FAQ[],
): Service {
  return {
    slug: row.slug,
    name: row.name,
    category: row.category as ServiceCategory,
    primaryKeyword: row.primary_keyword,
    secondaryKeywords: row.secondary_keywords,
    shortDescription: row.short_description,
    longDescription: row.long_description,
    features: row.features,
    packages,
    faqs,
    relatedServices: row.related_services,
    galleryCategory: row.gallery_category,
    icon: row.icon ?? undefined,
    metaTitle: row.meta_title ?? undefined,
    metaDescription: row.meta_description ?? undefined,
  };
}

export const getAllServices = unstable_cache(
  async (): Promise<Service[]> => {
    const supabase = createSupabaseAnonReadClient();

    const sResult = await supabase
      .from("services")
      .select("*")
      .eq("is_published", true)
      .order("sort_order");
    if (sResult.error) {
      console.error("[db.services] getAllServices error:", sResult.error);
      return [];
    }

    const rows = (sResult.data ?? []) as ServiceRow[];
    const slugs = rows.map((s) => s.slug);
    if (slugs.length === 0) return [];

    const pkgResult = await supabase
      .from("service_packages")
      .select("*")
      .in("service_slug", slugs)
      .order("sort_order");
    const faqResult = await supabase
      .from("service_faqs")
      .select("*")
      .in("service_slug", slugs)
      .order("sort_order");

    const pkgRows = (pkgResult.data ?? []) as ServicePackageRow[];
    const faqRows = (faqResult.data ?? []) as ServiceFaqRow[];

    const pkgsBySlug = new Map<string, ServicePackage[]>();
    for (const row of pkgRows) {
      const list = pkgsBySlug.get(row.service_slug) ?? [];
      list.push(mapPackage(row));
      pkgsBySlug.set(row.service_slug, list);
    }
    const faqsBySlug = new Map<string, FAQ[]>();
    for (const row of faqRows) {
      const list = faqsBySlug.get(row.service_slug) ?? [];
      list.push(mapFaq(row));
      faqsBySlug.set(row.service_slug, list);
    }

    return rows.map((row) =>
      mapService(row, pkgsBySlug.get(row.slug) ?? [], faqsBySlug.get(row.slug) ?? []),
    );
  },
  ["services-all"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);

export const getServiceBySlug = unstable_cache(
  async (slug: string): Promise<Service | null> => {
    const supabase = createSupabaseAnonReadClient();

    const sResult = await supabase
      .from("services")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle();
    if (sResult.error || !sResult.data) {
      if (sResult.error) console.error("[db.services] getServiceBySlug error:", sResult.error);
      return null;
    }
    const row = sResult.data as ServiceRow;

    const pkgResult = await supabase
      .from("service_packages")
      .select("*")
      .eq("service_slug", slug)
      .order("sort_order");
    const faqResult = await supabase
      .from("service_faqs")
      .select("*")
      .eq("service_slug", slug)
      .order("sort_order");

    const pkgRows = (pkgResult.data ?? []) as ServicePackageRow[];
    const faqRows = (faqResult.data ?? []) as ServiceFaqRow[];

    return mapService(row, pkgRows.map(mapPackage), faqRows.map(mapFaq));
  },
  ["services-by-slug"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);

export async function getServicesByCategory(category: ServiceCategory): Promise<Service[]> {
  const all = await getAllServices();
  return all.filter((s) => s.category === category);
}

export async function getRelatedServices(currentSlug: string, limit = 4): Promise<Service[]> {
  const current = await getServiceBySlug(currentSlug);
  if (!current) return [];
  const all = await getAllServices();
  const map = new Map(all.map((s) => [s.slug, s] as const));
  return current.relatedServices
    .map((slug) => map.get(slug))
    .filter((s): s is Service => Boolean(s))
    .slice(0, limit);
}
