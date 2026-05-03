import Link from "next/link";
import Image from "next/image";
import {
  Camera,
  Heart,
  Baby,
  Building2,
  Plane,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, DISTRICTS, getPhoneLink, getWhatsAppLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { HERO_IMAGES, getCategoryImage } from "@/lib/data/unsplash-images";

export const metadata = buildMetadata({
  title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
  description: BUSINESS.shortDescription,
  path: "/",
});

const HIGHLIGHT_SERVICES = [
  {
    title: "Düğün Fotoğrafçısı",
    desc: "Hayatınızın en özel gününü hikaye tadında belgeliyoruz.",
    href: "/hizmetler/dugun-fotografcisi",
    icon: Heart,
    category: "dugun",
  },
  {
    title: "Bebek & Yenidoğan",
    desc: "İlk nefesten ilk yaşa, her anı sanatla saklıyoruz.",
    href: "/hizmetler/bebek-fotografcisi",
    icon: Baby,
    category: "bebek",
  },
  {
    title: "Kurumsal & Tanıtım",
    desc: "Markanız için fabrika, ürün, tanıtım filmi ve drone çekimleri.",
    href: "/hizmetler/kurumsal-fotograf-cekimi",
    icon: Building2,
    category: "emlak",
  },
  {
    title: "Drone & Hava Çekimi",
    desc: "Hikayeye derinlik katan profesyonel hava çekimleri.",
    href: "/hizmetler/drone-fotograf-ve-video",
    icon: Plane,
    category: "drone",
  },
  {
    title: "Portre & Konsept",
    desc: "Stüdyo veya dış mekanda kişisel ve marka çekimleri.",
    href: "/hizmetler/konsept-fotograf-cekimi",
    icon: Sparkles,
    category: "konsept",
  },
  {
    title: "Vesikalık & Biyometrik",
    desc: "Pasaport, vize, ehliyet için anında baskı standartlarda.",
    href: "/hizmetler/biyometrik-fotograf-cekimi",
    icon: Camera,
    category: "studyo",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/40 via-background to-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
                Gebze • Darıca • Çayırova • Dilovası
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {BUSINESS.tagline}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Düğün, nişan, bebek, aile, kurumsal ve ürün çekimleri için Gebze Güzeller'de
                profesyonel fotoğraf stüdyosu. Modern ekipman, sanatkâr bakış ve{" "}
                {BUSINESS.stats.deliveryDays} günde edit teslim.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="xl" variant="whatsapp">
                  <a
                    href={getWhatsAppLink(
                      "Merhaba, fiyat ve müsaitlik için bilgi alabilir miyim?",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp'tan Yaz
                  </a>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <a href={getPhoneLink()} className="gap-2">
                    <Phone className="h-4 w-4" aria-hidden />
                    {BUSINESS.phoneDisplay}
                  </a>
                </Button>
                <Button asChild size="xl" variant="ghost">
                  <Link href="/galeri" className="gap-2">
                    Galeriyi Gör
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Edit Teslim
                  </dt>
                  <dd className="font-display text-2xl font-semibold md:text-3xl">
                    {BUSINESS.stats.deliveryDays} Gün
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Hizmet Bölgesi
                  </dt>
                  <dd className="font-display text-2xl font-semibold md:text-3xl">4 İlçe</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Google Puanı
                  </dt>
                  <dd className="font-display text-2xl font-semibold md:text-3xl">
                    {BUSINESS.stats.googleRating}/5
                  </dd>
                </div>
              </dl>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src={HERO_IMAGES.homeSquare}
                alt="Düğün çifti — profesyonel düğün fotoğrafçılığı"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 pt-16 text-white">
                <p className="text-xs font-medium uppercase tracking-wider opacity-80">
                  Anılar zamana direnir
                </p>
                <p className="mt-1 font-display text-lg font-semibold">
                  Hikayenizi sanatla yazıyoruz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIZMETLER */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Hizmetlerimiz
          </h2>
          <p className="mt-3 text-muted-foreground">
            Düğünden ürün çekimine, bebekten droneya — tek bir stüdyodan profesyonel hizmet.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHT_SERVICES.map(({ title, desc, href, icon: Icon, category }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={getCategoryImage(category, 800)}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-primary backdrop-blur">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Detayları gör
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/hizmetler">Tüm Hizmetleri Gör</Link>
          </Button>
        </div>
      </section>

      {/* HIZMET BOLGELERI */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Hizmet Bölgelerimiz</h2>
            <p className="mt-3 text-muted-foreground">
              Kocaeli'nin Gebze, Darıca, Çayırova ve Dilovası ilçeleri ile İstanbul Anadolu Yakası
              (Tuzla, Pendik) hizmet bölgemizdir.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {DISTRICTS.map((d) => (
              <Link
                key={d.slug}
                href={`/bolgeler/${d.slug}`}
                className="group rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-primary/40 hover:shadow-md"
              >
                <h3 className="font-display text-xl font-semibold group-hover:text-primary">
                  {d.name}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">Tüm mahalleler için sayfa</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground md:px-16 md:py-16">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Ücretsiz Keşif Görüşmesi
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Beklentilerinizi konuşalım, size en uygun paketi birlikte oluşturalım.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="xl" variant="secondary">
              <a href={getPhoneLink()}>
                <Phone className="h-4 w-4" aria-hidden />
                {BUSINESS.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="xl" variant="whatsapp">
              <a
                href={getWhatsAppLink(
                  "Merhaba, ücretsiz keşif görüşmesi yapmak istiyorum. Müsait misiniz?",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp'tan Yaz
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
