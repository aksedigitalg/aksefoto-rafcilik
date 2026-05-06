import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { getAllServices } from "@/lib/db/services";
import { SERVICE_CATEGORIES } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Fiyatlar ve Paketler",
  description: `${BUSINESS.name} fiyat aralıkları: düğün, bebek, kurumsal, ürün, drone, vesikalık. 70+ hizmet için tüm paketler tek sayfada.`,
  path: "/fiyatlar",
});

export default async function PricingPage() {
  const services = await getAllServices();
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "Fiyatlar", href: "/fiyatlar" }]} />

      <div className="mb-12 max-w-3xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">
          Fiyatlar ve Paketler
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tüm hizmetlerimizin fiyat aralıkları aşağıda listelenmiştir. Bunlar yaklaşık aralıktır;
          çekim tarihi, lokasyon ve özel istekler için kişiye özel teklif veriyoruz. Her hizmetin
          detay sayfasında 3 farklı paket (Klasik / Hikaye / Premium) mevcuttur.
        </p>
        <div className="mt-6 rounded-lg bg-accent/40 p-4 text-sm">
          <p className="font-medium">💡 Önemli Notlar:</p>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>• Gebze, Darıca, Çayırova, Dilovası içinde ulaşım ücreti alınmaz.</li>
            <li>• İstanbul Anadolu yakası (Tuzla, Pendik) için sembolik ulaşım ücreti.</li>
            <li>• Birden fazla hizmet kombineli alındığında %5-15 indirim uygulanır.</li>
            <li>• KDV dahil veya hariç durumu hizmet türüne göre ön görüşmede netleşir.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-12">
        {SERVICE_CATEGORIES.map((cat) => {
          const catServices = services.filter((s) => s.category === cat.slug);
          return (
            <section key={cat.slug}>
              <h2 className="mb-6 font-display text-2xl font-semibold md:text-3xl">{cat.name}</h2>
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="p-4 text-left text-sm font-semibold">Hizmet</th>
                      <th className="hidden p-4 text-left text-sm font-semibold md:table-cell">
                        Klasik
                      </th>
                      <th className="hidden p-4 text-left text-sm font-semibold md:table-cell">
                        Popüler
                      </th>
                      <th className="hidden p-4 text-left text-sm font-semibold md:table-cell">
                        Premium
                      </th>
                      <th className="p-4 text-left text-sm font-semibold">Detay</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {catServices.map((s) => {
                      const klasik = s.packages[0];
                      const populer = s.packages.find((p) => p.popular) || s.packages[1];
                      const premium = s.packages[s.packages.length - 1];
                      return (
                        <tr key={s.slug} className="hover:bg-accent/30">
                          <td className="p-4">
                            <Link
                              href={`/hizmetler/${s.slug}`}
                              className="font-medium hover:text-primary"
                            >
                              {s.name}
                            </Link>
                          </td>
                          <td className="hidden p-4 text-sm text-muted-foreground md:table-cell">
                            {klasik?.priceRange ?? "—"}
                          </td>
                          <td className="hidden p-4 text-sm text-foreground md:table-cell">
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                              <Sparkles className="h-3 w-3" />
                              {populer?.priceRange ?? "—"}
                            </span>
                          </td>
                          <td className="hidden p-4 text-sm text-muted-foreground md:table-cell">
                            {premium?.priceRange ?? "—"}
                          </td>
                          <td className="p-4">
                            <Link
                              href={`/hizmetler/${s.slug}`}
                              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                            >
                              Gör
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16">
        <CTABanner
          title="Size Özel Teklif İster misiniz?"
          subtitle="İhtiyacınızı söyleyin, kombineli paket veya özel etkinlik için kişiye özel fiyat oluşturalım."
        />
      </div>
    </div>
  );
}
