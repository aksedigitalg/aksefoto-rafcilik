import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /_next/ KAPATMAYIN: Googlebot CSS/JS/Image asset'lerini fetch
        // edemezse Mobile Friendly + Core Web Vitals olcumu bozulur ve
        // siralama dusebilir. Sadece /api/ ve /admin/ kapatiyoruz.
        disallow: ["/api/", "/admin/"],
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
