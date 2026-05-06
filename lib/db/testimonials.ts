import { unstable_cache } from "next/cache";
import { createSupabaseAnonReadClient } from "@/lib/supabase/server";
import type { Testimonial } from "@/lib/types";
import type { TestimonialRow } from "@/lib/supabase/types";

const REVALIDATE_SECONDS = 60;
const CACHE_TAG = "testimonials";

function mapTestimonial(row: TestimonialRow): Testimonial {
  return {
    id: row.id,
    name: row.name,
    service: row.service,
    district: row.district ?? undefined,
    neighborhood: row.neighborhood ?? undefined,
    rating: row.rating,
    text: row.text,
    date: row.date,
    avatar: row.avatar ?? undefined,
  };
}

export const getApprovedTestimonials = unstable_cache(
  async (): Promise<Testimonial[]> => {
    const supabase = createSupabaseAnonReadClient();
    if (!supabase) return [];
    const result = await supabase
      .from("testimonials")
      .select("*")
      .eq("approved", true)
      .order("sort_order")
      .order("date", { ascending: false });
    if (result.error) {
      console.error("[db.testimonials] getApprovedTestimonials:", result.error);
      return [];
    }
    const rows = (result.data ?? []) as TestimonialRow[];
    return rows.map(mapTestimonial);
  },
  ["testimonials-approved"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);

export async function getTestimonialsByService(serviceSlug: string): Promise<Testimonial[]> {
  const supabase = createSupabaseAnonReadClient();
  if (!supabase) return [];
  const result = await supabase
    .from("testimonials")
    .select("*")
    .eq("approved", true)
    .eq("service_slug", serviceSlug)
    .order("date", { ascending: false });
  if (result.error) return [];
  const rows = (result.data ?? []) as TestimonialRow[];
  return rows.map(mapTestimonial);
}

export async function getTestimonialsByDistrict(district: string): Promise<Testimonial[]> {
  const supabase = createSupabaseAnonReadClient();
  if (!supabase) return [];
  const result = await supabase
    .from("testimonials")
    .select("*")
    .eq("approved", true)
    .eq("district", district)
    .order("date", { ascending: false });
  if (result.error) return [];
  const rows = (result.data ?? []) as TestimonialRow[];
  return rows.map(mapTestimonial);
}

export async function getTestimonialsByNeighborhood(slug: string): Promise<Testimonial[]> {
  const all = await getApprovedTestimonials();
  return all.filter((t) =>
    t.neighborhood?.toLocaleLowerCase("tr-TR").includes(slug.toLocaleLowerCase("tr-TR")),
  );
}

/**
 * Aggregate rating + count icin (schema.ts'in localBusinessSchema'sinda
 * kullaniliyor). approved=true testimonials uzerinden hesaplanir.
 */
export async function getTestimonialsAggregate(): Promise<{
  count: number;
  averageRating: number;
}> {
  const supabase = createSupabaseAnonReadClient();
  if (!supabase) return { count: 0, averageRating: 0 };
  const result = await supabase
    .from("testimonials")
    .select("rating")
    .eq("approved", true);
  const rows = (result.data ?? []) as { rating: number }[];
  if (result.error || rows.length === 0) {
    return { count: 0, averageRating: 0 };
  }
  const sum = rows.reduce((acc, r) => acc + (r.rating ?? 0), 0);
  return {
    count: rows.length,
    averageRating: Math.round((sum / rows.length) * 10) / 10,
  };
}
