-- ============================================================================
-- Storage Buckets
-- ============================================================================
-- 4 public bucket: gallery (galeri görselleri), services (hizmet hero),
-- blog (blog cover), branding (logo, favicon, og image)
--
-- RLS:
--   - public read (anyone)
--   - authenticated admin write (insert/update/delete)
-- ============================================================================

-- Buckets
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('gallery', 'gallery', true, 10485760, array['image/jpeg', 'image/png', 'image/webp', 'image/avif']),
  ('services', 'services', true, 10485760, array['image/jpeg', 'image/png', 'image/webp', 'image/avif']),
  ('blog', 'blog', true, 10485760, array['image/jpeg', 'image/png', 'image/webp', 'image/avif']),
  ('branding', 'branding', true, 5242880, array['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/svg+xml', 'image/x-icon'])
on conflict (id) do nothing;

-- Storage policies
-- Public can SELECT (download) from all 4 buckets
do $$
begin
  if not exists (select 1 from pg_policies where schemaname='storage' and policyname='public_read_gallery') then
    create policy "public_read_gallery" on storage.objects for select using (bucket_id = 'gallery');
  end if;
  if not exists (select 1 from pg_policies where schemaname='storage' and policyname='public_read_services') then
    create policy "public_read_services" on storage.objects for select using (bucket_id = 'services');
  end if;
  if not exists (select 1 from pg_policies where schemaname='storage' and policyname='public_read_blog') then
    create policy "public_read_blog" on storage.objects for select using (bucket_id = 'blog');
  end if;
  if not exists (select 1 from pg_policies where schemaname='storage' and policyname='public_read_branding') then
    create policy "public_read_branding" on storage.objects for select using (bucket_id = 'branding');
  end if;

  -- Admin writes (insert/update/delete) — is_admin() check
  if not exists (select 1 from pg_policies where schemaname='storage' and policyname='admin_write_gallery') then
    create policy "admin_write_gallery" on storage.objects for all
      using (bucket_id = 'gallery' and public.is_admin())
      with check (bucket_id = 'gallery' and public.is_admin());
  end if;
  if not exists (select 1 from pg_policies where schemaname='storage' and policyname='admin_write_services') then
    create policy "admin_write_services" on storage.objects for all
      using (bucket_id = 'services' and public.is_admin())
      with check (bucket_id = 'services' and public.is_admin());
  end if;
  if not exists (select 1 from pg_policies where schemaname='storage' and policyname='admin_write_blog') then
    create policy "admin_write_blog" on storage.objects for all
      using (bucket_id = 'blog' and public.is_admin())
      with check (bucket_id = 'blog' and public.is_admin());
  end if;
  if not exists (select 1 from pg_policies where schemaname='storage' and policyname='admin_write_branding') then
    create policy "admin_write_branding" on storage.objects for all
      using (bucket_id = 'branding' and public.is_admin())
      with check (bucket_id = 'branding' and public.is_admin());
  end if;
end $$;

-- ============================================================================
-- site_settings (BUSINESS sabitinin DB versiyonu)
-- ============================================================================
create table if not exists public.site_settings (
  id                      text primary key default 'global',
  brand_name              text not null,
  legal_name              text,
  short_name              text,
  owner                   text,
  founded                 text,
  phone                   text not null,
  phone_display           text not null,
  whatsapp                text not null,
  whatsapp_display        text not null,
  email                   text not null,
  street                  text,
  neighborhood            text,
  district                text,
  city                    text,
  postal_code             text,
  country                 text default 'TR',
  latitude                numeric(10, 7),
  longitude               numeric(10, 7),
  maps_place_query        text,
  hours                   jsonb,                 -- {monday: "09:00-20:00", ...}
  social                  jsonb,                 -- {instagram: "...", facebook: "...", ...}
  service_area            text[] default '{}',
  tagline                 text,
  short_description       text,
  stats                   jsonb,                 -- {yearsOfExperience: 1, ...}
  default_og_image        text,
  logo_url                text,
  favicon_url             text,
  ga_id                   text,
  clarity_id              text,
  resend_api_key_set      boolean default false, -- bilgi amacli
  updated_at              timestamptz not null default now(),
  constraint singleton check (id = 'global')
);

create trigger site_settings_updated_at
  before update on public.site_settings
  for each row execute function public.handle_updated_at();

alter table public.site_settings enable row level security;

create policy "site_settings_public_read"
  on public.site_settings for select
  using (true);

create policy "site_settings_admin_write"
  on public.site_settings for all
  using (public.is_admin())
  with check (public.is_admin());
