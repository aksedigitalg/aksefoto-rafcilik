import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import { BUSINESS } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/floating/WhatsAppFloat";
import { PhoneFloat } from "@/components/floating/PhoneFloat";
import { SiteFrame } from "@/components/layout/SiteFrame";
import "./globals.css";

// Google Sans, Google Fonts CDN'inde public olarak sunulmuyor (yalnizca Google
// urunlerinde kullaniliyor). En yakin public alternatif olan DM Sans kullanildi —
// gorsel olarak nerdeyse ayni, Turkce karakter destekli, modern ve temiz.
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.shortDescription,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: BUSINESS.siteUrl }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Gebze fotoğrafçı",
    "Gebze düğün fotoğrafçısı",
    "Darıca fotoğrafçı",
    "Çayırova fotoğrafçı",
    "Dilovası fotoğrafçı",
    "Kocaeli fotoğraf stüdyosu",
    "düğün fotoğrafçısı",
    "bebek fotoğrafçısı",
    "ürün fotoğraf çekimi",
    "drone çekim",
  ],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    description: BUSINESS.shortDescription,
    images: [
      {
        url: BUSINESS.defaultOgImage,
        width: 1200,
        height: 630,
        alt: BUSINESS.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    description: BUSINESS.shortDescription,
    images: [BUSINESS.defaultOgImage],
  },
  robots: {
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
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="tr" suppressHydrationWarning className={dmSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          İçeriğe geç
        </a>
        <SiteFrame>
          <Header />
        </SiteFrame>
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <SiteFrame>
          <Footer />
          <WhatsAppFloat />
          <PhoneFloat />
        </SiteFrame>

        {/* Google Analytics 4 */}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}

        {/* Microsoft Clarity */}
        {clarityId ? (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
