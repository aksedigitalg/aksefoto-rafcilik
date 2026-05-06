"use server";

import { revalidateTag, revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/auth";

export interface SiteSettingsPayload {
  brand_name: string;
  legal_name: string | null;
  short_name: string | null;
  owner: string | null;
  founded: string | null;
  phone: string;
  phone_display: string;
  whatsapp: string;
  whatsapp_display: string;
  email: string;
  street: string | null;
  neighborhood: string | null;
  district: string | null;
  city: string | null;
  postal_code: string | null;
  country: string | null;
  latitude: number | null;
  longitude: number | null;
  maps_place_query: string | null;
  hours: Record<string, string>;
  social: Record<string, string>;
  service_area: string[];
  tagline: string | null;
  short_description: string | null;
  stats: Record<string, number>;
  default_og_image: string | null;
  logo_url: string | null;
  favicon_url: string | null;
  ga_id: string | null;
  clarity_id: string | null;
}

export async function updateSiteSettings(
  payload: SiteSettingsPayload,
): Promise<{ error?: string; ok?: true }> {
  const { supabase } = await requireAdmin();
  const { error } = await supabase
    .from("site_settings")
    .update(payload as never)
    .eq("id", "global");
  if (error) return { error: error.message };

  // Tüm cache'i bayatlat — site geneli ayar değişti
  for (const tag of [
    "services",
    "neighborhoods",
    "industrial-zones",
    "blog",
    "testimonials",
    "site-settings",
  ]) {
    revalidateTag(tag);
  }
  revalidatePath("/", "layout");
  return { ok: true };
}
