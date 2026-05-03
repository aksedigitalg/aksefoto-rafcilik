# CLAUDE.md — Akse Fotoğrafçılık Projesi Rehberi

> Bu dosya, Claude Code (veya başka bir AI asistanı) projeye girdiğinde **mimari
> kararları, kod kalıplarını, yapılan/yapılacakları** hızlıca anlaması için yazılmıştır.
> Kullanıcı odaklı tanıtım için **README.md**'ye bakın.

## Proje Özeti

**Akse Fotoğrafçılık**, Gebze Güzeller Mah.'da 2025'te kurulan profesyonel fotoğraf
stüdyosu için yerel SEO odaklı Next.js 15 web sitesi.

**Hedef:** Kocaeli (Gebze, Darıca, Çayırova, Dilovası) bölgesinde "fotoğrafçı"
arama sorgularında Google ilk sıralarda yer almak. 1500+ long-tail anahtar kelime
hedefi (76 mahalle × 70+ hizmet kombinasyonları).

**Müşteri:** info@aksedigital.com — operasyonel domain Akse Digital olsa da,
**public-facing brand 100% Akse Fotoğrafçılık**'tır. Public sayfalarda "Akse Digital"
referansı **YOK** (e-posta adresi hariç — o operasyonel).

## Teknoloji Yığını

```
Next.js 15.1.6   (App Router, Server Components ağırlıklı, generateStaticParams ile SSG)
React 19
TypeScript 5.7   (strict + noUncheckedIndexedAccess)
Tailwind CSS 4   (CSS-config, oklch renk sistemi, @tailwindcss/postcss plugin)
shadcn/ui        (new-york stili, components.json)
DM Sans          (Google Fonts — "Google Sans" public değil, en yakın alternatif)
lucide-react     (ikonlar)
framer-motion    (ölçülü; sadece scroll/hover)
react-hook-form + zod (form + Türkçe doğrulama)
Resend           (iletişim formu e-posta gönderimi)
next-sitemap     (post-build sitemap üretimi)
```

## Önemli Mimari Kararlar

### 1. **Tek noktadan marka yönetimi**

[`lib/constants.ts`](./lib/constants.ts) — `BUSINESS` sabiti tüm site genelinde
kullanılır. Marka adı, telefon, adres, sosyal medya, çalışma saatleri, istatistikler.
**Bu dosyayı düzenlemek tüm site (Header, Footer, Schema, CTA, Sitemap) otomatik
günceller.**

```ts
// Yeni bir bilgi her yerde gözüksün istiyorsan:
// 1. lib/constants.ts içine ekle
// 2. Bileşenlerde BUSINESS.xxx olarak kullan
// 3. Hiçbir yere hardcode etme
```

### 2. **Tek noktadan görsel yönetimi**

[`lib/data/unsplash-images.ts`](./lib/data/unsplash-images.ts) — Unsplash photo ID
haritası. 26 galeri kategorisi her biri için bir ID. Kullanım:

```ts
import { getCategoryImage, HERO_IMAGES, getBlogCoverImage } from "@/lib/data/unsplash-images";
<Image src={getCategoryImage("dugun")} ... />
```

Stüdyo gerçek görsellerini yüklediğinde: `CATEGORY_PHOTO_IDS` mapping'inde ilgili
kategorinin değerini `/images/dugun-hero.jpg` gibi local yola çevir. URL builder
(`buildUrl`) çoktan IDs için tasarlandı; local için string return etmek için tip
genişletmesi gerekebilir.

### 3. **Veri katmanı klasör yapısı**

```
lib/data/
├── services/                     # 71 hizmet, 9 kategori dosyası
│   ├── index.ts                  # birleştirici + helper'lar
│   ├── dugun-toren.ts            # 14 hizmet
│   ├── bebek-aile.ts             # 10 hizmet
│   ├── portre-kisisel.ts         # 8 hizmet
│   ├── belge.ts                  # 6 hizmet
│   ├── ticari-urun.ts            # 8 hizmet
│   ├── mekan-kurumsal.ts         # 9 hizmet
│   ├── etkinlik.ts               # 4 hizmet
│   ├── video-drone.ts            # 8 hizmet
│   └── egitim-ek.ts              # 5 hizmet
├── neighborhoods/                # 76 mahalle, 4 ilçe dosyası
│   ├── index.ts                  # birleştirici + helper'lar
│   ├── gebze.ts                  # 40 mahalle
│   ├── darica.ts                 # 14 mahalle
│   ├── cayirova.ts               # 10 mahalle
│   └── dilovasi.ts               # 12 mahalle
├── industrial-zones.ts           # 8 OSB B2B sayfaları
├── testimonials.ts               # 12 müşteri yorumu (örnek)
├── blog-posts.ts                 # 8 başlangıç yazısı
├── gallery-categories.ts         # 26 galeri kategorisi metadata
└── unsplash-images.ts            # Görsel haritası
```

