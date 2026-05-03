"use client";

import { Phone } from "lucide-react";
import { BUSINESS, getPhoneLink } from "@/lib/constants";

/**
 * Mobil cihazlarda sayfanin altinda sticky telefon ara butonu.
 * Desktop'ta gizli — Header'daki telefon butonu yeterli.
 */
export function PhoneFloat() {
  return (
    <a
      href={getPhoneLink()}
      aria-label={`Hemen ara: ${BUSINESS.phoneDisplay}`}
      className="no-print fixed bottom-4 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
    >
      <Phone className="h-7 w-7" aria-hidden />
      <span className="sr-only">Hemen ara</span>
    </a>
  );
}
