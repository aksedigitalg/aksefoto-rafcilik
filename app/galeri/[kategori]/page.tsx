import Link from "next/link";
import { notFound } from "next/navigation";
import { Camera, ArrowRight } from "lucide-react";
import { GALLERY_CATEGORIES } from "@/lib/data/gallery-categories";
import { getServiceBySlug } from "@/lib/db/services";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";

export function generateStaticParams() {
  return GALLERY_CATEGORIES.map((c) => ({ kategori: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ kategori: string }> }) {
  const { kategori } = await params;
  const cat = GALLERY_CATEGORIES.find((c) => c.slug === kategori);
  if (!cat) return { title: "Sayfa Bulunamadı" };
  return buildMetadata({
    title: `${cat.name} Galerisi`,
    description: `${cat.name} kategorisinde Akse Fotoğrafçılık çekim örnekleri. ${cat.description}`,
    path: `/galeri/${cat.slug}`,
  });
}

export default async function GalleryCategoryPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori } = await params;
  const cat = GALLERY_CATEGORIES.find((c) => c.slug === kategori);
  if (!cat) notFound();

  const relatedService = cat.serviceSlug ? await getServiceBySlug(cat.serviceSlug) : null;

  // 16 yer tutucu — gerçek görseller eklendiğinde bu yerine veri kaynağı kullanılır
  const placeholders = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav
        items={[
          { name: "Galeri", href: "/galeri" },
          { name: cat.name, href: `/galeri/${cat.slug}` },
        ]}
      />

      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Galeri</p>
          <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">{cat.name}</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">{cat.description}</p>
        </div>
        {relatedService ? (
          <Link
            href={`/hizmetler/${relatedService.slug}`}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40 hover:text-primary"
          >
            {relatedService.name} hizmeti
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        ) : null}
      </div>

      {/* Diğer kategoriler */}
      <section className="mb-10">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/galeri"
            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium hover:border-primary/40 hover:text-primary"
          >
            Tümü
          </Link>
          {GALLERY_CATEGORIES.filter((c) => c.slug !== cat.slug)
            .slice(0, 12)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/galeri/${c.slug}`}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs hover:border-primary/40 hover:text-primary"
              >
                {c.name}
              </Link>
            ))}
        </div>
      </section>

      {/* Galeri grid - yer tutucular */}
      <section>
        <div className="mb-6 rounded-lg bg-accent/40 p-4 text-sm text-muted-foreground">
          📷 Bu kategorinin görselleri yüklenmek üzere. Gerçek çekim kareleri eklendiğinde
          masonry grid otomatik dolacak ve lightbox ile büyütülerek incelenebilecek.
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {placeholders.map((i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 via-accent to-muted ${i % 5 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-square" : "aspect-[4/3]"}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="h-8 w-8 text-primary/30" aria-hidden />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <CTABanner
          title={`${cat.name} Çekimi mi İstiyorsunuz?`}
          subtitle="Galeri görsellerinden ilham aldıysanız, kendi çekiminiz için hemen iletişime geçin."
          whatsappMessage={`Merhaba, ${cat.name} kategorisinde çekim yaptırmak istiyorum.`}
        />
      </div>
    </div>
  );
}
