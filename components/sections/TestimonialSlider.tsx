import { Star } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Testimonial } from "@/lib/types";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  title?: string;
  className?: string;
}

/**
 * Sade müşteri yorumları grid (slider yerine accessibility için statik grid).
 * Mobilde 1, tablet 2, desktop 3 sutun.
 */
export function TestimonialSlider({
  testimonials,
  title = "Müşterilerimiz Ne Diyor?",
  className,
}: TestimonialSliderProps) {
  if (testimonials.length === 0) return null;

  return (
    <section className={className}>
      {title ? (
        <h2 className="mb-8 text-center font-display text-2xl font-semibold md:text-3xl">
          {title}
        </h2>
      ) : null}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article
            key={t.id}
            className="flex flex-col rounded-xl border border-border bg-card p-6"
          >
            <div className="mb-3 flex" aria-label={`${t.rating} yıldız`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < t.rating
                      ? "h-4 w-4 fill-primary text-primary"
                      : "h-4 w-4 text-muted-foreground/30"
                  }
                  aria-hidden
                />
              ))}
            </div>
            <p className="flex-1 text-sm leading-relaxed text-foreground/90">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="mt-4 border-t border-border pt-4">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">
                {t.service}
                {t.neighborhood ? ` • ${t.neighborhood}` : ""}
                {" • "}
                {formatDate(t.date)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
