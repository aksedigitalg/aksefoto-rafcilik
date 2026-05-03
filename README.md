# Akse Fotoğrafçılık — Yerel SEO Odaklı Fotoğraf Stüdyosu Sitesi

Gebze Güzeller'de 2025'te kurulan **Akse Fotoğrafçılık** stüdyosu için geliştirilmiş, yerel SEO
için baştan optimize edilmiş Next.js 15 web sitesi.

**Hedef:** Google'da `Gebze fotoğrafçı`, `Darıca düğün fotoğrafçısı`, `Çayırova bebek
fotoğrafçısı` gibi 1500+ long-tail anahtar kelimede ilk sayfaya çıkmak.

## 🎯 Site Özeti

| Bölüm | Sayfa Sayısı | Durum |
|-------|----|----|
| Statik sayfalar | 13 (Ana sayfa, Hakkımızda, İletişim, Fiyatlar, Hizmetler, Bölgeler, Sanayi, Galeri, Blog, KVKK, Gizlilik, Çerez, Kullanım Şartları) | ✅ Tam |
| Hizmet detay sayfaları | 71 (dynamic route) | ✅ Tam |
| Mahalle sayfaları | 76 (dynamic route — 40 Gebze + 14 Darıca + 10 Çayırova + 12 Dilovası) | ✅ Tam |
| İlçe ana sayfaları | 4 | ✅ Tam |
| Sanayi bölgesi sayfaları | 8 (GOSB, TOSB, Bilişim Vadisi, Pelitli, Plastikçiler, Kimya İhtisas, Dilovası, Güzeller OSB) | ✅ Tam |
| Galeri kategorileri | 26 (dynamic route) | ✅ İskelet (görsel placeholder) |
| Blog yazıları | 8 başlangıç (50 hedef) | ✅ Aktif |
| **Toplam** | **~210 dinamik sayfa** | ✅ Build alabilir |

## 🛠 Teknoloji Yığını

- **Next.js 15** (App Router, Server Components ağırlıklı)
- **React 19**
- **TypeScript** (strict + `noUncheckedIndexedAccess`)
- **Tailwind CSS 4** (CSS-tabanlı config, oklch renk sistemi)
- **shadcn/ui** (new-york stili)
- **DM Sans** (Google Fonts) — `Google Sans` public Google Fonts'ta yok, en yakın alternatif
- **lucide-react** (ikonlar)
- **framer-motion** (ölçülü animasyon)
- **react-hook-form + zod** (form + doğrulama)
- **Resend** (e-posta gönderimi)
- **next-sitemap** (post-build sitemap üretimi)
- **Unsplash** (yer tutucu görseller; gerçek çekimlerle değiştirilecek)

> 📘 **Geliştirici notu:** Mimari kararlar, kod kalıpları ve Claude Code oturumları
> için kapsamlı rehber için [`CLAUDE.md`](./CLAUDE.md) dosyasına bakın.

## 🚀 Hızlı Başlangıç

```bash
# 1. Bağımlılıkları yükle
pnpm install        # veya npm install / yarn

# 2. .env oluştur
cp .env.example .env.local
# .env.local içine gerçek anahtarları gir (RESEND_API_KEY, vs.)

# 3. Dev sunucusu
pnpm dev

# 4. Üretim build
pnpm build
pnpm start
```

Açılış: `http://localhost:3000`

## 📁 Klasör Yapısı

```
/app
  /(homepage, hakkımızda, iletisim, fiyatlar, hizmetler, ...)
  /api/contact/route.ts          # Form gönderimi (Resend)
  /sitemap.ts                    # Otomatik sitemap (210+ URL)
  /robots.ts                     # Otomatik robots.txt
  /not-found.tsx                 # 404
  /layout.tsx                    # Root (font, GA4, Clarity, JSON-LD)

/components
  /layout/                       # Header, Footer
  /floating/                     # WhatsApp + Phone sticky
  /seo/                          # JsonLd, BreadcrumbNav
  /sections/                     # FAQAccordion, PricingTable, TrustBadges, ...
  /forms/                        # ContactForm
  /ui/                           # shadcn (Button)

/lib
  /constants.ts                  # ⭐ TEK NOKTADAN tüm marka bilgisi
  /types.ts                      # Service, Neighborhood, BlogPost, ...
  /seo.ts                        # buildMetadata helper
  /schema.ts                     # 8 farklı JSON-LD üretici
  /utils.ts                      # slugify (Türkçe), formatDate, ...
  /data/
    /services/                   # 71 hizmet, 9 kategori dosyası
    /neighborhoods/              # 76 mahalle, 4 ilçe dosyası
    /industrial-zones.ts         # 8 OSB
    /testimonials.ts             # Müşteri yorumları
    /blog-posts.ts               # 8 başlangıç yazısı
    /gallery-categories.ts       # 26 kategori meta
```

