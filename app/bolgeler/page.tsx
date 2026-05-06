import Link from "next/link";
import { MapPin, Building2, Camera } from "lucide-react";
import { DISTRICTS, BUSINESS } from "@/lib/constants";
import { getAllNeighborhoods } from "@/lib/db/neighborhoods";
import { getAllIndustrialZones } from "@/lib/db/industrial-zones";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Hizmet Bölgelerimiz",
  description: `${BUSINESS.name} Gebze, Darıca, Çayırova, Dilovası ve 76+ mahallede fotoğraf çekim hizmeti. Bölgenize özel mahalle sayfaları.`,
  path: "/bolgeler",
});

export default async function RegionsIndexPage() {
  const [neighborhoods, industrialZones] = await Promise.all([
    getAllNeighborhoods(),
    getAllIndustrialZones(),
  ]);
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "Bölgeler", href: "/bolgeler" }]} />

      <div className="mb-12 max-w-3xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Hizmet Bölgelerimiz</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Akse Fotoğrafçılık Kocaeli'nin Gebze, Darıca, Çayırova ve Dilovası ilçelerinde +{" "}
          {neighborhoods.length} mahallede + 8 organize sanayi bölgesinde aktif hizmet veriyor.
          Bölgenize özel sayfada o mahallenin çekim mekanları, popüler hizmetler ve yerel müşteri
          yorumlarını bulabilirsiniz.
        </p>
      </div>

      {/* İlçeler */}
      <section className="mb-16">
        <h2 className="mb-6 font-display text-2xl font-semibold md:text-3xl">İlçeler</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DISTRICTS.map((d) => {
            const count = neighborhoods.filter((n) => n.district === d.slug).length;
            return (
              <Link
                key={d.slug}
                href={`/bolgeler/${d.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <MapPin className="h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-4 font-display text-2xl font-semibold group-hover:text-primary">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{count} mahalle için ayrı sayfa</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Sanayi Bölgeleri */}
      <section className="mb-16">
        <h2 className="mb-2 font-display text-2xl font-semibold md:text-3xl">Sanayi Bölgeleri</h2>
        <p className="mb-6 text-muted-foreground">
          B2B ve kurumsal müşteriler için organize sanayi bölgelerine özel sayfalar.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industrialZones.map((z) => (
            <Link
              key={z.slug}
              href={`/sanayi-bolgeleri/${z.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <Building2 className="h-7 w-7 text-primary" aria-hidden />
              <h3 className="mt-3 font-display text-base font-semibold group-hover:text-primary">
                {z.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{z.fullName}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tüm mahalleler — alfabetik */}
      <section className="mb-16">
        <h2 className="mb-6 font-display text-2xl font-semibold md:text-3xl">
          Tüm Mahalleler ({neighborhoods.length})
        </h2>
        {DISTRICTS.map((d) => {
          const list = neighborhoods.filter((n) => n.district === d.slug);
          return (
            <div key={d.slug} className="mb-10">
              <h3 className="mb-4 font-display text-xl font-semibold">{d.name}</h3>
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {list.map((n) => (
                  <li key={`${d.slug}-${n.slug}`}>
                    <Link
                      href={`/bolgeler/${d.slug}/${n.slug}`}
                      className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent hover:text-primary"
                    >
                      <Camera className="h-3.5 w-3.5" aria-hidden />
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      <CTABanner
        title="Bölgenizden Hizmet Almak İster misiniz?"
        subtitle="Bulunduğunuz mahalleye özel öneriler, çekim mekanları ve yerel paketler için hemen iletişime geçin."
      />
    </div>
  );
}
