import Link from "next/link";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, getWhatsAppLink } from "@/lib/constants";

export const metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center md:px-6">
      <Camera className="mb-6 h-16 w-16 text-primary" aria-hidden />
      <h1 className="font-display text-4xl font-semibold md:text-5xl">404 — Sayfa Bulunamadı</h1>
      <p className="mt-4 max-w-lg text-muted-foreground">
        Aradığınız sayfa kaldırılmış, taşınmış veya hiç var olmamış olabilir. Aşağıdaki linklerden
        devam edebilir veya bizimle iletişime geçebilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg">
          <Link href="/">Ana Sayfa</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/hizmetler">Hizmetler</Link>
        </Button>
        <Button asChild size="lg" variant="whatsapp">
          <a
            href={getWhatsAppLink("Merhaba, sitenizde bir sayfaya ulaşamıyorum.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp ile Sor
          </a>
        </Button>
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        Ya da telefonla ulaşın:{" "}
        <a href={`tel:${BUSINESS.phone}`} className="font-semibold text-primary hover:underline">
          {BUSINESS.phoneDisplay}
        </a>
      </p>
    </section>
  );
}