## ⭐ Marka Bilgilerini Güncelleme

**Tek nokta:** [`lib/constants.ts`](./lib/constants.ts)

```ts
export const BUSINESS = {
  name: "Akse Fotoğrafçılık",
  legalName: "Akse Fotoğrafçılık",
  phone: "+905332417522",
  phoneDisplay: "0533 241 75 22",
  street: "Güzeller Mahallesi, 927. Sk. No:6-B",
  district: "Gebze",
  city: "Kocaeli",
  // ...
};
```

Bu dosyayı düzenlemek tüm site genelinde otomatik güncelleme sağlar:
- Header & Footer
- Tüm JSON-LD schema'lar
- Tüm CTA butonları
- Sitemap & robots
- Tüm hizmet sayfalarındaki iletişim bilgileri

**Şu anda placeholder olan alanlar (gerçek verilerinizle değiştirin):**
- `owner: "Akse Fotoğrafçılık"` → Stüdyo sahibinin gerçek adı (Person schema için)
- `latitude / longitude: 40.8079, 29.4209` → Google Maps'ten gerçek koordinat
- `social.facebook / youtube` → Gerçek sosyal medya linkleri (varsa)
- `stats.*` → Gerçek istatistikler (mutlu çift, çekim sayısı, vs.)

## 🔑 Çevre Değişkenleri

`.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://aksefotografcilik.com

# Resend (iletişim formu)
RESEND_API_KEY=re_xxxx
CONTACT_EMAIL_TO=info@aksedigital.com
CONTACT_EMAIL_FROM=site@aksefotografcilik.com

# Analytics (opsiyonel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...
```

## 🎨 SEO Özellikleri (Hepsi Aktif)

- ✅ **LocalBusiness + PhotographyBusiness JSON-LD** her sayfada
- ✅ **Service + FAQPage + BreadcrumbList** schema her hizmet sayfasında
- ✅ **BlogPosting + FAQPage** schema blog yazılarında
- ✅ **Article + Person** schema hakkımızda sayfasında
- ✅ Otomatik **canonical URL'ler**, **Open Graph**, **Twitter Card**
- ✅ Türkçe slug üretici (Türkçe karakter normalize)
- ✅ `geo.region`, `geo.position`, ICBM meta tag'leri (yerel SEO)
- ✅ HSTS + güvenlik header'ları
- ✅ AVIF/WebP otomatik görsel dönüşümü
- ✅ Sitemap.xml otomatik üretiliyor (210+ URL)
- ✅ robots.txt — GPTBot/CCBot engellenmiş (içerik koruması)
- ✅ Font preload + DNS prefetch
- ✅ Critical CSS inline

## 📈 Yol Haritası

### Yapılması Gerekenler (Sahibi Tarafından)

1. **Görsel ekleme** — Tüm sayfalardaki "yer tutucu" gradient alanlar gerçek fotoğraflarla
   değiştirilmeli. Önerilen yerler:
   - `/public/og/default.jpg` — Open Graph varsayılan
   - `/public/logo.png`, `/public/icon-192.png`, `/public/icon-512.png`, `/public/favicon.ico`
   - Hero görseli (ana sayfa)
   - Galeri kategorilerinde 16-20 fotoğraf/kategori
   - Blog yazıları için kapak görselleri (`/public/blog/`)

2. **Blog genişletme** — 8 başlangıç yazısı var; 50 hedefe ulaşmak için aylık 4-8 yeni yazı.
   Yazılar `lib/data/blog-posts.ts` içine eklenir.

3. **Hizmet içeriği genişletme** — 71 hizmetin her biri 200-400 kelime
   `longDescription` içerir. SEO için 1500+ kelime hedeflenir; aşamalı genişletme önerilir
   (önce yüksek arama hacmi olan: düğün, biyometrik, ürün).

4. **Mahalle açıklamaları** — Her mahalle 80-150 kelime başlangıç içeriği. Yerel SEO için
   400+ kelime hedeflenir; önce "Eskihisar", "Bayramoğlu", "Şekerpınar", "Güzeller" gibi
   yüksek hacimli mahalleler.

5. **Müşteri yorumları** — 12 başlangıç yorumu var. Gerçek Google Business yorumları
   geldikçe `lib/data/testimonials.ts` içine ekleyin.

### Deployment Sonrası

1. ✅ Domain bağla (`aksefotografcilik.com`)
2. ✅ Vercel'e deploy
3. ✅ Google Search Console'a ekle, sitemap submit et (`/sitemap.xml`)
4. ✅ Bing Webmaster Tools'a ekle
5. ✅ Google Business Profile aç, web link ekle
6. ✅ GA4 + Clarity script ID'lerini `.env.production`'a ekle
7. ✅ Düğün.com, Armut, Gigbi profili oluştur
8. ✅ İlk müşterileri Google Business'a yorum yapmaya yönlendir
9. ✅ Instagram bio link
10. ✅ WhatsApp imzasına link

