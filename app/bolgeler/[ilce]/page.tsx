import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Camera } from "lucide-react";
import { DISTRICTS } from "@/lib/constants";
import { getNeighborhoodsByDistrict } from "@/lib/data/neighborhoods";
import { services } from "@/lib/data/services";
import { buildMetadata, serviceLocationDescription } from "@/lib/seo";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ProcessSteps } from "@/components/sections/ProcessSteps";

export function generateStaticParams() {
  return DISTRICTS.map((d) => ({ ilce: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ilce: string }> }) {
  const { ilce } = await params;
  const district = DISTRICTS.find((d) => d.slug === ilce);
  if (!district) return { title: "Sayfa Bulunamadı" };
  return buildMetadata({
    title: `${district.name} Fotoğrafçı`,
    description: serviceLocationDescription("Profesyonel fotoğrafçı", district.name),
    path: `/bolgeler/${district.slug}`,
    keywords: [
      `${district.name} fotoğrafçı`,
      `${district.name} düğün fotoğrafçısı`,
      `${district.name} bebek fotoğrafçısı`,
      `${district.name} biyometrik fotoğraf`,
      `Kocaeli fotoğrafçı`,
    ],
  });
}

const POPULAR_SERVICE_SLUGS = [
  "dugun-fotografcisi",
  "nisan-fotografcisi",
  "yenidogan-cekimi",
  "bebek-fotografcisi",
  "hamile-fotograf-cekimi",
  "aile-fotografcisi",
  "biyometrik-fotograf-cekimi",
  "vesikalik-fotograf-cekimi",
  "kurumsal-fotograf-cekimi",
  "urun-fotograf-cekimi",
  "drone-fotograf-ve-video",
  "1-yas-pasta-patlatma",
];

export default async function DistrictPage({ params }: { params: Promise<{ ilce: string }> }) {
  const { ilce } = await params;
  const district = DISTRICTS.find((d) => d.slug === ilce);
  if (!district) notFound();

  const list = getNeighborhoodsByDistrict(district.slug);
  const popularServices = POPULAR_SERVICE_SLUGS
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // Ilceye ozel acilis metni
  const districtIntros: Record<string, string> = {
    gebze: `Gebze, Kocaeli'nin nüfus, sanayi ve ticaret merkezi. 40 mahalle ile geniş bir coğrafyaya yayılan bu ilçenin her köşesinde Akse Fotoğrafçılık aktif çalışıyor. Eskihisar tarihi limanından Pelitli OSB'ye, Bayramoğlu sahilinin yakınlığından Bilişim Vadisi'ne kadar; düğünden ürüne, vesikalıktan drone çekime tüm hizmet kategorilerinde Gebze'nin tercihi.`,
    darica: `Darıca, Marmara'nın inci mavisi sahilinde yer alan, düğün ve dış çekim açısından Kocaeli'nin en zengin doğal lokasyonuna sahip ilçesidir. Bayramoğlu Sahili, Yalı plajı ve Sırasöğütler'in tarihi söğütleri save the date, trash the dress ve düğün dış çekimleri için sıkça tercih edilir. 14 mahallesinin her birinde ayrı çekim mekanları sunuyoruz.`,
    cayirova: `Çayırova, otomotiv yan sanayi yoğunluklu TOSB'a ev sahipliği yapan, hem B2B hem bireysel müşteri profili güçlü bir ilçedir. Akse mahallesi markamızın isim mirasını taşır; Şekerpınar TOSB ile fabrika tanıtımı, Cumhuriyet ve Atatürk mahalleleriyle aile çekimi yoğun. 10 mahallenin tamamında aktif hizmet.`,
    dilovasi: `Dilovası, Marmara liman erişimi sayesinde ihracat odaklı sanayi tesislerine ev sahipliği yapan, aynı zamanda Tavşancıl gibi tarihi balıkçı köyü mahalleleriyle çift karakterli bir ilçedir. Hem ağır sanayi B2B çekimleri (Dilovası OSB) hem sahil dış çekimleri (Tavşancıl, Diliskelesi) için aktif. 12 mahallesinin her birinde özel hizmet.`,
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav
        items={[
          { name: "Bölgeler", href: "/bolgeler" },
          { name: district.name, href: `/bolgeler/${district.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="mb-16">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">
          {district.name} Fotoğrafçı
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          {districtIntros[district.slug] ?? ""}
        </p>
      </section>

      {/* Trust */}
      <section className="mb-16">
        <TrustBadges />
      </section>

      {/* Mahalleler */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            {district.name} Mahalleleri ({list.length})
          </h2>
          <p className="mt-2 text-muted-foreground">
            Her mahallenin kendine özel çekim mekanları, popüler hizmetleri ve yerel müşteri
            yorumları için detay sayfasına göz atın.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((n) => (
            <Link
              key={n.slug}
              href={`/bolgeler/${district.slug}/${n.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden />
                <h3 className="font-display text-lg font-semibold group-hover:text-primary">
                  {n.name}
                </h3>
              </div>
              <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                {n.description.split(".")[0]}.
              </p>
              {n.landmarks.length > 0 ? (
                <p className="mt-3 text-xs text-muted-foreground">
                  Öne çıkan: {n.landmarks.slice(0, 2).join(", ")}
                </p>
              ) : null}
            </Link>
          ))}
        </div>
      </section>

      {/* Popüler hizmetler */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            {district.name}'da Popüler Hizmetler
          </h2>
          <p className="mt-2 text-muted-foreground">En çok talep edilen 12 hizmet kategorisi.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {popularServices.map((s) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <Camera className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 font-display text-base font-semibold group-hover:text-primary">
                {s.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                {s.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Süreç */}
      <section className="mb-16">
        <ProcessSteps />
      </section>

      {/* CTA */}
      <CTABanner
        title={`${district.name}'da Çekim Yapalım`}
        subtitle="Mahallenize uygun mekan, paket ve tarih için ücretsiz ön görüşme ile başlayalım."
        whatsappMessage={`Merhaba, ${district.name}'da çekim yaptırmak istiyorum.`}
      />
    </div>
  );
}
