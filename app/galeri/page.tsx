import Link from "next/link";
import { Camera } from "lucide-react";
import { GALLERY_CATEGORIES } from "@/lib/data/gallery-categories";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Galeri",
  description: `${BUSINESS.name} 26 farklı kategoride fotoğraf galerisi: düğün, nişan, bebek, ürün, drone, sanal tur ve daha fazlası.`,
  path: "/galeri",
});

export default function GalleryIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "Galeri", href: "/galeri" }]} />

      <div className="mb-10 max-w-3xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Galeri</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {GALLERY_CATEGORIES.length} farklı kategoride çekim örneklerimizi inceleyin. Her kategoride
          gerçek müşterilerimizin (gizlilik onaylı) en başarılı kareleri yer alır.
        </p>
        <p className="mt-3 rounded-lg bg-accent/40 p-4 text-sm text-muted-foreground">
          📷 <strong className="text-foreground">Not:</strong> Galeri henüz görsellerle dolduruluyor.
          Çoğu kategoride yer tutucu görüldüğünde, bu bölümlerin gerçek çekim kareleri ile sürekli
          güncellendiğini bilin. Spesifik bir kategoride örnek görmek isterseniz WhatsApp'tan yazın.
        </p>
      </div>

      {/* Kategoriler grid */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {GALLERY_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/galeri/${cat.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-md"
          >
            <div className="relative aspect-square bg-gradient-to-br from-primary/15 via-accent to-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="h-10 w-10 text-primary/40" aria-hidden />
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-display text-base font-semibold group-hover:text-primary">
                {cat.name}
              </h2>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{cat.description}</p>
            </div>
          </Link>
        ))}
      </section>

      <div className="mt-16">
        <CTABanner
          title="Kendi Çekiminize Hazır mısınız?"
          subtitle="Galeride gördüğünüz çekim tarzından siz de yararlanmak ister misiniz? Hemen iletişime geçin."
        />
      </div>
    </div>
  );
}