**Yeni hizmet eklemek için:** ilgili kategori dosyasına bir entry ekle. `index.ts`
otomatik birleştirir. `Service` tipi `lib/types.ts`'te tanımlı.

**Yeni mahalle eklemek için:** ilgili ilçe dosyasına entry ekle, slug ile referans
verilebilir.

### 4. **Dinamik route'lar (generateStaticParams ile SSG)**

```
/hizmetler/[hizmet]              71 sayfa → her hizmet build time'da prerender
/bolgeler/[ilce]                 4 sayfa
/bolgeler/[ilce]/[mahalle]       76 sayfa
/sanayi-bolgeleri/[bolge]        8 sayfa
/galeri/[kategori]               26 sayfa
/blog/[slug]                     8 sayfa (genişletilebilir)
/blog/kategori/[kategori]        Blog kategori filtresi
```

Tüm dinamik route'lar `generateStaticParams` kullanır → build time'da statik HTML
üretir. Dev/runtime'da hızlı.

### 5. **JSON-LD Schema Markup**

[`lib/schema.ts`](./lib/schema.ts) içinde 8 üretici fonksiyon:
- `localBusinessSchema()` → root layout'ta her sayfada
- `serviceSchema()` → her hizmet sayfasında
- `neighborhoodSchema()` → her mahalle sayfasında
- `faqSchema()` → SSS bölümü olan her sayfada
- `breadcrumbSchema()` → tüm iç sayfalarda (`<BreadcrumbNav>` otomatik üretir)
- `blogPostSchema()` → blog yazılarında
- `reviewSchema()` → müşteri yorumlarında
- `personSchema()` → Hakkımızda sayfasında

Sayfaya eklemek için: `<JsonLd data={...} />` veya `<JsonLd data={[a, b]} />`.

### 6. **SEO yardımcısı**

[`lib/seo.ts`](./lib/seo.ts) `buildMetadata()` — Next.js Metadata nesnesi üretir;
Open Graph + Twitter Card + canonical + robots + geo meta otomatik.

```ts
export const metadata = buildMetadata({
  title: "Sayfa Başlığı",
  description: "...",
  path: "/yol",
  keywords: ["..."],
  type: "article", // blog yazıları için
});
```

### 7. **Türkçe SEO detayları**

- [`lib/utils.ts`](./lib/utils.ts) `slugify()` Türkçe karakterleri normalize eder
  (ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u). URL'lerde sadece ASCII.
- `geo.region: TR-41`, `geo.placename`, `geo.position`, `ICBM` meta tag'leri yerel
  SEO sinyali olarak `lib/seo.ts`'te ekleniyor.
- `lang="tr"` HTML, `locale: "tr_TR"` Open Graph.

## Kritik Bileşenler

### Layout

| Dosya | Görev |
|-------|-------|
| `components/layout/Header.tsx` | Sticky header, mobil hamburger, telefon CTA, **DM Sans logo + alt etiket + ikonlu logo** |
| `components/layout/Footer.tsx` | 4 sütun: Hizmetler, Bölgeler, Kurumsal, Sosyal Medya. KVKK linkleri en altta |
| `components/floating/WhatsAppFloat.tsx` | Sağ alt sticky WhatsApp butonu |
| `components/floating/PhoneFloat.tsx` | Mobilde alt sticky telefon butonu |

### Section Bileşenleri

