import type { Metadata } from "next";
import { BUSINESS } from "./constants";
import { absoluteUrl } from "./utils";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

/**
 * Tek noktadan tum Next.js Metadata nesnesini uretir.
 * Open Graph, Twitter Card, canonical, robots ayarlarini iceren tam set.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  keywords,
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImageUrl = ogImage
    ? absoluteUrl(ogImage)
    : absoluteUrl(BUSINESS.defaultOgImage);
  const fullTitle = title.includes(BUSINESS.name) ? title : `${title} | ${BUSINESS.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(BUSINESS.siteUrl),
    alternates: {
      canonical: url,
      languages: { "tr-TR": url },
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      locale: "tr_TR",
      url,
      siteName: BUSINESS.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      ...(type === "article" && authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    other: {
      "geo.region": "TR-41",
      "geo.placename": `${BUSINESS.district}, ${BUSINESS.city}`,
      "geo.position": `${BUSINESS.latitude};${BUSINESS.longitude}`,
      ICBM: `${BUSINESS.latitude}, ${BUSINESS.longitude}`,
    },
  };
}

/**
 * Bir hizmet + ilce kombinasyonu icin SEO baslik/aciklama uretir.
 */
export function serviceLocationTitle(serviceName: string, location: string): string {
  return `${location} ${serviceName} | ${BUSINESS.name}`;
}

export function serviceLocationDescription(
  serviceName: string,
  location: string,
  extra?: string,
): string {
  const base = `${location} bölgesinde profesyonel ${serviceName.toLowerCase()} hizmeti. ${BUSINESS.stats.yearsOfExperience}+ yıl deneyim, hızlı teslim, ücretsiz keşif görüşmesi.`;
  return extra ? `${base} ${extra}` : `${base} Hemen ara: ${BUSINESS.phoneDisplay}`;
}
