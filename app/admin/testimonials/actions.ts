"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";

const CACHE_TAGS_TO_INVALIDATE = ["testimonials", "services", "neighborhoods"];

function bumpCache() {
  for (const tag of CACHE_TAGS_TO_INVALIDATE) revalidateTag(tag);
}

interface TestimonialFormPayload {
  name: string;
  service: string;
  service_slug: string | null;
  district: string | null;
  neighborhood: string | null;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;
  avatar: string | null;
  approved: boolean;
}

function readForm(formData: FormData): TestimonialFormPayload {
  const ratingRaw = String(formData.get("rating") ?? "5");
  const rating = Math.max(1, Math.min(5, parseInt(ratingRaw, 10) || 5)) as 1 | 2 | 3 | 4 | 5;
  return {
    name: String(formData.get("name") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    service_slug: String(formData.get("service_slug") ?? "").trim() || null,
    district: String(formData.get("district") ?? "").trim() || null,
    neighborhood: String(formData.get("neighborhood") ?? "").trim() || null,
    rating,
    text: String(formData.get("text") ?? "").trim(),
    date: String(formData.get("date") ?? new Date().toISOString().slice(0, 10)),
    avatar: String(formData.get("avatar") ?? "").trim() || null,
    approved: formData.get("approved") === "on",
  };
}

export async function createTestimonial(formData: FormData) {
  const { supabase } = await requireAdmin();
  const payload = readForm(formData);

  if (!payload.name || !payload.service || !payload.text) {
    return { error: "Ad, hizmet ve yorum metni zorunludur." };
  }

  // Database generic'i Supabase JS v2 ile bazi durumlarda 'never' donduruyor;
  // payload yapisi DB sema ile birebir uyumlu, cast guvenli.
  const { error } = await supabase
    .from("testimonials")
    .insert(payload as never);
  if (error) return { error: error.message };

  bumpCache();
  redirect("/admin/testimonials");
}

export async function updateTestimonial(id: string, formData: FormData) {
  const { supabase } = await requireAdmin();
  const payload = readForm(formData);

  const { error } = await supabase
    .from("testimonials")
    .update(payload as never)
    .eq("id", id);
  if (error) return { error: error.message };

  bumpCache();
  redirect("/admin/testimonials");
}

export async function toggleApproved(id: string, approved: boolean) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase
    .from("testimonials")
    .update({ approved: !approved } as never)
    .eq("id", id);
  if (error) return { error: error.message };
  bumpCache();
  return { ok: true };
}

export async function deleteTestimonial(id: string) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("testimonials").delete().eq("id", id);
  if (error) return { error: error.message };
  bumpCache();
  redirect("/admin/testimonials");
}
