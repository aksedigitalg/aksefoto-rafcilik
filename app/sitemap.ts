import type { MetadataRoute } from "next";
import { BUSINESS, DISTRICTS } from "@/lib/constants";
import { getAllServices } from "@/lib/db/services";
import { getAllNeighborhoods } from "@/lib/db/neighborhoods";
import { getAllIndustrialZones } from "@/lib/db/industrial-zones";
import { getAllBlogPosts, getBlogCategories } from "@/lib/db/blog";

/**
 * Otomatik sitemap.xml uretici.
 * Tum hizmet, mahalle, ilce, sanayi bolgesi sayfalarini Supabase'den
 * dinamik olarak listeler. ISR cache (revalidate: 60).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = BUSINESS.siteUrl;
  const now = new Date();

  const [services, neighborhoods, industrialZones, blogPosts, blogCategories] =
    await Promise.all([
      getAllServices(),
      getAllNeighborhoods(),
      getAllIndustrialZones(),
      getAllBlogPosts(),
      getBlogCategories(),
    ]);

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

  const servicePaths: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

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

  const districtPaths: MetadataRoute.Sitemap = DISTRICTS.map((d) => ({
    url: `${base}/bolgeler/${d.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const neighborhoodPaths: MetadataRoute.Sitemap = neighborhoods.map((n) => ({
    url: `${base}/bolgeler/${n.district}/${n.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industrialZonePaths: MetadataRoute.Sitemap = industrialZones.map((z) => ({
    url: `${base}/sanayi-bolgeleri/${z.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPostPaths: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogCategoryPaths: MetadataRoute.Sitemap = blogCategories.map((cat) => ({
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
