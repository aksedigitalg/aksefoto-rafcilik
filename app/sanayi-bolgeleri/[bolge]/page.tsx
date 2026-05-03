import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MessageCircle, Check, Shield } from "lucide-react";
import { industrialZones, getIndustrialZoneBySlug } from "@/lib/data/industrial-zones";
import { getServiceBySlug } from "@/lib/data/services";
import { BUSINESS, getPhoneLink, getWhatsAppLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactForm } from "@/components/forms/ContactForm";

export function generateStaticParams() {
  return industrialZones.map((z) => ({ bolge: z.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ bolge: string }> }) {
  const { bolge } = await params;
  const zone = getIndustrialZoneBySlug(bolge);
  if (!zone) return { title: "Sayfa Bulunamadı" };
  return buildMetadata({
    title: `${zone.name} Fotoğrafçı | B2B Fabrika ve Tanıtım Çekimi`,
    description: `${zone.fullName} için profesyonel B2B fotoğraf, drone hava, tanıtım filmi. NDA standardı, ATEX uyum, ${BUSINESS.stats.deliveryDays} günde teslim.`,
    path: `/sanayi-bolgeleri/${zone.slug}`,
    keywords: [
      `${zone.name} fotoğrafçı`,
      `${zone.name} fabrika çekimi`,
      `${zone.name} tanıtım filmi`,
      `${zone.name} drone çekim`,
      `${zone.name} ürün fotoğrafı`,
      `Gebze sanayi fotoğraf`,
    ],
  });
}

const B2B_RELATED_SERVICES = [
  "fabrika-cekimi",
  "kurumsal-fotograf-cekimi",
  "tanitim-filmi-cekimi",
  "drone-fotograf-ve-video",
  "urun-fotograf-cekimi",
  "sanayi-fotografciligi",
  "havadan-fotograf",
  "sanal-tur-cekimi",
];

export default async function IndustrialZonePage({
  params,
}: {
  params: Promise<{ bolge: string }>;
}) {
  const { bolge } = await params;
  const zone = getIndustrialZoneBySlug(bolge);
  if (!zone) notFound();

  const path = `/sanayi-bolgeleri/${zone.slug}`;
  const relatedServices = B2B_RELATED_SERVICES.map((slug) => getServiceBySlug(slug)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s),
  );

  return (
    <>
      <JsonLd data={faqSchema(zone.faqs)} />

      <article className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <BreadcrumbNav
          items={[
            { name: "Sanayi Bölgeleri", href: "/sanayi-bolgeleri" },
            { name: zone.name, href: path },
          ]}
        />

        {/* Hero */}
        <section className="mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">B2B Hizmet</p>
          <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
            {zone.name} Fotoğrafçı
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{zone.fullName}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="whatsapp">
              <a
                href={getWhatsAppLink(`Merhaba, ${zone.fullName} içinde tesisimiz var, B2B çekim için bilgi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                B2B Görüşme Talep Et
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={getPhoneLink()}>
                <Phone className="h-4 w-4" aria-hidden />
                {BUSINESS.phoneDisplay}
              </a>
            </Button>
          </div>
        </section>

        {/* NDA / Güvenlik vurgusu */}
        <section className="mb-12 flex items-start gap-4 rounded-xl border border-primary/30 bg-primary/5 p-6">
          <Shield className="h-7 w-7 shrink-0 text-primary" aria-hidden />
          <div>
            <h2 className="font-display text-lg font-semibold">NDA + Güvenlik Standardımız</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tüm B2B çekimlerimizde gizlilik sözleşmesi (NDA) imzalıyor, tesisinizin güvenlik
              kurallarına ve sektörel uyumluluk gerekliliklerine (ATEX, ISO, GMP, IATF, REACH)
              %100 uyum sağlıyoruz. Çalışan portrelerini ailenizin onayıyla, üretim sürecini ise
              brand brief'inize göre yansıtıyoruz.
            </p>
          </div>
        </section>

        {/* Detaylı açıklama */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold">{zone.name} Hakkında</h2>
          <div className="mt-4 space-y-4 text-foreground/90">
            {zone.description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Sunduğumuz Hizmetler */}
        <section className="mb-12">
          <h2 className="mb-6 font-display text-2xl font-semibold md:text-3xl">
            {zone.name}'da Sunduğumuz Hizmetler
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {zone.servicesOffered.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-md border border-border bg-card p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span className="text-sm">{s}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Referans hint */}
        {zone.notableTenantsHint ? (
          <section className="mb-12 rounded-xl border border-border bg-muted/30 p-6">
            <h2 className="font-display text-lg font-semibold">Referans Bilgisi</h2>
            <p className="mt-2 text-sm text-muted-foreground">{zone.notableTenantsHint}</p>
          </section>
        ) : null}

        {/* İlgili B2B hizmetler */}
        <section className="mb-12">
          <h2 className="mb-6 font-display text-2xl font-semibold md:text-3xl">
            İlgili B2B Hizmet Detayları
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <h3 className="font-display text-base font-semibold group-hover:text-primary">
                  {s.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                  {s.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* SSS */}
        <section className="mb-12">
          <FAQAccordion faqs={zone.faqs} title={`${zone.name} İçin Sıkça Sorulan Sorular`} />
        </section>

        {/* B2B İletişim Formu */}
        <section className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">B2B Teklif İste</h2>
            <p className="mt-3 text-muted-foreground">
              Tesisinize özel paket teklifi için formu doldurun veya WhatsApp'tan firma adınız ve
              ihtiyaç kapsamınızla yazın.
            </p>
            <div className="mt-6 space-y-3 rounded-lg border border-border bg-card p-5 text-sm">
              <p className="font-medium">B2B çekim sürecimiz:</p>
              <ol className="ml-4 list-decimal space-y-1 text-muted-foreground">
                <li>Brief alma + tesis tanıma görüşmesi</li>
                <li>NDA + güvenlik prosedür imzaları</li>
                <li>Çekim takvimi + ekip planlaması</li>
                <li>Çekim günü(leri) — vardiyalı veya tek seans</li>
                <li>Edit, renk grading, alt yazı (TR + EN)</li>
                <li>İlk versiyon teslim + revizyon</li>
                <li>Final teslim (tüm formatlar)</li>
              </ol>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <ContactForm defaultService="fabrika-cekimi" />
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Avrupa İhalelerine Hazır Görsellere Sahip Olun"
          subtitle="Uluslararası standartlarda B2B fotoğraf + tanıtım filmi paketinizi konuşalım."
          whatsappMessage={`Merhaba, ${zone.fullName} içindeki tesisimiz için B2B çekim teklifi istiyoruz.`}
        />
      </article>
    </>
  );
}
