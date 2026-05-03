import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, getPhoneLink, getWhatsAppLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
  variant?: "primary" | "muted";
  className?: string;
}

export function CTABanner({
  title = "Ücretsiz Keşif Görüşmesi",
  subtitle = "Beklentilerinizi konuşalım, size en uygun paketi birlikte oluşturalım.",
  whatsappMessage = "Merhaba, ücretsiz keşif görüşmesi yapmak istiyorum.",
  variant = "primary",
  className,
}: CTABannerProps) {
  const isPrimary = variant === "primary";

  return (
    <section
      className={cn(
        "rounded-2xl px-8 py-12 text-center md:px-16 md:py-16",
        isPrimary ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
        className,
      )}
    >
      <h2 className="font-display text-3xl font-semibold md:text-4xl">{title}</h2>
      <p
        className={cn(
          "mx-auto mt-3 max-w-xl",
          isPrimary ? "text-primary-foreground/85" : "text-muted-foreground",
        )}
      >
        {subtitle}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="xl" variant={isPrimary ? "secondary" : "default"}>
          <a href={getPhoneLink()}>
            <Phone className="h-4 w-4" aria-hidden />
            {BUSINESS.phoneDisplay}
          </a>
        </Button>
        <Button asChild size="xl" variant="whatsapp">
          <a href={getWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp'tan Yaz
          </a>
        </Button>
      </div>
    </section>
  );
}
