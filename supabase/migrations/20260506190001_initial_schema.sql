-- ============================================================================
-- Akse Fotograf - Initial Schema
-- ============================================================================
-- Tum tablolar lib/types.ts'teki tipleri yansitir.
-- Convention:
--   - slug -> primary key (URL frindly, immutable, lowercase ASCII)
--   - text[] -> Postgres array sutunlar (Supabase JS otomatik mapler)
--   - created_at / updated_at -> trigger ile otomatik
-- ============================================================================

create extension if not exists "pgcrypto";

-- ============================================================================
-- updated_at trigger helper
-- ============================================================================
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================================================
-- SERVICES (71 hizmet)
-- ============================================================================
create table public.services (
  slug                  text primary key,
  name                  text not null,
  category              text not null,
  primary_keyword       text not null,
  secondary_keywords    text[] not null default '{}',
  short_description     text not null,
  long_description      text not null,
  features              text[] not null default '{}',
  related_services      text[] not null default '{}',
  gallery_category      text not null,
  icon                  text,
  meta_title            text,
  meta_description      text,
  sort_order            int not null default 0,
  is_published          boolean not null default true,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now()
);

create index services_category_idx on public.services (category);
create index services_published_idx on public.services (is_published);

create trigger services_updated_at
  before update on public.services
  for each row execute function public.handle_updated_at();

-- Service packages (1:N -> services)
create table public.service_packages (
  id            uuid primary key default gen_random_uuid(),
  service_slug  text not null references public.services(slug) on delete cascade,
  name          text not null,
  price_range   text not null,
  description   text,
  includes      text[] not null default '{}',
  popular       boolean not null default false,
  sort_order    int not null default 0,
  created_at    timestamptz not null default now()
);

create index service_packages_service_idx on public.service_packages (service_slug);

-- Service FAQs (1:N -> services)
create table public.service_faqs (
  id            uuid primary key default gen_random_uuid(),
  service_slug  text not null references public.services(slug) on delete cascade,
  question      text not null,
  answer        text not null,
  sort_order    int not null default 0,
  created_at    timestamptz not null default now()
);

create index service_faqs_service_idx on public.service_faqs (service_slug);

-- ============================================================================
-- NEIGHBORHOODS (76 mahalle, 4 ilce)
-- ============================================================================
create table public.neighborhoods (
  slug                    text primary key,
  name                    text not null,
  district                text not null,  -- gebze | darica | cayirova | dilovasi
  postal_code             text,
  population              int,
  description             text not null,
  landmarks               text[] not null default '{}',
  nearby_neighborhoods    text[] not null default '{}',
  popular_services        text[] not null default '{}',
  meta_title              text,
  meta_description        text,
  sort_order              int not null default 0,
  is_published            boolean not null default true,
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);

create index neighborhoods_district_idx on public.neighborhoods (district);
create index neighborhoods_published_idx on public.neighborhoods (is_published);

create trigger neighborhoods_updated_at
  before update on public.neighborhoods
  for each row execute function public.handle_updated_at();

-- Photoshoot locations within a neighborhood (1:N)
create table public.photoshoot_locations (
  id                  uuid primary key default gen_random_uuid(),
  neighborhood_slug   text not null references public.neighborhoods(slug) on delete cascade,
  name                text not null,
  description         text not null,
  best_time_of_day    text,
  latitude            numeric(10, 7),
  longitude           numeric(10, 7),
  sort_order          int not null default 0,
  created_at          timestamptz not null default now()
);

create index photoshoot_locations_neighborhood_idx on public.photoshoot_locations (neighborhood_slug);

-- ============================================================================
-- INDUSTRIAL ZONES (8 OSB)
-- ============================================================================
create table public.industrial_zones (
  slug                    text primary key,
  name                    text not null,
  full_name               text not null,
  district                text not null,
  description             text not null,
  services_offered        text[] not null default '{}',
  notable_tenants_hint    text,
  sort_order              int not null default 0,
  is_published            boolean not null default true,
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);

