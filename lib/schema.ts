import { BUSINESS } from "./constants";
import { absoluteUrl } from "./utils";
import type { Service, Neighborhood, BlogPost, FAQ, Testimonial } from "./types";

/**
 * JSON-LD schema markup ureticileri.
 * Bu fonksiyonlar plain JavaScript objesi dondurur — bunlar
 * <script type="application/ld+json"> icine JSON.stringify edilerek
 * yerlestirilir (components/seo/JsonLd.tsx ile).
 */

/**
 * Acilis saatleri schema formatinda dondurur (Mo-Sa formati)
 */
function getOpeningHoursSpec() {
  const dayMap: Record<keyof typeof BUSINESS.hours, string> = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  };
  return Object.entries(BUSINESS.hours).map(([day, hours]) => {
    const [opens, closes] = hours.split("-");
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[day as keyof typeof BUSINESS.hours],
      opens,
      closes,
    };
  });
}

/**
 * Ana isletme schema'si — her sayfada referans verilir.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PhotographyBusiness"],
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    image: absoluteUrl(BUSINESS.defaultOgImage),
    logo: absoluteUrl("/logo.png"),
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.district,
      addressRegion: BUSINESS.city,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: BUSINESS.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: getOpeningHoursSpec(),
    sameAs: Object.values(BUSINESS.social).filter(Boolean),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.stats.googleRating.toString(),
      reviewCount: BUSINESS.stats.googleReviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    foundingDate: BUSINESS.founded,
    slogan: BUSINESS.tagline,
    description: BUSINESS.shortDescription,
  };
}

/**
 * Tek bir Service'in schema'si
 */
export function serviceSchema(service: Service, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: service.name,
    description: service.shortDescription,
    serviceType: service.name,
    provider: {
      "@id": `${BUSINESS.siteUrl}/#business`,
    },
    areaServed: BUSINESS.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    offers: service.packages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.name,
      description: pkg.description ?? pkg.includes.join(", "),
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "TRY",
        price: pkg.priceRange,
      },
    })),
    url: absoluteUrl(path),
  };
}

/**
 * Bir mahalle sayfasinin LocalBusiness + Place schema'si
 */
export function neighborhoodSchema(neighborhood: Neighborhood, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl(path)}#neighborhood-business`,
    name: `${BUSINESS.name} - ${neighborhood.name} Hizmet Bölgesi`,
    image: absoluteUrl(BUSINESS.defaultOgImage),
    url: absoluteUrl(path),
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: neighborhood.name,
      addressRegion: BUSINESS.city,
      postalCode: neighborhood.postalCode ?? BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    areaServed: {
      "@type": "Place",
      name: neighborhood.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: BUSINESS.city,
      },
    },
    parentOrganization: {
      "@id": `${BUSINESS.siteUrl}/#business`,
    },
  };
}

/**
 * FAQ Page schema (her sayfada FAQ varsa)
 */
export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Breadcrumb schema (tum ic sayfalarda)
 */
export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

/**
 * Article / BlogPosting schema (blog yazilari icin)
 */
export function blogPostSchema(post: BlogPost, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(path)}#article`,
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.coverImage),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
  };
}

/**
 * Review schema (musteri yorumlari icin)
 */
export function reviewSchema(testimonial: Testimonial) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating.toString(),
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: testimonial.name,
    },
    reviewBody: testimonial.text,
    datePublished: testimonial.date,
    itemReviewed: {
      "@id": `${BUSINESS.siteUrl}/#business`,
    },
  };
}

/**
 * Person schema (Hakkimizda sayfasinda fotografci icin)
 */
export function personSchema(name: string, jobTitle: string, image?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    worksFor: {
      "@id": `${BUSINESS.siteUrl}/#business`,
    },
    ...(image ? { image: absoluteUrl(image) } : {}),
  };
}
