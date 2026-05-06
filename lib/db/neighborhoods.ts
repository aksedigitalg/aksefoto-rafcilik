import { unstable_cache } from "next/cache";
import { createSupabaseAnonReadClient } from "@/lib/supabase/server";
import type { Neighborhood, DistrictSlug, PhotoshootLocation } from "@/lib/types";
import type { NeighborhoodRow, PhotoshootLocationRow } from "@/lib/supabase/types";

const REVALIDATE_SECONDS = 60;
const CACHE_TAG = "neighborhoods";

function mapLocation(row: PhotoshootLocationRow): PhotoshootLocation {
  return {
    name: row.name,
    description: row.description,
    bestTimeOfDay: row.best_time_of_day ?? undefined,
    coordinates:
      row.latitude !== null && row.longitude !== null
        ? [Number(row.latitude), Number(row.longitude)]
        : undefined,
  };
}

function mapNeighborhood(row: NeighborhoodRow, locations: PhotoshootLocation[]): Neighborhood {
  return {
    slug: row.slug,
    name: row.name,
    district: row.district,
    postalCode: row.postal_code ?? undefined,
    population: row.population ?? undefined,
    description: row.description,
    landmarks: row.landmarks,
    photoshootLocations: locations,
    nearbyNeighborhoods: row.nearby_neighborhoods,
    popularServices: row.popular_services,
    metaTitle: row.meta_title ?? undefined,
    metaDescription: row.meta_description ?? undefined,
  };
}

export const getAllNeighborhoods = unstable_cache(
  async (): Promise<Neighborhood[]> => {
    const supabase = createSupabaseAnonReadClient();

    const result = await supabase
      .from("neighborhoods")
      .select("*")
      .eq("is_published", true)
      .order("sort_order");
    if (result.error) {
      console.error("[db.neighborhoods] getAllNeighborhoods:", result.error);
      return [];
    }
    const rows = (result.data ?? []) as NeighborhoodRow[];

    const slugs = rows.map((n) => n.slug);
    if (slugs.length === 0) return [];

    const locResult = await supabase
      .from("photoshoot_locations")
      .select("*")
      .in("neighborhood_slug", slugs)
      .order("sort_order");
    const locRows = (locResult.data ?? []) as PhotoshootLocationRow[];

    const locsBySlug = new Map<string, PhotoshootLocation[]>();
    for (const row of locRows) {
      const list = locsBySlug.get(row.neighborhood_slug) ?? [];
      list.push(mapLocation(row));
      locsBySlug.set(row.neighborhood_slug, list);
    }

    return rows.map((row) => mapNeighborhood(row, locsBySlug.get(row.slug) ?? []));
  },
  ["neighborhoods-all"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);

export const getNeighborhoodBySlug = unstable_cache(
  async (slug: string, district?: DistrictSlug): Promise<Neighborhood | null> => {
    const supabase = createSupabaseAnonReadClient();

    let query = supabase
      .from("neighborhoods")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true);
    if (district) query = query.eq("district", district);

    const result = await query.maybeSingle();
    if (result.error || !result.data) {
      if (result.error) console.error("[db.neighborhoods] getNeighborhoodBySlug:", result.error);
      return null;
    }
    const row = result.data as NeighborhoodRow;

    const locResult = await supabase
      .from("photoshoot_locations")
      .select("*")
      .eq("neighborhood_slug", slug)
      .order("sort_order");
    const locRows = (locResult.data ?? []) as PhotoshootLocationRow[];

    return mapNeighborhood(row, locRows.map(mapLocation));
  },
  ["neighborhood-by-slug"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);

export async function getNeighborhoodsByDistrict(
  district: DistrictSlug,
): Promise<Neighborhood[]> {
  const all = await getAllNeighborhoods();
  return all.filter((n) => n.district === district);
}

export async function getNearbyNeighborhoods(slug: string, limit = 5): Promise<Neighborhood[]> {
  const current = await getNeighborhoodBySlug(slug);
  if (!current) return [];
  const all = await getAllNeighborhoods();
  const map = new Map(all.map((n) => [n.slug, n] as const));
  return current.nearbyNeighborhoods
    .map((s) => map.get(s))
    .filter((n): n is Neighborhood => Boolean(n))
    .slice(0, limit);
}