## 🚢 Deployment

### Vercel (Önerilen)

```bash
npm i -g vercel
vercel --prod
```

Vercel otomatik:
- Edge network global CDN
- HTTPS/SSL
- next/image optimize (AVIF/WebP)
- Sitemap.xml ve robots.txt public'e
- Environment variables panel üzerinden

### Build Doğrulama

```bash
pnpm build
# Build başarılı olmalı; uyarı varsa düzelt.
pnpm start
# http://localhost:3000 — production build kontrol
```

## 🔍 Performans Hedefleri

Lighthouse hedefler (Mobile + Desktop):
- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100
- LCP < 2.0s
- CLS < 0.05
- INP < 200ms

Kontrol için: `https://pagespeed.web.dev/?url=https://aksefotografcilik.com`

## 📝 Güncel Kapsam Notları

### ✅ Tam Çalışan Özellikler

- Tüm 210+ sayfa render edilebiliyor (build alıyor)
- İletişim formu (Resend ile e-posta gönderimi)
- Otomatik sitemap (213 URL)
- JSON-LD schema (8 farklı tür)
- Türkçe slug üretici
- WhatsApp + telefon CTA'ları
- KVKK uyumlu form (zorunlu onay + honeypot + rate limit)
- Mobil responsive (sticky telefon butonu)
- Dark mode hazır (CSS değişkenleri)

### 📌 Geliştirilebilecek Alanlar

- Galeri lightbox/modal (gerçek görseller eklendikçe)
- Instagram feed entegrasyonu (footer üstü)
- Cloudflare Turnstile spam koruma (env hazır)
- E-posta bülten kaydı
- Çoklu dil (sadece Türkçe; İngilizce eklenebilir)

## 📞 Sorun Giderme

### `pnpm install` başarısız oluyor

Node.js 20+ olduğundan emin ol:
```bash
node --version  # v20.x veya üstü olmalı
```

### Build sırasında "Schema doesn't validate" hatası

`lib/data/services/*.ts` veya `lib/data/neighborhoods/*.ts` içindeki bir entry yeni bir alan
gerektiriyor olabilir. `lib/types.ts` ile karşılaştırıp eksik alanı tamamla.

### Form e-posta gönderemiyor

`.env.local` içinde `RESEND_API_KEY` ve `CONTACT_EMAIL_TO` doğru ayarlandığından emin ol.
API key ücretsiz: https://resend.com

## 📝 Geliştirme Geçmişi (Changelog)

### 2026-05-03 — Tasarım iyileştirmeleri ve görseller
- **Yazı tipi:** Inter + Playfair Display kombinasyonu yerine **DM Sans** (Google Sans
  public olmadığı için en yakın alternatif). Tek font ailesi, weight farkıyla hiyerarşi.
- **Header yenilendi:** `py-3 → py-5/6` daha geniş yükseklik, ikonlu yuvarlak logo,
  alt etiket ("Gebze · Düğün & Stüdyo Fotoğrafçısı")
- **Görsel iyileştirmesi:** Tüm sayfalardaki gradient yer tutucular Unsplash görselleri
  ile değiştirildi:
  - Ana sayfa hero (düğün çifti, 4:5 dikey)
  - 6 hizmet kartı (her kategori kendi temasında: düğün, bebek, kurumsal, drone, konsept, biyometrik)
  - Hakkımızda hero (stüdyo)
  - 71 hizmet detay sayfası (galleryCategory'ye göre otomatik)
  - Blog kart + detay hero'ları (kategori bazlı)
- **CTA WhatsApp düğmesi düzeltildi:** `variant="outline"` (beyaz/beyaz görünmez)
  → `variant="whatsapp"` (yeşil #25D366, görünür ve marka uyumlu)
- **Google Maps iframe kaldırıldı:** API key gerektiriyordu, hata veriyordu.
  Yerine tıklanabilir konum kartı (Google Maps'te yeni sekmede açar)
- **`lib/data/unsplash-images.ts`** yeni dosya: 26 galeri kategorisi → photo ID haritası
- **"Akse Digital" referansları temizlendi:** Public-facing copy 100% "Akse Fotoğrafçılık".
  E-posta `info@aksedigital.com` operasyonel olarak korundu.

### 2026-05-03 — Proje açılış
- 11 adımlı planın tamamı (1-11) tamamlandı
- 71 hizmet × 76 mahalle × 8 OSB × 26 galeri × 8 blog yazısı = 210+ statik sayfa
- TypeScript strict + Tailwind 4 + Next.js 15 + shadcn/ui kurulumu
- Tüm KVKK/Gizlilik/Çerez/Kullanım Şartları sayfaları
- Otomatik sitemap, robots, JSON-LD schema (8 farklı tür)

## 📜 Lisans

Özel — Akse Fotoğrafçılık'a özel proje.
