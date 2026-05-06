/**
 * MERKEZI ISLETME SABITLERI
 *
 * Tum site bu dosyadaki degerleri kullanir. Marka adi, telefon, adres, sosyal medya
 * gibi bilgileri DEGISTIRMEK ICIN sadece bu dosyayi guncellemek yeterlidir;
 * tum sayfalar, schema markup'lari, footer, header, iletisim bolumleri otomatik guncellenir.
 */

export const BUSINESS = {
  // ----- Marka & Sahip -----
  name: "Akse Fotoğrafçılık",
  legalName: "Akse Fotoğrafçılık",
  shortName: "Akse Foto",
  owner: "Akse Fotoğrafçılık", // Hakkimizda + Person schema icin gercek isim soyisim girilebilir
  founded: "2025",

  // ----- Iletisim -----
  phone: "+905396330358",
  phoneDisplay: "0539 633 03 58",
  whatsapp: "+905396330358",
  whatsappDisplay: "0539 633 03 58",
  email: "info@aksedigital.com",

  // ----- Adres -----
  street: "Güzeller Mahallesi, 927. Sk. No:6-B",
  neighborhood: "Güzeller",
  district: "Gebze",
  city: "Kocaeli",
  postalCode: "41400",
  country: "TR",
  // Guzeller Mahallesi, 927. Sk., Gebze yaklasik koordinati.
  // Google Business Profile'inizdaki gercek koordinati Maps'ten alip buraya yazin.
  latitude: 40.8079,
  longitude: 29.4209,
  mapsPlaceQuery: "Akse Fotoğrafçılık Güzeller 927 Sokak Gebze Kocaeli",

  // ----- Calisma Saatleri -----
  hours: {
    monday: "09:00-20:00",
    tuesday: "09:00-20:00",
    wednesday: "09:00-20:00",
    thursday: "09:00-20:00",
    friday: "09:00-20:00",
    saturday: "09:00-20:00",
    sunday: "10:00-18:00",
  },

  // ----- Sosyal Medya -----
  social: {
    instagram: "https://instagram.com/aksefotograf",
    facebook: "https://www.facebook.com/aksefotograf",
    youtube: "https://www.youtube.com/@aksefotograf",
    tiktok: "https://www.tiktok.com/@aksefotograf",
    twitter: "https://x.com/aksefotograf",
    linkedin: "https://www.linkedin.com/in/aksefotograf/",
    pinterest: "",
    googleBusiness: "",
  },

  // ----- SEO & Site -----
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://aksefotograf.com",
  defaultLocale: "tr-TR",
  defaultOgImage: "/og/default.jpg",

  // ----- Hizmet Bolgesi -----
  serviceArea: ["Gebze", "Darıca", "Çayırova", "Dilovası", "Tuzla", "Pendik", "Kocaeli"],

  // ----- Marka Mesajlari -----
  tagline: "Gebze'nin Genç ve Yenilikçi Fotoğraf Stüdyosu",
  shortDescription:
    "Gebze Güzeller Mahallesi'nde düğün, nişan, bebek, kurumsal ve ürün çekimleri için profesyonel fotoğraf stüdyosu. Gebze, Darıca, Çayırova, Dilovası ve İstanbul Anadolu yakasına hizmet veriyoruz.",

  /**
   * Trust istatistikleri.
   *
   * 2025 KURULUSUMUZ OLDUGU ICIN SADECE GERCEK + DOGRULANABILIR DEGERLER:
   * - yearsOfExperience: 1 (gercek, 2025 kurulus)
   * - deliveryDays: 14 (taahhut)
   *
   * GBP onayi + gercek yorumlar geldikce asagidaki degerleri GERCEK rakamlarla
   * doldurun. ASLA tahmin / abartili sayi koymayin — Google review schema'da
   * dogrulanamayan rating verirseniz manuel ceza alirsiniz (Rich Results politikasi).
   *
   * googleReviewCount > 0 oldugunda schema'ya aggregateRating dahil edilir
   * (lib/schema.ts icinde kosullu).
   */
  stats: {
    yearsOfExperience: 1,
    happyCouples: 0,
    photoshoots: 0,
    googleRating: 0,
    googleReviewCount: 0,
    deliveryDays: 14,
  },
} as const;

/**
 * WhatsApp + Telefon link uretici yardimcilar
 */
export const getWhatsAppLink = (message?: string): string => {
  const base = `https://wa.me/${BUSINESS.whatsapp.replace(/\D/g, "")}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const getPhoneLink = (): string => `tel:${BUSINESS.phone}`;

export const getMapsLink = (): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapsPlaceQuery)}`;

export const getEmailLink = (subject?: string): string => {
  const base = `mailto:${BUSINESS.email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
};

/**
 * Site navigasyon yapisi
 */
export const NAV = {
  primary: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Galeri", href: "/galeri" },
    { label: "Bölgeler", href: "/bolgeler" },
    { label: "Fiyatlar", href: "/fiyatlar" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ],
  legal: [
    { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
    { label: "Çerez Politikası", href: "/cerez-politikasi" },
    { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
    { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
  ],
} as const;

/**
 * Ilceler (slug + ad)
 */
export const DISTRICTS = [
  { slug: "gebze", name: "Gebze" },
  { slug: "darica", name: "Darıca" },
  { slug: "cayirova", name: "Çayırova" },
  { slug: "dilovasi", name: "Dilovası" },
] as const;

export type DistrictSlug = (typeof DISTRICTS)[number]["slug"];
