/**
 * Supabase seed script.
 *
 * Mevcut lib/data/*.ts dosyalarini Supabase Postgres'e push eder.
 * Idempotent: tekrar calistirilabilir (upsert + delete-reinsert pattern).
 *
 * Calistirma:
 *   1. Supabase project olustur, Settings -> API'den URL + service_role key al
 *   2. .env.local'a ekle:
 *        NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
 *        NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
 *        SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
 *   3. Migration'lari Supabase Dashboard -> SQL Editor'da calistir:
 *        - 20260506190001_initial_schema.sql
 *        - 20260506190002_rls_policies.sql
 *   4. npm run seed
 *
 * UYARI: service_role key RLS bypass eder. Production .env'e koymayin,
 * sadece local'de seed icin.
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

import { services, SERVICE_CATEGORIES } from "../lib/data/services";
import { neighborhoods } from "../lib/data/neighborhoods";
import { industrialZones } from "../lib/data/industrial-zones";
import { blogPosts } from "../lib/data/blog-posts";
import { GALLERY_CATEGORIES } from "../lib/data/gallery-categories";
import type { Database } from "../lib/supabase/types";

config({ path: ".env.local" });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error(
    "❌ Eksik env vars. .env.local dosyaniza NEXT_PUBLIC_SUPABASE_URL ve SUPABASE_SERVICE_ROLE_KEY ekleyin.",
  );
  process.exit(1);
}

const supabase = createClient<Database>(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

function log(label: string, result: { error: unknown }) {
  if (result.error) {
    const msg = (result.error as { message?: string }).message ?? String(result.error);
    console.error(`  ❌ ${label}: ${msg}`);
  } else {
    console.log(`  ✓ ${label}`);
  }
}

async function seedGalleryCategories() {
  console.log("\n📸 Gallery Categories...");
  for (let i = 0; i < GALLERY_CATEGORIES.length; i++) {
    const cat = GALLERY_CATEGORIES[i]!;
    log(
      `gallery_categories: ${cat.slug}`,
      await supabase.from("gallery_categories").upsert({
        slug: cat.slug,
        name: cat.name,
        description: cat.description,
        sort_order: i,
        is_published: true,
      }),
    );
  }
}

async function seedServices() {
  console.log("\n🛠  Services (71)...");
  for (let i = 0; i < services.length; i++) {
    const s = services[i]!;
    log(
      `services: ${s.slug}`,
      await supabase.from("services").upsert({
        slug: s.slug,
        name: s.name,
        category: s.category,
        primary_keyword: s.primaryKeyword,
        secondary_keywords: s.secondaryKeywords,
        short_description: s.shortDescription,
        long_description: s.longDescription,
        features: s.features,
        related_services: s.relatedServices,
        gallery_category: s.galleryCategory,
        icon: s.icon ?? null,
        meta_title: s.metaTitle ?? null,
        meta_description: s.metaDescription ?? null,
        sort_order: i,
        is_published: true,
      }),
    );

    await supabase.from("service_packages").delete().eq("service_slug", s.slug);
    await supabase.from("service_faqs").delete().eq("service_slug", s.slug);

    if (s.packages.length > 0) {
      log(
        `  packages (${s.packages.length})`,
        await supabase.from("service_packages").insert(
          s.packages.map((pkg, idx) => ({
            service_slug: s.slug,
            name: pkg.name,
            price_range: pkg.priceRange,
            description: pkg.description ?? null,
            includes: pkg.includes,
            popular: pkg.popular ?? false,
            sort_order: idx,
          })),
        ),
      );
    }

    if (s.faqs.length > 0) {
      log(
        `  faqs (${s.faqs.length})`,
        await supabase.from("service_faqs").insert(
          s.faqs.map((faq, idx) => ({
            service_slug: s.slug,
            question: faq.question,
            answer: faq.answer,
            sort_order: idx,
          })),
        ),
      );
    }
  }
}

async function seedNeighborhoods() {
  console.log("\n🏘  Neighborhoods (76)...");
  for (let i = 0; i < neighborhoods.length; i++) {
    const n = neighborhoods[i]!;
    log(
      `neighborhoods: ${n.district}/${n.slug}`,
      await supabase.from("neighborhoods").upsert({
        slug: n.slug,
        name: n.name,
        district: n.district,
        postal_code: n.postalCode ?? null,
        population: n.population ?? null,
        description: n.description,
        landmarks: n.landmarks,
        nearby_neighborhoods: n.nearbyNeighborhoods,
        popular_services: n.popularServices,
        meta_title: n.metaTitle ?? null,
        meta_description: n.metaDescription ?? null,
        sort_order: i,
        is_published: true,
      }),
    );

    await supabase.from("photoshoot_locations").delete().eq("neighborhood_slug", n.slug);

    if (n.photoshootLocations.length > 0) {
      log(
        `  photoshoot_locations (${n.photoshootLocations.length})`,
        await supabase.from("photoshoot_locations").insert(
          n.photoshootLocations.map((loc, idx) => ({
            neighborhood_slug: n.slug,
            name: loc.name,
            description: loc.description,
            best_time_of_day: loc.bestTimeOfDay ?? null,
            latitude: loc.coordinates?.[0] ?? null,
            longitude: loc.coordinates?.[1] ?? null,
            sort_order: idx,
          })),
        ),
      );
    }
  }
}

async function seedIndustrialZones() {
  console.log("\n🏭 Industrial Zones (8)...");
  for (let i = 0; i < industrialZones.length; i++) {
    const z = industrialZones[i]!;
    log(
      `industrial_zones: ${z.slug}`,
      await supabase.from("industrial_zones").upsert({
        slug: z.slug,
        name: z.name,
        full_name: z.fullName,
        district: z.district,
        description: z.description,
        services_offered: z.servicesOffered,
        notable_tenants_hint: z.notableTenantsHint ?? null,
        sort_order: i,
        is_published: true,
      }),
    );

    await supabase.from("industrial_zone_faqs").delete().eq("zone_slug", z.slug);

    if (z.faqs.length > 0) {
      log(
        `  faqs (${z.faqs.length})`,
        await supabase.from("industrial_zone_faqs").insert(
          z.faqs.map((faq, idx) => ({
            zone_slug: z.slug,
            question: faq.question,
            answer: faq.answer,
            sort_order: idx,
          })),
        ),
      );
    }
  }
}

async function seedBlogPosts() {
  console.log("\n✍️  Blog Posts...");
  for (const p of blogPosts) {
    log(
      `blog_posts: ${p.slug}`,
      await supabase.from("blog_posts").upsert({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        content: p.content,
        category: p.category,
        tags: p.tags,
        author: p.author,
        published_at: p.publishedAt,
        cover_image: p.coverImage,
        reading_time: p.readingTime,
        related_services: p.relatedServices ?? [],
        related_districts: p.relatedDistricts ?? [],
        is_published: true,
      }),
    );

    await supabase.from("blog_post_faqs").delete().eq("post_slug", p.slug);

    if (p.faqs && p.faqs.length > 0) {
      log(
        `  faqs (${p.faqs.length})`,
        await supabase.from("blog_post_faqs").insert(
          p.faqs.map((faq, idx) => ({
            post_slug: p.slug,
            question: faq.question,
            answer: faq.answer,
            sort_order: idx,
          })),
        ),
      );
    }
  }
}

async function main() {
  console.log("🚀 Akse Fotograf — Supabase Seed");
  console.log(`   Target: ${url}`);
  console.log(`   Categories: ${SERVICE_CATEGORIES.length}`);
  console.log("");

  await seedGalleryCategories();
  await seedServices();
  await seedNeighborhoods();
  await seedIndustrialZones();
  await seedBlogPosts();

  console.log("\n✅ Seed tamamlandi.");
  console.log("\nSonraki adim:");
  console.log("  1. Admin user olustur:");
  console.log("     Supabase Dashboard -> Authentication -> Users -> Add user");
  console.log("  2. admin_profiles kaydi:");
  console.log(
    "     SQL Editor: insert into admin_profiles (user_id, role) values ('<user_id>', 'admin');",
  );
  console.log("  3. /admin/login adresinden giris yap");
}

main().catch((err) => {
  console.error("❌ Seed hatasi:", err);
  process.exit(1);
});
