/**
 * site_settings tablosuna BUSINESS sabitini seed et.
 * lib/constants.ts'teki BUSINESS objesinin DB versiyonu.
 *
 * Kullanim: npm run seed:settings
 */
import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { BUSINESS } from "../lib/constants";

config({ path: ".env.local" });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

async function main() {
  const supabase = createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const payload = {
    id: "global",
    brand_name: BUSINESS.name,
    legal_name: BUSINESS.legalName,
    short_name: BUSINESS.shortName,
    owner: BUSINESS.owner,
    founded: BUSINESS.founded,
    phone: BUSINESS.phone,
    phone_display: BUSINESS.phoneDisplay,
    whatsapp: BUSINESS.whatsapp,
    whatsapp_display: BUSINESS.whatsappDisplay,
    email: BUSINESS.email,
    street: BUSINESS.street,
    neighborhood: BUSINESS.neighborhood,
    district: BUSINESS.district,
    city: BUSINESS.city,
    postal_code: BUSINESS.postalCode,
    country: BUSINESS.country,
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
    maps_place_query: BUSINESS.mapsPlaceQuery,
    hours: BUSINESS.hours,
    social: BUSINESS.social,
    service_area: [...BUSINESS.serviceArea],
    tagline: BUSINESS.tagline,
    short_description: BUSINESS.shortDescription,
    stats: BUSINESS.stats,
    default_og_image: BUSINESS.defaultOgImage,
    ga_id: process.env.NEXT_PUBLIC_GA_ID ?? "",
  };

  const { error } = await supabase.from("site_settings").upsert(payload);
  if (error) {
    console.error("❌", error.message);
    process.exit(1);
  }
  console.log("✅ site_settings seeded");
}

main();
