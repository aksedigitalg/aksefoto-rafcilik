/**
 * Unsplash gorsel referanslari (yer tutucu).
 *
 * Tum gorseller Unsplash License altinda ucretsiz kullanim icin uygundur.
 * Stüdyo gercek çekimlerini yukledikçe ilgili kategori ID'leri public klasör
 * yollarina (/images/...) çevrilebilir.
 *
 * Kullanim:
 *   import { getCategoryImage, HERO_IMAGES } from "@/lib/data/unsplash-images";
 *   <Image src={getCategoryImage("dugun")} ... />
 */

const UNSPLASH_BASE = "https://images.unsplash.com";

function buildUrl(id: string, width: number, height?: number): string {
  const h = height ? `&h=${height}` : "";
  return `${UNSPLASH_BASE}/photo-${id}?w=${width}${h}&q=80&auto=format&fit=crop`;
}

/**
 * Galeri kategorisi → Unsplash photo ID
 * Her ID düğün, bebek, ürün vb. konusuna uyacak şekilde seçilmiştir.
 */
export const CATEGORY_PHOTO_IDS: Record<string, string> = {
  dugun: "1519741497674-611481863552", // duğun çifti
  nisan: "1465495976277-4387d4b0b4c6", // engagement / yüzükle
  kina: "1604436796570-c6f58fa1da2e", // henüz/töre konsepti
  sunnet: "1530103862676-de8c9debad1d", // kostüm konsepti
  bebek: "1519689680058-324335c77eba", // yenidoğan
  dogum: "1519689680058-324335c77eba",
  hamile: "1519791883288-dc8bd696e667", // hamilelik
  aile: "1511895426328-dc8714191300", // aile sarılma
  cocuk: "1502086223501-7ea6ecd79368", // çocuk portresi
  mezuniyet: "1523580494863-6f3031224c94", // graduation cap
  "dis-cekim": "1494774157365-9e04c6720e47", // dış çekim gelin
  studyo: "1606983340126-99ab4feaa64a", // stüdyo ışık
  portre: "1494790108377-be9c29b29330", // kadın portresi
  moda: "1483985988355-763728e1935b", // fashion model
  konsept: "1490481651871-ab68de25d43d", // creative concept
  urun: "1542291026-7eec264c27ff", // ürün fotoğrafı
  yemek: "1565299624946-b28f40a0ae38", // food
  taki: "1605100804763-247f67b3557e", // jewelry
  araba: "1492144534655-ae79c964c9d7", // klasik otomobil
  emlak: "1564013799919-ab600027ffc6", // modern ev
  otel: "1566073771259-6a8506099945", // otel oda
  drone: "1473968512647-3e447244af8f", // drone aerial
  "360-sanal-tur": "1582719471384-894fbb16e074", // 360 vr
  etkinlik: "1492684223066-81342ee5ff30", // event/concert
  pet: "1450778869180-41d0601e046e", // köpek portresi
  video: "1492619375914-88005aa9e8fb", // video çekimi
};

export const HERO_IMAGES = {
  home: buildUrl("1519741497674-611481863552", 1600),
  homeSquare: buildUrl("1519741497674-611481863552", 800, 1000),
  about: buildUrl("1606983340126-99ab4feaa64a", 1600),
  contact: buildUrl("1452587925148-ce544e77e70d", 1600), // photographer with camera
  industrial: buildUrl("1565610222536-ef125c59da2e", 1600), // factory
};

/**
 * Galeri kategorisi/slugu icin tipik bir Unsplash gorseli getirir.
 * Eslesme yoksa "dugun" gorseline duser (genel duğun stüdyosu temasi).
 */
export function getCategoryImage(category: string, width = 1200, height?: number): string {
  const id = CATEGORY_PHOTO_IDS[category] ?? CATEGORY_PHOTO_IDS.dugun;
  return buildUrl(id ?? "1519741497674-611481863552", width, height);
}

/**
 * Blog kategorisine gore kapak gorseli.
 * Blog kategorileri (Düğün, Bebek & Aile, Belge, vs.) ile galeri kategorisi
 * arasinda manuel eslesme.
 */
const BLOG_CATEGORY_TO_GALLERY: Record<string, string> = {
  Düğün: "dugun",
  "Bebek & Aile": "bebek",
  Belge: "studyo",
  Drone: "drone",
  Kurumsal: "emlak",
  "E-Ticaret": "urun",
};

export function getBlogCoverImage(blogCategory: string, width = 1200): string {
  const gallery = BLOG_CATEGORY_TO_GALLERY[blogCategory] ?? "dugun";
  return getCategoryImage(gallery, width);
}
