import type { Neighborhood, DistrictSlug } from "@/lib/types";
import { gebzeNeighborhoods } from "./gebze";
import { daricaNeighborhoods } from "./darica";
import { cayirovaNeighborhoods } from "./cayirova";
import { dilovasiNeighborhoods } from "./dilovasi";

export const neighborhoods: Neighborhood[] = [
  ...gebzeNeighborhoods,
  ...daricaNeighborhoods,
  ...cayirovaNeighborhoods,
  ...dilovasiNeighborhoods,
];

export function getNeighborhoodBySlug(slug: string, district?: DistrictSlug): Neighborhood | undefined {
  if (district) {
    return neighborhoods.find((n) => n.slug === slug && n.district === district);
  }
  return neighborhoods.find((n) => n.slug === slug);
}

export function getNeighborhoodsByDistrict(district: DistrictSlug): Neighborhood[] {
  return neighborhoods.filter((n) => n.district === district);
}

export function getNearbyNeighborhoods(slug: string, limit = 5): Neighborhood[] {
  const current = getNeighborhoodBySlug(slug);
  if (!current) return [];
  return current.nearbyNeighborhoods
    .map((s) => getNeighborhoodBySlug(s))
    .filter((n): n is Neighborhood => Boolean(n))
    .slice(0, limit);
}

export type { Neighborhood } from "@/lib/types";
