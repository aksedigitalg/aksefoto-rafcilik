import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/constants";
import type { ServicePackage } from "@/lib/types";

interface PricingTableProps {
  packages: ServicePackage[];
  serviceName: string;
  className?: string;
}

export function PricingTable({ packages, serviceName, className }: PricingTableProps) {
  return (
    <section className={cn("mx-auto max-w-6xl", className)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={cn(
              "relative flex flex-col rounded-2xl border p-6 transition-all md:p-8",
              pkg.popular
                ? "border-primary bg-card shadow-lg ring-2 ring-primary/20"
                : "border-border bg-card hover:border-primary/40 hover:shadow-md",
            )}
          >
            {pkg.popular ? (
              <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                <Sparkles className="h-3 w-3" aria-hidden />
                En Popüler
              </span>
            ) : null}

            <div>
              <h3 className="font-display text-2xl font-semibold">{pkg.name}</h3>
              {pkg.description ? (
                <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
              ) : null}
              <p className="mt-4 font-display text-3xl font-semibold text-primary">
                {pkg.priceRange}
              </p>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {pkg.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" variant={pkg.popular ? "default" : "outline"} className="mt-6">
              <a
                href={getWhatsAppLink(
                  `Merhaba, "${serviceName}" hizmetinin "${pkg.name}" paketi hakkında bilgi almak istiyorum.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bu Paketi Seçiyorum
              </a>
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Fiyatlar yaklaşık aralıktır. Çekim tarihi, lokasyon ve ek ihtiyaçlara göre kişisel teklif
        oluşturuyoruz.
      </p>
    </section>
  );
}
