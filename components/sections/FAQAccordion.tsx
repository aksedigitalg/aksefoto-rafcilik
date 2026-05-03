"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/lib/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  className?: string;
}

export function FAQAccordion({ faqs, title = "Sıkça Sorulan Sorular", className }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className={cn("mx-auto max-w-3xl", className)}>
      {title ? (
        <h2 className="mb-8 text-center font-display text-2xl font-semibold md:text-3xl">{title}</h2>
      ) : null}

      <ul className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <li key={idx} className="overflow-hidden rounded-lg border border-border bg-card">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-accent/50 md:p-5"
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
              {isOpen ? (
                <div className="border-t border-border bg-muted/20 px-4 py-4 text-sm text-muted-foreground md:px-5 md:py-5 md:text-base">
                  {faq.answer}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
