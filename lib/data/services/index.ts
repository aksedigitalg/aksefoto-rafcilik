import type { Service, ServiceCategory } from "@/lib/types";
import { dugunTorenServices } from "./dugun-toren";
import { bebekAileServices } from "./bebek-aile";
import { portreKisiselServices } from "./portre-kisisel";
import { belgeServices } from "./belge";
import { ticariUrunServices } from "./ticari-urun";
import { mekanKurumsalServices } from "./mekan-kurumsal";
import { etkinlikServices } from "./etkinlik";
import { videoDroneServices } from "./video-drone";
import { egitimEkServices } from "./egitim-ek";

export const services: Service[] = [
  ...dugunTorenServices,
  ...bebekAileServices,
  ...portreKisiselServices,
  ...belgeServices,
  ...ticariUrunServices,
  ...mekanKurumsalServices,
  ...etkinlikServices,
  ...videoDroneServices,
  ...egitimEkServices,
];

export const SERVICE_CATEGORIES: { slug: ServiceCategory; name: string; description: string }[] = [
  {
    slug: "dugun-toren",
    name: "Düğün, Nişan ve Tören Çekimleri",
    description:
      "Hayatınızın en özel günleri için düğün, nişan, kına, sünnet ve tüm tören çekimleri",
  },
  {
    slug: "bebek-aile",
    name: "Bebek, Doğum ve Aile",
    description: "Yenidoğandan ilk yaşa, hamilelikten aile portrelerine sıcak ve doğal kareler",
  },
  {
    slug: "portre-kisisel",
    name: "Portre, Kişisel ve Stüdyo",
    description: "Kişisel marka, sosyal medya ve konsept çekimleri için profesyonel portreler",
  },
  {
    slug: "belge",
    name: "Belge Fotoğrafları",
    description: "Vesikalık, biyometrik, pasaport, vize ve ehliyet için standartlara uygun çekim",
  },
  {
    slug: "ticari-urun",
    name: "Ticari ve Ürün Çekimleri",
    description: "E-ticaret, katalog, takı, yemek ve reklam fotoğrafçılığı",
  },
  {
    slug: "mekan-kurumsal",
    name: "Mekan, Mimari ve Kurumsal",
    description: "Otel, restoran, fabrika, kurumsal portre ve tanıtım filmi çekimi",
  },
  {
    slug: "etkinlik",
    name: "Etkinlik ve Profesyonel",
    description: "Şirket etkinlikleri, konser, spor ve davet çekimleri",
  },
  {
    slug: "video-drone",
    name: "Video, Drone ve Yeni Medya",
    description: "Tanıtım filmi, drone hava çekimi, 360° sanal tur ve sosyal medya video üretimi",
  },
  {
    slug: "egitim-ek",
    name: "Eğitim, Danışmanlık ve Ek Hizmetler",
    description: "Fotoğrafçılık dersi, sosyal medya yönetimi, albüm yapımı ve baskı hizmeti",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getRelatedServices(currentSlug: string, limit = 4): Service[] {
  const current = getServiceBySlug(currentSlug);
  if (!current) return [];
  return current.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s))
    .slice(0, limit);
}

export type { Service } from "@/lib/types";
