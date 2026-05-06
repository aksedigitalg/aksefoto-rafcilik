import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /_next/ KAPATMAYIN: Googlebot CSS/JS/Image asset'lerini fetch
        // edemezse Mobile Friendly + Core Web Vitals olcumu bozulur.
        // Admin URL'i (gizli /c1907d) BURAYA YAZMA — robots.txt public,
        // gizli URL ifsa olur. Admin sayfalari zaten layout'ta
        // metadata.robots = { index:false, follow:false } ile blok.
        disallow: ["/api/"],
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",
        disallow: "/",
      },
    ],
    sitemap: `${BUSINESS.siteUrl}/sitemap.xml`,
    host: BUSINESS.siteUrl,
  };
}
