/**
 * Tum site genelinde kullanilan paylasilan tipler
 */

export type DistrictSlug = "gebze" | "darica" | "cayirova" | "dilovasi";

export type ServiceCategory =
  | "dugun-toren"
  | "bebek-aile"
  | "portre-kisisel"
  | "belge"
  | "ticari-urun"
  | "mekan-kurumsal"
  | "etkinlik"
  | "video-drone"
  | "egitim-ek";

export interface ServicePackage {
  name: string;
  priceRange: string;
  description?: string;
  includes: string[];
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  primaryKeyword: string;
  secondaryKeywords: string[];
  shortDescription: string;
  longDescription: string; // 1500+ kelime, sayfanin ana metni
  features: string[];
  packages: ServicePackage[];
  faqs: FAQ[];
  relatedServices: string[];
  galleryCategory: string;
  icon?: string;
  // SEO meta
  metaTitle?: string;
  metaDescription?: string;
}

export interface PhotoshootLocation {
  name: string;
  description: string;
  bestTimeOfDay?: string;
  coordinates?: [number, number];
}

export interface Neighborhood {
  slug: string;
  name: string;
  district: DistrictSlug;
  postalCode?: string;
  population?: number;
  description: string; // 400+ kelime
  landmarks: string[];
  photoshootLocations: PhotoshootLocation[];
  nearbyNeighborhoods: string[];
  popularServices: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface IndustrialZone {
  slug: string;
  name: string;
  fullName: string;
  district: DistrictSlug;
  description: string; // 800+ kelime, B2B odakli
  servicesOffered: string[];
  notableTenantsHint?: string;
  faqs: FAQ[];
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  district?: DistrictSlug;
  neighborhood?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string; // ISO format
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // MDX/Markdown veya HTML
  category: string;
  tags: string[];
  author: string;
  publishedAt: string; // ISO
  updatedAt?: string;
  coverImage: string;
  readingTime: number; // dakika
  faqs?: FAQ[];
  relatedServices?: string[];
  relatedDistricts?: DistrictSlug[];
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: GalleryCategory;
  title?: string;
  blurDataURL?: string;
}

export type GalleryCategory =
  | "dugun"
  | "nisan"
  | "kina"
  | "sunnet"
  | "bebek"
  | "dogum"
  | "hamile"
  | "aile"
  | "cocuk"
  | "mezuniyet"
  | "dis-cekim"
  | "studyo"
  | "portre"
  | "moda"
  | "konsept"
  | "urun"
  | "yemek"
  | "taki"
  | "araba"
  | "emlak"
  | "otel"
  | "drone"
  | "360-sanal-tur"
  | "etkinlik"
  | "pet"
  | "video";
