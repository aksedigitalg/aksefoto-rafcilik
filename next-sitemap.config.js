/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://aksefotograf.com",
  generateRobotsTxt: false,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/404", "/500"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://aksefotograf.com"}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    let priority = 0.5;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (
      path.startsWith("/hizmetler/") ||
      path.startsWith("/bolgeler/") ||
      path.startsWith("/sanayi-bolgeleri/")
    ) {
      priority = 0.9;
    } else if (path.startsWith("/blog/")) {
      priority = 0.7;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
