import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, SERVICE_CATEGORIES } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Tüm Hizmetler",
  description: `${BUSINESS.name} 70+ farklı çekim hizmeti: düğün, nişan, bebek, kurumsal, ürün, drone, sanal tur. Gebze, Darıca, Çayırova, Dilovası.`,
  path: "/hizmetler",
});

export default function ServicesIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "Hizmetler", href: "/hizmetler" }]} />

      <div className="mb-12 max-w-3xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Tüm Hizmetlerimiz</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Düğünden ürüne, vesikalıktan drone çekime — tek stüdyodan {services.length}+ farklı
          kategoride profesyonel hizmet. Aradığınız hizmeti aşağıdaki kategorilerde bulun veya
          formdan özel paket isteyin.
        </p>
      </div>

      <div className="space-y-12">
        {SERVICE_CATEGORIES.map((cat) => {
          const catServices = services.filter((s) => s.category === cat.slug);
          return (
            <section key={cat.slug} aria-labelledby={`cat-${cat.slug}`}>
              <header className="mb-6 flex flex-col gap-2">
                <h2 id={`cat-${cat.slug}`} className="font-display text-2xl font-semibold md:text-3xl">
                  {cat.name}
                </h2>
                <p className="text-muted-foreground">{cat.description}</p>
              </header>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/hizmetler/${s.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <h3 className="font-display text-lg font-semibold group-hover:text-primary">
                      {s.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                      {s.shortDescription}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Detayları gör
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16">
        <CTABanner
          title="Aradığınız Hizmeti Bulamadınız mı?"
          subtitle="Karma paket veya özel istek için bize WhatsApp'tan yazın; size özel teklif oluşturalım."
        />
      </div>
    </div>
  );
}
