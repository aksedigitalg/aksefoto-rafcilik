import { requireAdmin } from "@/lib/admin/auth";
import { SettingsForm } from "./SettingsForm";
import type { SiteSettingsPayload } from "./actions";

export const dynamic = "force-dynamic";

interface SettingsRow {
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
  hours: Record<string, string> | null;
  social: Record<string, string> | null;
  service_area: string[];
  tagline: string | null;
  short_description: string | null;
  stats: Record<string, number> | null;
  default_og_image: string | null;
  logo_url: string | null;
  favicon_url: string | null;
  ga_id: string | null;
  clarity_id: string | null;
}

export default async function AdminSettingsPage() {
  const { supabase } = await requireAdmin();
  const result = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", "global")
    .maybeSingle();

  const row = result.data as SettingsRow | null;
  if (!row) {
    return (
      <div className="rounded-xl border border-amber-300 bg-amber-50 p-6 text-amber-900">
        site_settings tablosu boş. <code>npm run seed:settings</code> komutunu çalıştırın.
      </div>
    );
  }

  const initial: SiteSettingsPayload = {
    brand_name: row.brand_name,
    legal_name: row.legal_name,
    short_name: row.short_name,
    owner: row.owner,
    founded: row.founded,
    phone: row.phone,
    phone_display: row.phone_display,
    whatsapp: row.whatsapp,
    whatsapp_display: row.whatsapp_display,
    email: row.email,
    street: row.street,
    neighborhood: row.neighborhood,
    district: row.district,
    city: row.city,
    postal_code: row.postal_code,
    country: row.country,
    latitude: row.latitude !== null ? Number(row.latitude) : null,
    longitude: row.longitude !== null ? Number(row.longitude) : null,
    maps_place_query: row.maps_place_query,
    hours: row.hours ?? {},
    social: row.social ?? {},
    service_area: row.service_area ?? [],
    tagline: row.tagline,
    short_description: row.short_description,
    stats: row.stats ?? {},
    default_og_image: row.default_og_image,
    logo_url: row.logo_url,
    favicon_url: row.favicon_url,
    ga_id: row.ga_id,
    clarity_id: row.clarity_id,
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Site Ayarları</h1>
        <p className="text-sm text-muted-foreground">
          Marka, iletişim, adres, sosyal medya, çalışma saatleri ve istatistikler.
          Burada yapılan değişiklikler tüm site genelinde geçerlidir (header, footer,
          schema, sayfa metaları). Kayıt sonrası 60 saniye içinde canlıya yansır.
        </p>
      </div>
      <SettingsForm initial={initial} />
    </div>
  );
}
