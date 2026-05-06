-- ============================================================================
-- Row Level Security policies
-- ============================================================================
-- Genel ilke:
--   - Anonim kullanici (anon role): is_published=true SELECT
--   - Admin (authenticated + admin_profiles): tum CRUD
--   - testimonials icin ekstra: anonim sadece approved=true gorebilir
-- ============================================================================

-- enable RLS on all tables
alter table public.services enable row level security;
alter table public.service_packages enable row level security;
alter table public.service_faqs enable row level security;
alter table public.neighborhoods enable row level security;
alter table public.photoshoot_locations enable row level security;
alter table public.industrial_zones enable row level security;
alter table public.industrial_zone_faqs enable row level security;
alter table public.blog_posts enable row level security;
alter table public.blog_post_faqs enable row level security;
alter table public.testimonials enable row level security;
alter table public.gallery_categories enable row level security;
alter table public.gallery_items enable row level security;
alter table public.admin_profiles enable row level security;

-- ============================================================================
-- SERVICES
-- ============================================================================
create policy "services_public_read"
  on public.services for select
  using (is_published = true);

create policy "services_admin_all"
  on public.services for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "service_packages_public_read"
  on public.service_packages for select
  using (
    exists (
      select 1 from public.services s
      where s.slug = service_packages.service_slug and s.is_published = true
    )
  );

create policy "service_packages_admin_all"
  on public.service_packages for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "service_faqs_public_read"
  on public.service_faqs for select
  using (
    exists (
      select 1 from public.services s
      where s.slug = service_faqs.service_slug and s.is_published = true
    )
  );

create policy "service_faqs_admin_all"
  on public.service_faqs for all
  using (public.is_admin())
  with check (public.is_admin());

-- ============================================================================
-- NEIGHBORHOODS
-- ============================================================================
create policy "neighborhoods_public_read"
  on public.neighborhoods for select
  using (is_published = true);

create policy "neighborhoods_admin_all"
  on public.neighborhoods for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "photoshoot_locations_public_read"
  on public.photoshoot_locations for select
  using (
    exists (
      select 1 from public.neighborhoods n
      where n.slug = photoshoot_locations.neighborhood_slug and n.is_published = true
    )
  );

create policy "photoshoot_locations_admin_all"
  on public.photoshoot_locations for all
  using (public.is_admin())
  with check (public.is_admin());

-- ============================================================================
-- INDUSTRIAL ZONES
-- ============================================================================
create policy "industrial_zones_public_read"
  on public.industrial_zones for select
  using (is_published = true);

create policy "industrial_zones_admin_all"
  on public.industrial_zones for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "industrial_zone_faqs_public_read"
  on public.industrial_zone_faqs for select
  using (
    exists (
      select 1 from public.industrial_zones z
      where z.slug = industrial_zone_faqs.zone_slug and z.is_published = true
    )
  );

create policy "industrial_zone_faqs_admin_all"
  on public.industrial_zone_faqs for all
  using (public.is_admin())
  with check (public.is_admin());

-- ============================================================================
-- BLOG
-- ============================================================================
create policy "blog_posts_public_read"
  on public.blog_posts for select
  using (is_published = true and published_at <= now());

create policy "blog_posts_admin_all"
  on public.blog_posts for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "blog_post_faqs_public_read"
  on public.blog_post_faqs for select
  using (
    exists (
      select 1 from public.blog_posts p
      where p.slug = blog_post_faqs.post_slug
        and p.is_published = true
        and p.published_at <= now()
    )
  );

create policy "blog_post_faqs_admin_all"
  on public.blog_post_faqs for all
  using (public.is_admin())
  with check (public.is_admin());

-- ============================================================================
-- TESTIMONIALS
-- ============================================================================
-- public sadece approved gorebilir; admin hepsini.
create policy "testimonials_public_read_approved"
  on public.testimonials for select
  using (approved = true);

create policy "testimonials_admin_all"
  on public.testimonials for all
  using (public.is_admin())
  with check (public.is_admin());

-- ============================================================================
-- GALLERY
-- ============================================================================
create policy "gallery_categories_public_read"
  on public.gallery_categories for select
  using (is_published = true);

create policy "gallery_categories_admin_all"
  on public.gallery_categories for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "gallery_items_public_read"
  on public.gallery_items for select
  using (
    exists (
      select 1 from public.gallery_categories c
      where c.slug = gallery_items.category_slug and c.is_published = true
    )
  );

create policy "gallery_items_admin_all"
  on public.gallery_items for all
  using (public.is_admin())
  with check (public.is_admin());

-- ============================================================================
-- ADMIN PROFILES
-- ============================================================================
-- Bir kullanici sadece kendi profilini gorebilir; admin'ler hepsini gorebilir.
create policy "admin_profiles_self_read"
  on public.admin_profiles for select
  using (auth.uid() = user_id or public.is_admin());

create policy "admin_profiles_admin_manage"
  on public.admin_profiles for all
  using (public.is_admin())
  with check (public.is_admin());
