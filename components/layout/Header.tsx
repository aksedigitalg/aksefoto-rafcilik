"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Camera } from "lucide-react";
import { BUSINESS, NAV, getPhoneLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-background",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6 md:py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={BUSINESS.name}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground md:h-12 md:w-12">
            <Camera className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold tracking-tight md:text-2xl lg:text-[26px]">
              {BUSINESS.name}
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-wider text-muted-foreground md:block">
              Gebze · Düğün & Stüdyo Fotoğrafçısı
            </span>
          </div>
        </Link>

        <nav className="hidden lg:block" aria-label="Ana menü">
          <ul className="flex items-center gap-1">
            {NAV.primary.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={getPhoneLink()}
            className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
            aria-label={`Hemen ara: ${BUSINESS.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>{BUSINESS.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-accent lg:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 md:px-6" aria-label="Mobil menü">
            <ul className="flex flex-col gap-1">
              {NAV.primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={getPhoneLink()}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  <span>Hemen Ara: {BUSINESS.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
