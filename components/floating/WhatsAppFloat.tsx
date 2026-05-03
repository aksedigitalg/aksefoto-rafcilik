"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS, getWhatsAppLink } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink("Merhaba, fiyat ve müsaitlik için bilgi alabilir miyim?")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ile yaz: ${BUSINESS.whatsappDisplay}`}
      className="no-print fixed bottom-20 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
      <span className="sr-only">WhatsApp ile iletişime geç</span>
    </a>
  );
}