create index industrial_zones_district_idx on public.industrial_zones (district);

create trigger industrial_zones_updated_at
  before update on public.industrial_zones
  for each row execute function public.handle_updated_at();

create table public.industrial_zone_faqs (
  id            uuid primary key default gen_random_uuid(),
  zone_slug     text not null references public.industrial_zones(slug) on delete cascade,
  question      text not null,
  answer        text not null,
  sort_order    int not null default 0,
  created_at    timestamptz not null default now()
);

create index industrial_zone_faqs_zone_idx on public.industrial_zone_faqs (zone_slug);

-- ============================================================================
-- BLOG POSTS
-- ============================================================================
create table public.blog_posts (
  slug                  text primary key,
  title                 text not null,
  excerpt               text not null,
  content               text not null,
  category              text not null,
  tags                  text[] not null default '{}',
  author                text not null default 'Akse Fotoğrafçılık',
  published_at          timestamptz not null,
  updated_at            timestamptz not null default now(),
  cover_image           text not null,
  reading_time          int not null default 5,
  related_services      text[] not null default '{}',
  related_districts     text[] not null default '{}',
  is_published          boolean not null default true,
  created_at            timestamptz not null default now()
);

create index blog_posts_category_idx on public.blog_posts (category);
create index blog_posts_published_at_idx on public.blog_posts (published_at desc);
create index blog_posts_published_idx on public.blog_posts (is_published);

create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.handle_updated_at();

create table public.blog_post_faqs (
  id          uuid primary key default gen_random_uuid(),
  post_slug   text not null references public.blog_posts(slug) on delete cascade,
  question    text not null,
  answer      text not null,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now()
);

create index blog_post_faqs_post_idx on public.blog_post_faqs (post_slug);

-- ============================================================================
-- TESTIMONIALS (musteri yorumlari)
-- ============================================================================
-- approved=true olanlar public read, admin hepsini gorur ve yonetir.
create table public.testimonials (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  service         text not null,  -- service name (display)
  service_slug    text references public.services(slug) on delete set null,
  district        text,
  neighborhood    text,
  rating          smallint not null check (rating between 1 and 5),
  text            text not null,
  date            date not null default current_date,
  avatar          text,
  approved        boolean not null default false,
  sort_order      int not null default 0,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index testimonials_approved_idx on public.testimonials (approved);
create index testimonials_service_slug_idx on public.testimonials (service_slug);
create index testimonials_district_idx on public.testimonials (district);

create trigger testimonials_updated_at
  before update on public.testimonials
  for each row execute function public.handle_updated_at();

-- ============================================================================
-- GALLERY
-- ============================================================================
create table public.gallery_categories (
  slug          text primary key,
  name          text not null,
  description   text,
  hero_image    text,
  sort_order    int not null default 0,
  is_published  boolean not null default true,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create trigger gallery_categories_updated_at
  before update on public.gallery_categories
  for each row execute function public.handle_updated_at();

create table public.gallery_items (
  id              uuid primary key default gen_random_uuid(),
  category_slug   text not null references public.gallery_categories(slug) on delete cascade,
  src             text not null,
  alt             text not null,
  title           text,
  width           int not null default 1200,
  height          int not null default 1600,
  blur_data_url   text,
  sort_order      int not null default 0,
  created_at      timestamptz not null default now()
);

create index gallery_items_category_idx on public.gallery_items (category_slug);

-- ============================================================================
-- ADMIN PROFILES (Supabase Auth integration)
-- ============================================================================
-- auth.users built-in. Bu tablo ek admin metadata icin.
create table public.admin_profiles (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  full_name   text,
  role        text not null default 'admin' check (role in ('admin', 'editor', 'viewer')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger admin_profiles_updated_at
  before update on public.admin_profiles
  for each row execute function public.handle_updated_at();

-- helper: caller is admin?
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from public.admin_profiles
    where user_id = auth.uid()
      and role in ('admin', 'editor')
  );
$$;

grant execute on function public.is_admin() to authenticated, anon;
