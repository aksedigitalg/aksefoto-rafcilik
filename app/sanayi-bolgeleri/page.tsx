import Link from "next/link";
import { Building2, Factory, Shield, Award } from "lucide-react";
import { getAllIndustrialZones } from "@/lib/db/industrial-zones";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Sanayi Bölgeleri B2B Fotoğraf Hizmetleri",
  description:
    "GOSB, TOSB, Bilişim Vadisi, Dilovası OSB, Pelitli, Plastikçiler, Kimya İhtisas, Güzeller OSB için fabrika, drone, tanıtım filmi B2B çekim hizmetleri.",
  path: "/sanayi-bolgeleri",
});

const B2B_ADVANTAGES = [
  {
    icon: Shield,
    title: "NDA Standardı",
    description:
      "Marka mahremiyeti, üretim süreç sırrı, müşteri listesi için uluslararası seviyede gizlilik.",
  },
  {
    icon: Factory,
    title: "ATEX + Sektörel Uyum",
    description:
      "Kimya, plastik, gıda, otomotiv yan sanayi spesifik güvenlik standartlarına uyum.",
  },
  {
    icon: Building2,
    title: "Tüm OSB'ler",
    description: "GOSB, TOSB, Bilişim Vadisi, Dilovası OSB ve diğer Kocaeli OSB'lerinde aktif.",
  },
  {
    icon: Award,
    title: "Avrupa Pazarı Uyumlu",
    description:
      "ISO/CE/IATF/REACH başvurularına uygun, uluslararası fuar standartlarında görsel teslim.",
  },
];

export default async function IndustrialZonesIndexPage() {
  const industrialZones = await getAllIndustrialZones();
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "Sanayi Bölgeleri", href: "/sanayi-bolgeleri" }]} />

      <div className="mb-12 max-w-3xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">
          Sanayi Bölgeleri B2B Fotoğraf Hizmetleri
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {BUSINESS.name}, Kocaeli'nin önemli OSB'lerinde — GOSB, TOSB, Bilişim Vadisi, Dilovası
          OSB, Pelitli OSB, Plastikçiler OSB, Kimya İhtisas OSB, Güzeller OSB — B2B fotoğraf, drone
          hava çekimi ve tanıtım filmi hizmetleri sunuyoruz. Uluslararası standartlara uygun çekim,
          NDA gizlilik standardı ve sektörel güvenlik uyumu ile sanayinizin pazarlama ihtiyaçlarını
          karşılıyoruz.
        </p>
      </div>

      {/* Avantajlar */}
      <section className="mb-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {B2B_ADVANTAGES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <Icon className="h-7 w-7 text-primary" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OSB Listesi */}
      <section className="mb-16">
        <h2 className="mb-6 font-display text-2xl font-semibold md:text-3xl">
          Hizmet Verdiğimiz Sanayi Bölgeleri
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {industrialZones.map((z) => (
            <Link
              key={z.slug}
              href={`/sanayi-bolgeleri/${z.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <Building2 className="h-9 w-9 text-primary" aria-hidden />
              <h3 className="mt-4 font-display text-2xl font-semibold group-hover:text-primary">
                {z.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{z.fullName}</p>
              <p className="mt-4 line-clamp-3 flex-1 text-sm text-foreground/80">
                {z.description.split(".")[0]}.
              </p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Detaylı bilgi →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        title="Tesisinize Özel B2B Paket"
        subtitle="Fabrika tanıtım, drone hava çekimi, ürün katalog ve tanıtım filmi için özel teklif isteyin."
        whatsappMessage="Merhaba, sanayi tesisimiz için B2B çekim hizmeti almak istiyorum."
      />
    </div>
  );
}