| Dosya | Görev |
|-------|-------|
| `components/sections/CTABanner.tsx` | Tüm sayfalarda kullanılan CTA. **WhatsApp düğmesi `variant="whatsapp"` (yeşil) — `outline` ile beyaz/beyaz görünmez sorunu çözüldü.** |
| `components/sections/FAQAccordion.tsx` | SSS — schema markup + accordion |
| `components/sections/PricingTable.tsx` | 3 paket karşılaştırma, "popüler" badge |
| `components/sections/TestimonialSlider.tsx` | Müşteri yorumları grid |
| `components/sections/RelatedServices.tsx` | İlgili hizmet kartları (4'lü) |
| `components/sections/ProcessSteps.tsx` | "Nasıl çalışıyoruz" 5 adımlı süreç (varsayılanı var, opsiyonel `steps` prop) |
| `components/sections/TrustBadges.tsx` | İstatistik rozetleri (Google puanı, çekim sayısı, vb.) |

### SEO Bileşenleri

| Dosya | Görev |
|-------|-------|
| `components/seo/JsonLd.tsx` | JSON-LD wrapper (tek obje veya array kabul eder) |
| `components/seo/BreadcrumbNav.tsx` | Breadcrumb + otomatik schema markup |

### Form

| Dosya | Görev |
|-------|-------|
| `components/forms/ContactForm.tsx` | react-hook-form + zod + KVKK onay + honeypot anti-spam |
| `app/api/contact/route.ts` | Resend ile e-posta. Rate limiting (3/dakika/IP), honeypot kontrolü. Resend API key yoksa console.log fallback. |

## Bilinen Sorunlar ve Çözümleri

### 1. Google Maps Embed API Key Hatası

**Sorun:** `<iframe src="https://www.google.com/maps/embed/v1/place?key=&q=...">` —
Google API key olmadan reddediyor.

**Çözüm:** İframe kaldırıldı, yerine **tıklanabilir konum kartı** eklendi
(`getMapsLink()` ile yeni sekmede Google Maps açar).
[`app/iletisim/page.tsx`](./app/iletisim/page.tsx) içinde "Stüdyo Konumumuz" kartı.

**Eğer iframe geri istenirse:** Google Cloud Console'dan Maps Embed API key alın,
`.env.local`'a `NEXT_PUBLIC_GMAPS_API_KEY=` ekleyin, iframe URL'ine `&key=$key` koyun.

### 2. CTA WhatsApp Düğmesi Görünmüyor

**Sorun:** `variant="outline"` Button bileşeninde `bg-background` (beyaz) default.
Sonra `className="text-white"` eklenmiş → beyaz arkaplanda beyaz yazı.

**Çözüm:** Tüm CTA WhatsApp düğmeleri `variant="whatsapp"` (yeşil #25D366, beyaz
yazı) — hem görünür hem WhatsApp markası uyumlu.

### 3. "Google Sans" Public Değil

**Sorun:** Kullanıcı Google Sans istedi ama Google Fonts'ta public sürüm yok.

**Çözüm:** **DM Sans** kullanıldı (Google Fonts public, görsel olarak Google Sans'a
neredeyse aynı, Türkçe karakter desteği tam). [`app/layout.tsx`](./app/layout.tsx)
içinde `next/font/google`'dan import.

CSS değişkeni: `--font-sans: DM Sans, "Google Sans", "Product Sans", system-ui...`
fallback chain'i ile.

### 4. TypeScript `noUncheckedIndexedAccess`

`split(" ")[0]` gibi index access'lerde sonuç `string | undefined`. Strict modda
hata verir. **Çözüm:** Nullish coalescing ile guard:

```ts
const firstWord = service.name.split(" ")[0] ?? "";
```

### 5. Build Sırasında ProcessSteps Hatası

**Sorun:** `<ProcessSteps />` çağrıldığında `steps` prop required idi.

**Çözüm:** [`components/sections/ProcessSteps.tsx`](./components/sections/ProcessSteps.tsx)
içinde `steps?: ProcessStep[]` ve `DEFAULT_STEPS` fallback.

## Geliştirme Komutları

```bash
# Bağımlılıkları yükle
npm install

# Dev sunucusu (3000 doluysa: npm run dev -- -p 3001)
npm run dev

# Production build
npm run build

# Production sunucu
npm start
# veya farklı portta
npx next start -p 3001

# TypeScript tip kontrolü
npm run typecheck

# Lint
npm run lint

# Format (Prettier)
npm run format
```

## Mevcut Lokal Sunucu

Önceki çalışmada **PID 4008** üzerinden detached olarak port 3001'de çalıştırıldı.
Loglar: `c:\Users\Cevat\Desktop\akse-fotografcilik\akse-server.log`

Durdurmak için:
```powershell
Stop-Process -Id 4008
# veya port-bazlı
Get-NetTCPConnection -LocalPort 3001 | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
```

## Yapılacaklar (Roadmap)

### Yüksek Öncelik (Kullanıcı Eylemi)
- [ ] **Gerçek görseller** yüklemek: `/public/images/` altına stüdyo çekimleri,
      `lib/data/unsplash-images.ts` mapping'ini local yollara çevirmek
- [ ] **Logo/favicon** yüklemek: `/public/logo.png`, `/public/icon-192.png`,
      `/public/icon-512.png`, `/public/favicon.ico`, `/public/og/default.jpg`
- [ ] **`lib/constants.ts` ince ayar**:
  - `owner` → stüdyo sahibinin gerçek adı (Person schema)
  - `latitude`/`longitude` → Google Maps'ten kesin koordinat
  - `social.facebook`/`youtube` → gerçek linkler (varsa)
- [ ] **`.env.local`** üretim değerleri: RESEND_API_KEY, GA_ID, CLARITY_ID

### Orta Öncelik (İçerik Genişletme)
- [ ] Hizmet sayfalarının `longDescription` alanını 1500+ kelimeye çıkarma
      (öncelik: dugun-fotografcisi, biyometrik-fotograf-cekimi, urun-fotograf-cekimi)
- [ ] Mahalle açıklamalarını 400+ kelimeye genişletme
      (öncelik: Eskihisar, Bayramoğlu, Şekerpınar, Güzeller)
- [ ] Blog yazısı sayısını 8'den 50'ye çıkarma (aylık 4-8 yeni yazı)
- [ ] Gerçek müşteri yorumlarını `lib/data/testimonials.ts`'e ekleme

### Düşük Öncelik (Optimizasyon)
- [ ] Galeri lightbox/modal (gerçek görseller eklendikten sonra)
- [ ] Instagram feed entegrasyonu (footer üstü)
- [ ] Cloudflare Turnstile (env hazır, sadece script eklenecek)
- [ ] E-posta bülten kaydı

## Tipik Görev Kalıpları (Bir Sonraki Claude Oturumu için)

### Kullanıcı: "Düğün hizmet sayfasının içeriğini detaylandır"

```
1. lib/data/services/dugun-toren.ts dosyasını aç
2. slug "dugun-fotografcisi" entry'sini bul
3. longDescription alanını 1500+ kelimeye genişlet
4. Doğal Türkçe SEO copywriting kuralları:
   - Ana anahtar kelime ilk paragrafta + H1'de + meta'da
   - LSI varyasyonlar serpilmiş (kelime doldurma DEĞİL)
   - Yerel referanslar (Bayramoğlu sahili, Eskihisar, vs.)
   - 4-6 H2/H3 alt başlık
   - Sayısal veri (10+ yıl, 1000+ çift, vb.)
   - Aktif çatı, samimi ama profesyonel ton
5. faqs alanına 8+ SSS olduğundan emin ol
6. npm run build → tip hatası yoksa OK
```

### Kullanıcı: "X mahallesinin açıklamasını uzat"

```
1. lib/data/neighborhoods/{ilce}.ts içinde slug'ı bul
2. description alanını 400+ kelimeye çıkar:
   - Mahallenin özel coğrafi/kültürel özellikleri
   - Demografik (genç aile / esnaf yoğun / sanayi yoğun vb.)
   - O mahalleden geçen önemli yollar/ulaşım
   - Yerel mekanlar (cami, park, AVM, çarşı)
   - Çekim için en uygun konumlar (zaten landmarks/photoshootLocations var)
   - Akse stüdyosuna mesafe (yerel SEO sinyali)
3. landmarks ve photoshootLocations'ı zenginleştir
```

### Kullanıcı: "Yeni blog yazısı ekle"

```
1. lib/data/blog-posts.ts içine yeni entry:
   - slug (Türkçe karakter yok, tire ile)
   - title (60-70 karakter, anahtar kelime baş)
   - excerpt (160 karakter, meta description)
   - content (1500-2500 kelime, ## H2 + ### H3 markdown)
   - category (mevcut Düğün/Bebek & Aile/Belge/...) veya yenisi
   - tags (5-8 etiket)
   - publishedAt (ISO tarih)
   - readingTime (kelime sayısı / 200)
   - faqs (3-6 soru-cevap, FAQPage schema için)
   - relatedServices (slug array)
2. Build alıp /blog'da göründüğünü doğrula
```

### Kullanıcı: "Yeni hizmet ekle"

```
1. lib/data/services/{kategori}.ts dosyasında array sonuna yeni Service ekle
2. Tüm zorunlu alanları doldur (lib/types.ts → Service tipi):
   slug, name, category, primaryKeyword, secondaryKeywords (5-8),
   shortDescription (1-2 cümle), longDescription (200+ kelime başlangıç),
   features (4-8), packages (3 paket, ortadaki popular: true),
   faqs (6-8), relatedServices (3-5 slug), galleryCategory
3. Eğer galleryCategory yeniyse: lib/data/gallery-categories.ts ve
   lib/types.ts → GalleryCategory tipinde ekle
4. lib/data/unsplash-images.ts → CATEGORY_PHOTO_IDS'a ID ekle
5. Build alıp dinamik route'un sayfa ürettiğini doğrula
```

### Kullanıcı: "Marka adı/telefon değişti"

```
1. lib/constants.ts → BUSINESS sabitini güncelle
2. Build al — tüm site otomatik günceller (Header, Footer, Schema, CTA, vb.)
3. Hardcode arama: grep -r "0533 241" ya da grep -r "Akse Fotoğraf" yapıp
   constants kullanmayan yerleri düzelt (olmamalı normalde)
```

## Büyük Yeniden Yapılandırma Kararları

### Niye 71 hizmeti tek dosya değil 9 dosyaya böldük?
Tek dosyada 71 servis × 80-100 satır = 7.000+ satır olur, sürdürülemez.
Kategori bazlı dosyalama (`dugun-toren.ts`, `bebek-aile.ts`, ...) hem index.ts
otomatik birleştiriyor hem de `git diff` okunabilir oluyor.

### Niye 76 mahalleyi ilçeye böldük?
Aynı mantık. Gebze 40 mahalle tek dosyada, Darıca 14 ayrı, vb. Tek `index.ts`
birleştirici.

### Niye Playfair + Inter yerine sadece DM Sans?
Kullanıcı "Google Sans" istedi (= tek font, modern, sleek). DM Sans bunu sağlıyor.
Display tipografi için weight farkı (700/800) yeterli; iki font ailesi karmaşık.

### Niye gerçek Maps iframe yerine tıklanabilir kart?
Google Maps Embed API artık API key zorunlu (kullanıcı ödeme yapmadıkça reddediyor).
Tıklanabilir kart + "Maps'te aç" linki UX olarak da daha hafif (sayfa yüklenmesi
hızlanıyor + 3rd party fingerprint azalıyor).

### Niye Akse Digital referansları temizlendi?
Kullanıcı net olarak "akse digital ile ilgili bir şey olmasın" dedi. Public-facing
brand 100% Akse Fotoğrafçılık. Sadece operasyonel email (info@aksedigital.com)
korundu — bu domain config'i, brand değil.

## Önemli Dosyaları Hızlı Bul

| Ne Yapmak İstiyorsun? | Hangi Dosya? |
|------------------------|--------------|
| Marka adı, telefon, adres değiştir | `lib/constants.ts` |
| Hizmet ekle/düzenle | `lib/data/services/{kategori}.ts` |
| Mahalle ekle/düzenle | `lib/data/neighborhoods/{ilce}.ts` |
| OSB/Sanayi sayfası düzenle | `lib/data/industrial-zones.ts` |
| Blog yazısı ekle | `lib/data/blog-posts.ts` |
| Müşteri yorumu ekle | `lib/data/testimonials.ts` |
| Görsel mapping değiştir | `lib/data/unsplash-images.ts` |
| Schema markup özelleştir | `lib/schema.ts` |
| Meta tag template | `lib/seo.ts` |
| Header görünümü | `components/layout/Header.tsx` |
| CTA banner | `components/sections/CTABanner.tsx` |
| İletişim formu mantığı | `components/forms/ContactForm.tsx` + `app/api/contact/route.ts` |
| Sitemap kuralları | `app/sitemap.ts` |
| Robots kuralları | `app/robots.ts` |
| Renk teması | `app/globals.css` (oklch CSS değişkenleri) |
| Tailwind config | `app/globals.css` (`@theme inline` block) |
