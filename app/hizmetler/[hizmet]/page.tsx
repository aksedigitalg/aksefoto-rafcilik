import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, Check, MapPin } from "lucide-react";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/data/services";
import { BUSINESS, DISTRICTS, getPhoneLink, getWhatsAppLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { getCategoryImage } from "@/lib/data/unsplash-images";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PricingTable } from "@/components/sections/PricingTable";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTABanner } from "@/components/sections/CTABanner";
import { testimonials } from "@/lib/data/testimonials";

// Statik dynamic route — tum hizmet slug'larini build time'da uretir
export function generateStaticParams() {
  return services.map((s) => ({ hizmet: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ hizmet: string }> }) {
  const { hizmet } = await params;
  const service = getServiceBySlug(hizmet);
  if (!service) return { title: "Sayfa Bulunamadı" };
  return buildMetadata({
    title: service.metaTitle || `${service.name}`,
    description: service.metaDescription || service.shortDescription,
    path: `/hizmetler/${service.slug}`,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
  });
}

export default async function ServicePage({ params }: { params: Promise<{ hizmet: string }> }) {
  const { hizmet } = await params;
  const service = getServiceBySlug(hizmet);
  if (!service) notFound();

  const path = `/hizmetler/${service.slug}`;
  const related = getRelatedServices(service.slug, 4);
  const firstWord = service.name.toLocaleLowerCase("tr-TR").split(" ")[0] ?? "";
  const serviceTestimonials = firstWord
    ? testimonials
        .filter((t) => t.service.toLocaleLowerCase("tr-TR").includes(firstWord))
        .slice(0, 3)
    : [];

  return (
    <>
      <JsonLd data={[serviceSchema(service, path), faqSchema(service.faqs)]} />

      <article className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <BreadcrumbNav
          items={[
            { name: "Hizmetler", href: "/hizmetler" },
            { name: service.name, href: path },
          ]}
        />

        {/* Hero */}
        <section className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{service.shortDescription}</p>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {service.features.slice(0, 6).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="xl" variant="whatsapp">
                <a
                  href={getWhatsAppLink(`Merhaba, "${service.name}" hizmeti hakkında bilgi almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp'tan Yaz
                </a>
              </Button>
              <Button asChild size="xl" variant="outline">
                <a href={getPhoneLink()}>
                  <Phone className="h-4 w-4" aria-hidden />
                  {BUSINESS.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            <Image
              src={getCategoryImage(service.galleryCategory, 1200)}
              alt={service.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Detaylı açıklama */}
        <section className="mb-16">
          <div className="prose prose-stone mx-auto max-w-3xl">
            {service.longDescription.split("\n\n").map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed text-foreground/90">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Süreç */}
        <section className="mb-16">
          <ProcessSteps />
        </section>

        {/* Paketler / Fiyatlar */}
        <section className="mb-16">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Paketler ve Fiyatlar</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Bütçe ve beklenti uyumlu 3 paket. Tarih ve özel istek için kişisel teklif veriyoruz.
            </p>
          </div>
          <PricingTable packages={service.packages} serviceName={service.name} />
        </section>

        {/* Hizmet bölgesi */}
        <section className="mb-16 rounded-2xl border border-border bg-muted/30 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Hizmet Verdiğimiz İlçeler
            </h2>
            <p className="mt-3 text-muted-foreground">
              {service.name} hizmetimiz Kocaeli'nin Gebze, Darıca, Çayırova ve Dilovası ilçelerinde
              + İstanbul Anadolu yakasında (Tuzla, Pendik) aktiftir. Mahallenize özel detay için
              bölgenizin sayfasını ziyaret edin.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {DISTRICTS.map((d) => (
                <Link
                  key={d.slug}
                  href={`/bolgeler/${d.slug}`}
                  className="group flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <MapPin className="h-4 w-4 text-primary" aria-hidden />
                  <span className="font-medium group-hover:text-primary">{d.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Müşteri yorumları */}
        {serviceTestimonials.length > 0 ? (
          <section className="mb-16">
            <TestimonialSlider testimonials={serviceTestimonials} />
          </section>
        ) : null}

        {/* SSS */}
        <section className="mb-16">
          <FAQAccordion faqs={service.faqs} />
        </section>

        {/* İlgili hizmetler */}
        {related.length > 0 ? (
          <section className="mb-16">
            <RelatedServices services={related} />
          </section>
        ) : null}

        {/* CTA */}
        <CTABanner
          title={`${service.name} İçin Hazır mısınız?`}
          subtitle="Beklentilerinizi konuşalım, size en uygun paketi birlikte oluşturalım."
          whatsappMessage={`Merhaba, "${service.name}" için bilgi almak istiyorum.`}
        />
      </article>
    </>
  );
}
