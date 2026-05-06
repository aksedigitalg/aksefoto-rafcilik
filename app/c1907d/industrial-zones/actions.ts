"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/c1907d/auth";

const TAG = "industrial-zones";

export interface ZonePayload {
  slug: string;
  name: string;
  full_name: string;
  district: string;
  description: string;
  services_offered: string[];
  notable_tenants_hint: string | null;
  is_published: boolean;
  faqs: Array<{ question: string; answer: string }>;
}

export async function upsertZone(
  originalSlug: string | null,
  payload: ZonePayload,
): Promise<{ error?: string; slug?: string }> {
  const { supabase } = await requireAdmin();
  if (!payload.slug || !payload.name || !payload.full_name || !payload.district) {
    return { error: "Slug, ad, tam ad ve ilçe zorunlu." };
  }

  const isNew = originalSlug === null;
  const slugChanged = !isNew && originalSlug !== payload.slug;

  if (isNew || slugChanged) {
    const exists = await supabase
      .from("industrial_zones")
      .select("slug")
      .eq("slug", payload.slug)
      .maybeSingle();
    if (exists.data) return { error: "Slug zaten kullanımda." };
  }

  const row = {
    slug: payload.slug,
    name: payload.name,
    full_name: payload.full_name,
    district: payload.district,
    description: payload.description,
    services_offered: payload.services_offered,
    notable_tenants_hint: payload.notable_tenants_hint,
    is_published: payload.is_published,
  };

  if (isNew) {
    const { error } = await supabase.from("industrial_zones").insert(row as never);
    if (error) return { error: error.message };
  } else {
    const { error } = await supabase
      .from("industrial_zones")
      .update(row as never)
      .eq("slug", originalSlug);
    if (error) return { error: error.message };
  }

  if (slugChanged) {
    await supabase
      .from("industrial_zone_faqs")
      .update({ zone_slug: payload.slug } as never)
      .eq("zone_slug", originalSlug);
  }

  await supabase.from("industrial_zone_faqs").delete().eq("zone_slug", payload.slug);
  if (payload.faqs.length > 0) {
    const rows = payload.faqs.map((f, idx) => ({
      zone_slug: payload.slug,
      question: f.question,
      answer: f.answer,
      sort_order: idx,
    }));
    const { error } = await supabase.from("industrial_zone_faqs").insert(rows as never);
    if (error) return { error: error.message };
  }

  revalidateTag(TAG);
  return { slug: payload.slug };
}

export async function deleteZone(slug: string) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("industrial_zones").delete().eq("slug", slug);
  if (error) return { error: error.message };
  revalidateTag(TAG);
  redirect("/c1907d/industrial-zones");
}
