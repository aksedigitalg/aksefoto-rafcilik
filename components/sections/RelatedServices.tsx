import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/types";

interface RelatedServicesProps {
  services: Service[];
  title?: string;
  className?: string;
}

export function RelatedServices({
  services,
  title = "İlgili Hizmetler",
  className,
}: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section className={className}>
      {title ? (
        <h2 className="mb-8 font-display text-2xl font-semibold md:text-3xl">{title}</h2>
      ) : null}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/hizmetler/${s.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
          >
            <h3 className="font-display text-lg font-semibold group-hover:text-primary">{s.name}</h3>
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
}
