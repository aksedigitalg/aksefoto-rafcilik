import type { Testimonial } from "@/lib/types";

/**
 * Musteri yorumlari.
 *
 * 2026-05-06: Tum sahte/ornek yorumlar kaldirildi (Google Review Schema politika
 * uyumu icin). Stüdyo 2025'te kuruldu, GBP onayi henuz beklemede.
 *
 * GERCEK musteri yorumlari geldikce buraya ekleyin. ASLA sahte yorum koymayin —
 * Google manuel ceza sebebi.
 *
 * Yorum eklerken sema:
 * {
 *   id: "t1",
 *   name: "Ad Soyad",                  // gercek isim, sadece soyadi bas harfi de OK
 *   service: "Hizmet Adi",             // services'taki name ile birebir uyumlu
 *   district: "gebze" | "darica" | ...
 *   neighborhood: "...",
 *   rating: 5,
 *   text: "...",                        // gercek yorum metni
 *   date: "YYYY-MM-DD",
 * }
 *
 * TestimonialSlider bilesen testimonials.length === 0 ise null donduruyor —
 * boyle dosya bos olunca ilgili section sayfada otomatik gizleniyor.
 */
export const testimonials: Testimonial[] = [];

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  return testimonials.filter(
    (t) => t.service.toLowerCase().replace(/[ğıöşüç]/g, "") === serviceSlug,
  );
}

export function getTestimonialsByDistrict(district: string): Testimonial[] {
  return testimonials.filter((t) => t.district === district);
}

export function getTestimonialsByNeighborhood(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.neighborhood?.toLowerCase().includes(slug.toLowerCase()));
}
