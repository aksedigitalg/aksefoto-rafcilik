import type { GalleryCategory } from "@/lib/types";

export interface GalleryCategoryInfo {
  slug: GalleryCategory;
  name: string;
  description: string;
  serviceSlug?: string; // ilgili hizmet sayfasına link
}

export const GALLERY_CATEGORIES: GalleryCategoryInfo[] = [
  { slug: "dugun", name: "Düğün", description: "Hayatın en özel günleri için belgeselci yaklaşım", serviceSlug: "dugun-fotografcisi" },
  { slug: "nisan", name: "Nişan", description: "Aile ortamında samimi ve duygusal kareler", serviceSlug: "nisan-fotografcisi" },
  { slug: "kina", name: "Kına Gecesi", description: "Geleneksel kına gecesinin renkli ve coşkulu anları", serviceSlug: "kina-fotograf-cekimi" },
  { slug: "sunnet", name: "Sünnet", description: "Sünnet düğünü ve stüdyo poz seansı çekimleri", serviceSlug: "sunnet-fotograf-cekimi" },
  { slug: "bebek", name: "Bebek", description: "Yenidoğan ve aylık bebek çekimleri", serviceSlug: "bebek-fotografcisi" },
  { slug: "dogum", name: "Doğum", description: "Hastane Fresh 48 ve doğum anı çekimleri", serviceSlug: "dogum-fotografcisi" },
  { slug: "hamile", name: "Hamile", description: "Maternity stüdyo ve dış çekim seansları", serviceSlug: "hamile-fotograf-cekimi" },
  { slug: "aile", name: "Aile", description: "Çekirdek aileden geniş kuşaklara aile portreleri", serviceSlug: "aile-fotografcisi" },
  { slug: "cocuk", name: "Çocuk", description: "1-12 yaş çocukların doğal ve eğlenceli pozları", serviceSlug: "cocuk-fotograf-cekimi" },
  { slug: "mezuniyet", name: "Mezuniyet", description: "Üniversite ve lise mezuniyet çekimleri", serviceSlug: "mezuniyet-fotograf-cekimi" },
  { slug: "dis-cekim", name: "Dış Çekim", description: "Bayramoğlu, Eskihisar, kırsal dış mekan kareleri", serviceSlug: "dis-cekim-fotograf" },
  { slug: "studyo", name: "Stüdyo", description: "Profesyonel stüdyo çekimleri", serviceSlug: "studyo-fotograf-cekimi" },
  { slug: "portre", name: "Portre", description: "Klasik ve sanatsal portre çekimleri", serviceSlug: "portre-cekimi" },
  { slug: "moda", name: "Moda", description: "Lookbook, editorial ve marka moda çekimleri", serviceSlug: "moda-fotografcisi" },
  { slug: "konsept", name: "Konsept", description: "Tema ve hikaye odaklı konsept çekimler", serviceSlug: "konsept-fotograf-cekimi" },
  { slug: "urun", name: "Ürün", description: "E-ticaret beyaz fon ve lifestyle ürün kareleri", serviceSlug: "urun-fotograf-cekimi" },
  { slug: "yemek", name: "Yemek", description: "Restoran menü ve yemek styling kareleri", serviceSlug: "yemek-fotografcisi" },
  { slug: "taki", name: "Takı", description: "Mücevher makro ve detay kareleri", serviceSlug: "taki-fotograf-cekimi" },
  { slug: "araba", name: "Araba", description: "Galeri ve sahibinden araç çekimleri", serviceSlug: "araba-fotograf-cekimi" },
  { slug: "emlak", name: "Emlak", description: "Daire, villa ve ticari gayrimenkul kareleri", serviceSlug: "emlak-fotografcisi" },
  { slug: "otel", name: "Otel", description: "Otel oda, lobi, havuz ve restoran çekimleri", serviceSlug: "otel-fotograf-cekimi" },
  { slug: "drone", name: "Drone", description: "Hava perspektifinden çekilmiş kareler", serviceSlug: "drone-fotograf-ve-video" },
  { slug: "360-sanal-tur", name: "360° Sanal Tur", description: "Interaktif 360° panoramik fotoğraflar", serviceSlug: "sanal-tur-cekimi" },
  { slug: "etkinlik", name: "Etkinlik", description: "Konferans, lansman, fuar etkinlik çekimleri", serviceSlug: "etkinlik-fotografcisi" },
  { slug: "pet", name: "Evcil Hayvan", description: "Kedi, köpek ve diğer evcil hayvan portreleri", serviceSlug: "pet-fotografcisi" },
  { slug: "video", name: "Video", description: "Düğün hikayeleri, tanıtım filmleri ve klipler", serviceSlug: "video-cekimi" },
];
