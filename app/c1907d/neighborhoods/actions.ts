"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/c1907d/auth";

const TAG = "neighborhoods";

export interface NeighborhoodPayload {
  slug: string;
  name: string;
  district: string;
  postal_code: string | null;
  population: number | null;
  description: string;
  landmarks: string[];
  nearby_neighborhoods: string[];
  popular_services: string[];
  meta_title: string | null;
  meta_description: string | null;
  is_published: boolean;
  photoshoot_locations: Array<{
    name: string;
    description: string;
    best_time_of_day: string | null;
    latitude: number | null;
    longitude: number | null;
  }>;
}

export async function upsertNeighborhood(
  originalSlug: string | null,
  payload: NeighborhoodPayload,
): Promise<{ error?: string; slug?: string }> {
  const { supabase } = await requireAdmin();
  if (!payload.slug || !payload.name || !payload.district) {
    return { error: "Slug, ad ve ilçe zorunlu." };
  }

  const isNew = originalSlug === null;
  const slugChanged = !isNew && originalSlug !== payload.slug;

  if (isNew || slugChanged) {
    const exists = await supabase
      .from("neighborhoods")
      .select("slug")
      .eq("slug", payload.slug)
      .maybeSingle();
    if (exists.data) return { error: "Slug zaten kullanımda." };
  }

  const row = {
    slug: payload.slug,
    name: payload.name,
    district: payload.district,
    postal_code: payload.postal_code,
    population: payload.population,
    description: payload.description,
    landmarks: payload.landmarks,
    nearby_neighborhoods: payload.nearby_neighborhoods,
    popular_services: payload.popular_services,
    meta_title: payload.meta_title,
    meta_description: payload.meta_description,
    is_published: payload.is_published,
  };

  if (isNew) {
    const { error } = await supabase.from("neighborhoods").insert(row as never);
    if (error) return { error: error.message };
  } else {
    const { error } = await supabase
      .from("neighborhoods")
      .update(row as never)
      .eq("slug", originalSlug);
    if (error) return { error: error.message };
  }

  if (slugChanged) {
    await supabase
      .from("photoshoot_locations")
      .update({ neighborhood_slug: payload.slug } as never)
      .eq("neighborhood_slug", originalSlug);
  }

  await supabase.from("photoshoot_locations").delete().eq("neighborhood_slug", payload.slug);
  if (payload.photoshoot_locations.length > 0) {
    const rows = payload.photoshoot_locations.map((loc, idx) => ({
      neighborhood_slug: payload.slug,
      name: loc.name,
      description: loc.description,
      best_time_of_day: loc.best_time_of_day,
      latitude: loc.latitude,
      longitude: loc.longitude,
      sort_order: idx,
    }));
    const { error } = await supabase.from("photoshoot_locations").insert(rows as never);
    if (error) return { error: error.message };
  }

  revalidateTag(TAG);
  return { slug: payload.slug };
}

export async function deleteNeighborhood(slug: string) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("neighborhoods").delete().eq("slug", slug);
  if (error) return { error: error.message };
  revalidateTag(TAG);
  redirect("/c1907d/neighborhoods");
}
