"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/c1907d/auth";

const TAGS = ["services"];

function bumpCache() {
  for (const t of TAGS) revalidateTag(t);
}

export interface ServicePayload {
  slug: string;
  name: string;
  category: string;
  primary_keyword: string;
  secondary_keywords: string[];
  short_description: string;
  long_description: string;
  features: string[];
  related_services: string[];
  gallery_category: string;
  icon: string | null;
  meta_title: string | null;
  meta_description: string | null;
  is_published: boolean;
  packages: Array<{
    name: string;
    price_range: string;
    description: string | null;
    includes: string[];
    popular: boolean;
  }>;
  faqs: Array<{ question: string; answer: string }>;
}

export async function upsertService(
  originalSlug: string | null,
  payload: ServicePayload,
): Promise<{ error?: string; slug?: string }> {
  const { supabase } = await requireAdmin();

  if (!payload.slug || !payload.name || !payload.category) {
    return { error: "Slug, ad ve kategori zorunlu." };
  }

  // Slug change durumu (yeni eklemede originalSlug=null, edit'te değişmiş olabilir)
  const isNew = originalSlug === null;
  const slugChanged = !isNew && originalSlug !== payload.slug;

  if (isNew || slugChanged) {
    // Yeni slug çakışıyor mu?
    const exists = await supabase
      .from("services")
      .select("slug")
      .eq("slug", payload.slug)
      .maybeSingle();
    if (exists.data) {
      return { error: "Bu slug zaten kullanımda." };
    }
  }

  const serviceRow = {
    slug: payload.slug,
    name: payload.name,
    category: payload.category,
    primary_keyword: payload.primary_keyword,
    secondary_keywords: payload.secondary_keywords,
    short_description: payload.short_description,
    long_description: payload.long_description,
    features: payload.features,
    related_services: payload.related_services,
    gallery_category: payload.gallery_category,
    icon: payload.icon,
    meta_title: payload.meta_title,
    meta_description: payload.meta_description,
    is_published: payload.is_published,
  };

  if (isNew) {
    const { error } = await supabase.from("services").insert(serviceRow as never);
    if (error) return { error: error.message };
  } else {
    const { error } = await supabase
      .from("services")
      .update(serviceRow as never)
      .eq("slug", originalSlug);
    if (error) return { error: error.message };
  }

  // Slug değişti — packages/faqs FK update
  if (slugChanged) {
    await supabase
      .from("service_packages")
      .update({ service_slug: payload.slug } as never)
      .eq("service_slug", originalSlug);
    await supabase
      .from("service_faqs")
      .update({ service_slug: payload.slug } as never)
      .eq("service_slug", originalSlug);
  }

  // Children: delete + reinsert (basitlik)
  await supabase.from("service_packages").delete().eq("service_slug", payload.slug);
  await supabase.from("service_faqs").delete().eq("service_slug", payload.slug);

  if (payload.packages.length > 0) {
    const rows = payload.packages.map((p, idx) => ({
      service_slug: payload.slug,
      name: p.name,
      price_range: p.price_range,
      description: p.description,
      includes: p.includes,
      popular: p.popular,
      sort_order: idx,
    }));
    const { error } = await supabase.from("service_packages").insert(rows as never);
    if (error) return { error: error.message };
  }

  if (payload.faqs.length > 0) {
    const rows = payload.faqs.map((f, idx) => ({
      service_slug: payload.slug,
      question: f.question,
      answer: f.answer,
      sort_order: idx,
    }));
    const { error } = await supabase.from("service_faqs").insert(rows as never);
    if (error) return { error: error.message };
  }

  bumpCache();
  return { slug: payload.slug };
}

export async function deleteService(slug: string) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("services").delete().eq("slug", slug);
  if (error) return { error: error.message };
  bumpCache();
  redirect("/c1907d/services");
}

export async function togglePublishService(slug: string, isPublished: boolean) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase
    .from("services")
    .update({ is_published: !isPublished } as never)
    .eq("slug", slug);
  if (error) return { error: error.message };
  bumpCache();
  return { ok: true };
}
