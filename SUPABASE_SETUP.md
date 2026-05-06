# Supabase Kurulum Kılavuzu

Akse Fotoğrafçılık sitesini Supabase'e bağlamak için adım adım rehber.

---

## 1. Supabase Projesi Oluştur

1. https://supabase.com/dashboard adresine git
2. **New project** tıkla
3. **Name:** `akse-fotograf`
4. **Database Password:** güçlü bir şifre seç ve **mutlaka 1Password'a kaydet**
5. **Region:** **Frankfurt (eu-central-1)** — Türkiye'ye en yakın AWS bölgesi
6. **Pricing Plan:** Free (başlangıç için yeterli)
7. **Create new project** → 2 dakika bekle

---

## 2. API Bilgilerini Al

Project hazır olunca:

1. Sol menüden **Settings** → **API**
2. Şu üç değeri kopyala:
   - `Project URL` → `https://xxxxx.supabase.co`
   - `anon public` key → `eyJhbGc...` (uzun string, kısa olan)
   - `service_role` key → `eyJhbGc...` (**GİZLİ! Browser'a sızdırma**)

---

## 3. Local Env Dosyası

Projedeki `.env.example` dosyasını `.env.local` olarak kopyala:

```bash
cp .env.example .env.local
```

`.env.local` içine yukarıdaki üç değeri yapıştır:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

---

## 4. Migration'ları Çalıştır (Schema + RLS)

Supabase Dashboard'da:

1. Sol menüden **SQL Editor** → **New query**
2. Şu dosyanın içeriğini yapıştır ve **Run**:

   ```
   supabase/migrations/20260506190001_initial_schema.sql
   ```

3. Yeni query → şunu yapıştır ve **Run**:

   ```
   supabase/migrations/20260506190002_rls_policies.sql
   ```

> **Doğrulama:** Sol menü → **Database** → **Tables** → 13 tablo görmelisin
> (`services`, `service_packages`, `service_faqs`, `neighborhoods`,
> `photoshoot_locations`, `industrial_zones`, `industrial_zone_faqs`,
> `blog_posts`, `blog_post_faqs`, `testimonials`, `gallery_categories`,
> `gallery_items`, `admin_profiles`).

---

## 5. Mevcut Veriyi Seed Et

`lib/data/*.ts` dosyalarındaki 71 hizmet, 76 mahalle, 8 sanayi bölgesi, 8 blog yazısı, 26 galeri kategorisini Supabase'e push et:

```bash
npm run seed
```

5-10 dakika sürer. Konsol log'unda her tablo + slug için ✓ veya ❌ görürsün.

> **Hata alırsan:** `.env.local`'daki anahtarları kontrol et. Service role
> key olmadan seed çalışmaz (RLS yüzünden).

---

## 6. Admin Kullanıcısı Oluştur

### 6a. Supabase Auth User

1. Dashboard → **Authentication** → **Users** → **Add user** → **Create new user**
2. **Email:** kendi mail adresin (örn. `info@aksedigital.com`)
3. **Password:** güçlü şifre
4. **Auto Confirm User:** ✅ (email doğrulamayı atla)
5. **Create user**

### 6b. Admin Rol Tanımı

Yeni oluşturduğun kullanıcının `id`'sini kopyala (Users listesinde görünür).
SQL Editor → **New query**:

```sql
insert into public.admin_profiles (user_id, role, full_name)
values ('YENI_USER_ID_BURAYA', 'admin', 'Akse Fotoğrafçılık');
```

`YENI_USER_ID_BURAYA` yerine kopyaladığın UUID'yi yapıştır ve **Run**.

---

## 7. Local'de Test Et

```bash
npm run dev
```

→ http://localhost:3000/admin/login

E-posta + şifre ile gir. `/admin` dashboard'a yönlendirilirsin.

> **Sorun:** "unauthorized" hatası alırsan adım 6b'yi tekrar kontrol et.

---

## 8. Vercel Production'a Bağla

1. Vercel Dashboard → Project (`akse-fotografcilik`) → **Settings** → **Environment Variables**
2. Şu üç değişkeni ekle (`Production`, `Preview` ortamlarına):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. **Save**
4. Deployments sekmesinden son deploy'u **Redeploy** et
5. Canlı admin: https://aksefotograf.com/admin/login

---

## 9. Sayfaları DB'ye Bağla (Sonraki Adım)

Şu an sayfa içerikleri hâlâ `lib/data/*.ts` dosyalarından okunuyor. DB'ye
geçirmek için her dinamik route'u `lib/db/*` fetcher'larına çevirmek gerekiyor:

| Sayfa | Eski Import | Yeni Import |
|-------|-------------|-------------|
| `app/hizmetler/[hizmet]/page.tsx` | `from "@/lib/data/services"` | `from "@/lib/db/services"` |
| `app/bolgeler/[ilce]/[mahalle]/page.tsx` | `from "@/lib/data/neighborhoods"` | `from "@/lib/db/neighborhoods"` |
| `app/blog/[slug]/page.tsx` | `from "@/lib/data/blog-posts"` | `from "@/lib/db/blog"` |
| `app/sanayi-bolgeleri/[bolge]/page.tsx` | `from "@/lib/data/industrial-zones"` | `from "@/lib/db/industrial-zones"` |
| Testimonials kullananlar | `from "@/lib/data/testimonials"` | `from "@/lib/db/testimonials"` |

Fetcher fonksiyonları **ISR (revalidate: 60 saniye)** ile cache'lenir. Admin
panel mutation'ları otomatik olarak `revalidateTag()` çağırır.

---

## 10. Destek

- **Supabase Docs:** https://supabase.com/docs
- **RLS Doğrulama:** Dashboard → SQL Editor → `select * from public.is_admin();` (auth.uid() ile çalışır)
- **Sorun giderme:** `npm run dev` log'unu izle, `[db.*]` prefixli hatalar fetcher'lardan gelir.

---

## Önemli Güvenlik Notları

- ⚠️ `SUPABASE_SERVICE_ROLE_KEY` **asla** browser/client tarafına geçmemeli
- ⚠️ `.env.local` git'e commit edilmez (zaten `.gitignore`'da)
- ⚠️ Vercel Environment Variables'da `service_role` key **sadece** Production + Preview için kullanılmalı, Development için ayrı bir key (veya yine aynı) kullanın
- ✅ Public okumalar `anon` key ile RLS public_read policy üzerinden gider
- ✅ Admin yazma işlemleri `auth.uid()` üzerinden RLS admin_all policy ile geçer
