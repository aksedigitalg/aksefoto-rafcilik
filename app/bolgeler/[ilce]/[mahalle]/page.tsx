import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Camera, Phone, MessageCircle } from "lucide-react";
import { DISTRICTS, BUSINESS, getPhoneLink, getWhatsAppLink, type DistrictSlug } from "@/lib/constants";
import {
  getNeighborhoodBySlug,
  getNearbyNeighborhoods,
  getAllNeighborhoods,
} from "@/lib/db/neighborhoods";
import { getAllServices } from "@/lib/db/services";
import { getApprovedTestimonials } from "@/lib/db/testimonials";
import { buildMetadata, serviceLocationDescription } from "@/lib/seo";
import { neighborhoodSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";

export async function generateStaticParams() {
  const neighborhoods = await getAllNeighborhoods();
  return neighborhoods.map((n) => ({ ilce: n.district, mahalle: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ilce: string; mahalle: string }>;
}) {
  const { ilce, mahalle } = await params;
  const district = DISTRICTS.find((d) => d.slug === ilce);
  const neighborhood = await getNeighborhoodBySlug(mahalle, district?.slug as DistrictSlug);
  if (!district || !neighborhood) return { title: "Sayfa Bulunamadı" };

  return buildMetadata({
    title: neighborhood.metaTitle || `${neighborhood.name} Fotoğrafçı | ${district.name}`,
    description:
      neighborhood.metaDescription ||
      serviceLocationDescription("Profesyonel fotoğrafçı", `${neighborhood.name} (${district.name})`),
    path: `/bolgeler/${district.slug}/${neighborhood.slug}`,
    keywords: [
      `${neighborhood.name} fotoğrafçı`,
      `${district.name} ${neighborhood.name} fotoğrafçı`,
      `${neighborhood.name} düğün fotoğrafçısı`,
      `${neighborhood.name} bebek fotoğrafçısı`,
      `${neighborhood.name} biyometrik fotoğraf`,
    ],
  });
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ ilce: string; mahalle: string }>;
}) {
  const { ilce, mahalle } = await params;
  const district = DISTRICTS.find((d) => d.slug === ilce);
  const neighborhood = await getNeighborhoodBySlug(mahalle, district?.slug as DistrictSlug);
  if (!district || !neighborhood) notFound();

  const path = `/bolgeler/${district.slug}/${neighborhood.slug}`;
  const [services, nearby, allTestimonials] = await Promise.all([
    getAllServices(),
    getNearbyNeighborhoods(neighborhood.slug, 6),
    getApprovedTestimonials(),
  ]);
  const popularServices = neighborhood.popularServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const localTestimonials = allTestimonials
    .filter(
      (t) =>
        t.district === district.slug &&
        (t.neighborhood?.toLowerCase().includes(neighborhood.name.toLowerCase()) ??
          false),
    )
    .slice(0, 3);

  // Mahalleye ozel SSS — yerele uyarlanmis
  const localFAQs = [
    {
      question: `${neighborhood.name} mahallesinde çekim için ek ücret var mı?`,
      answer: `Hayır — ${district.name} ve tüm mahallelerinde ulaşım ücreti almıyoruz. Akse stüdyomuz Gebze Güzeller Mahallesi'nde olup ${neighborhood.name}'a hızlı ulaşım sağlıyoruz.`,
    },
    {
      question: `${neighborhood.name}'da çekim mekanı önerebilir misiniz?`,
      answer:
        neighborhood.photoshootLocations.length > 0
          ? `Evet — ${neighborhood.photoshootLocations
              .map((l) => l.name)
              .join(", ")} bu mahallede önerdiğimiz çekim mekanlarındandır. Mevsim, saat ve hizmet türüne göre detaylı plan birlikte yapıyoruz.`
          : `${neighborhood.name} ve çevresindeki uygun mekanları ön görüşmede birlikte planlıyoruz; ihtiyacınıza göre stüdyo veya dış mekan önerisi sunuyoruz.`,
    },
    {
      question: `${neighborhood.name}'da hangi hizmetleri en sık veriyorsunuz?`,
      answer: `${popularServices
        .slice(0, 5)
        .map((s) => s.name)
        .join(", ")} bu mahallede en çok talep aldığımız hizmet kategorileridir. Tüm 70+ hizmetimiz buralarda da aktiftir.`,
    },
    {
      question: `${neighborhood.name}'a ne kadar sürede ulaşıyorsunuz?`,
      answer: `Stüdyomuzdan ortalama 10-20 dakika. Yoğun trafik dışında ulaşım sorunsuzdur; çekim öncesi tahmini varış saatimizi sizinle paylaşıyoruz.`,
    },
    {
      question: `${neighborhood.name}'daki çekim için randevu nasıl alınır?`,
      answer: `WhatsApp veya telefon en hızlı yoldur (${BUSINESS.whatsappDisplay}). Belge çekimi (vesikalık, biyometrik) için randevu gerekmez; düğün/etkinlik gibi büyük çekimler için müsaitlik kontrolü ile rezervasyon alıyoruz.`,
    },
    {
      question: `${neighborhood.name}'da düğün dış çekimi yapılır mı?`,
      answer: `${neighborhood.photoshootLocations.length > 0 ? `Evet — ${neighborhood.photoshootLocations[0]?.name} başta olmak üzere ${neighborhood.name}'daki uygun mekanlarda dış çekim yapıyoruz.` : `${neighborhood.name} çevresindeki uygun mekanları (sahil, park, tarihi alan) önerebiliriz; mahalleniz dışındaki mekanları da kombine edebiliriz.`} Drone çekimi açık alanlar için mümkündür.`,
    },
  ];

  return (
    <>
      <JsonLd data={[neighborhoodSchema(neighborhood, path), faqSchema(localFAQs)]} />

      <article className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <BreadcrumbNav
          items={[
            { name: "Bölgeler", href: "/bolgeler" },
            { name: district.name, href: `/bolgeler/${district.slug}` },
            { name: neighborhood.name, href: path },
          ]}
        />

        {/* Hero */}
        <section className="mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            {district.name} • {neighborhood.postalCode}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
            {neighborhood.name} Fotoğrafçı
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {neighborhood.description.split(".")[0]}.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="whatsapp">
              <a
                href={getWhatsAppLink(`Merhaba, ${neighborhood.name} mahallesinde çekim yaptırmak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp ile İletişime Geç
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

        {/* Detaylı açıklama */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold">
            {neighborhood.name} Hakkında
          </h2>
          <div className="mt-4 space-y-3 text-foreground/90">
            {neighborhood.description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Landmarks + Çekim Mekanları */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-semibold">Mahallenin Önemli Noktaları</h2>
            <ul className="mt-4 space-y-2">
              {neighborhood.landmarks.map((l, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-semibold">Önerilen Çekim Mekanları</h2>
            {neighborhood.photoshootLocations.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {neighborhood.photoshootLocations.map((loc, i) => (
                  <li key={i}>
                    <div className="flex items-start gap-2">
                      <Camera className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <div>
                        <p className="font-medium text-sm">{loc.name}</p>
                        <p className="text-xs text-muted-foreground">{loc.description}</p>
                        {loc.bestTimeOfDay ? (
                          <p className="mt-1 text-xs italic text-muted-foreground">
                            En iyi saat: {loc.bestTimeOfDay}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                Mahallenize uygun çekim mekanını ön görüşmede birlikte planlıyoruz.
              </p>
            )}
          </div>
        </section>

        {/* Popüler hizmetler */}
        <section className="mb-12">
          <h2 className="mb-6 font-display text-2xl font-semibold md:text-3xl">
            {neighborhood.name}'da Sunduğumuz Hizmetler
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <h3 className="font-display text-base font-semibold group-hover:text-primary">
                  {s.name}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                  {s.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Yakındaki mahalleler */}
        {nearby.length > 0 ? (
          <section className="mb-12">
            <h2 className="mb-6 font-display text-2xl font-semibold md:text-3xl">
              Yakındaki Diğer Hizmet Bölgelerimiz
            </h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/bolgeler/${n.district}/${n.slug}`}
                  className="rounded-md border border-border bg-card p-3 text-center text-sm hover:border-primary/40 hover:text-primary"
                >
                  {n.name}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* Yerel müşteri yorumları */}
        {localTestimonials.length > 0 ? (
          <section className="mb-12">
            <TestimonialSlider
              testimonials={localTestimonials}
              title={`${neighborhood.name}'dan Müşteri Yorumları`}
            />
          </section>
        ) : null}

        {/* SSS */}
        <section className="mb-12">
          <FAQAccordion faqs={localFAQs} />
        </section>

        {/* CTA */}
        <CTABanner
          title={`${neighborhood.name}'da Sizinle Çekim Yapalım`}
          subtitle="Bölgenize özel çekim mekanı, paket ve tarih için ücretsiz ön görüşme ile başlayalım."
          whatsappMessage={`Merhaba, ${neighborhood.name} (${district.name}) mahallesinde çekim için bilgi almak istiyorum.`}
        />
      </article>
    </>
  );
}
