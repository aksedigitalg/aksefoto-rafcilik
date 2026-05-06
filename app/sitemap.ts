import type { MetadataRoute } from "next";
import { BUSINESS, DISTRICTS } from "@/lib/constants";
import { services } from "@/lib/data/services";
import { neighborhoods } from "@/lib/data/neighborhoods";
import { industrialZones } from "@/lib/data/industrial-zones";
import { blogPosts, BLOG_CATEGORIES } from "@/lib/data/blog-posts";

/**
 * Otomatik sitemap.xml uretici.
 * Tum hizmet, mahalle, ilce, sanayi bolgesi sayfalarini dinamik olarak listeler.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl;
  const now = new Date();

  // Statik sayfalar
  const staticPaths: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hizmetler`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/galeri`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/bolgeler`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/sanayi-bolgeleri`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/fiyatlar`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/gizlilik-politikasi`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cerez-politikasi`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/kvkk-aydinlatma-metni`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/kullanim-sartlari`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Hizmet sayfalari (70+)
  const servicePaths: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Galeri kategorileri
  const galleryCategories = [
    "dugun", "nisan", "kina", "sunnet", "bebek", "dogum", "hamile", "aile", "cocuk",
    "mezuniyet", "dis-cekim", "studyo", "portre", "moda", "konsept", "urun", "yemek",
    "taki", "araba", "emlak", "otel", "drone", "360-sanal-tur", "etkinlik", "pet", "video",
  ];
  const galleryPaths: MetadataRoute.Sitemap = galleryCategories.map((cat) => ({
    url: `${base}/galeri/${cat}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Ilce ana sayfalari
  const districtPaths: MetadataRoute.Sitemap = DISTRICTS.map((d) => ({
    url: `${base}/bolgeler/${d.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Mahalle sayfalari (76)
  const neighborhoodPaths: MetadataRoute.Sitemap = neighborhoods.map((n) => ({
    url: `${base}/bolgeler/${n.district}/${n.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Sanayi bolgesi sayfalari
  const industrialZonePaths: MetadataRoute.Sitemap = industrialZones.map((z) => ({
    url: `${base}/sanayi-bolgeleri/${z.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog yazilari (her birinin gercek lastModified tarihi var)
  const blogPostPaths: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog kategori filtre sayfalari
  const blogCategoryPaths: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((cat) => ({
    url: `${base}/blog/kategori/${encodeURIComponent(cat.toLocaleLowerCase("tr-TR"))}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPaths,
    ...servicePaths,
    ...galleryPaths,
    ...districtPaths,
    ...neighborhoodPaths,
    ...industrialZonePaths,
    ...blogPostPaths,
    ...blogCategoryPaths,
  ];
}
