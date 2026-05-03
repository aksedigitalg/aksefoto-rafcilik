import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, ExternalLink } from "lucide-react";
import { BUSINESS, getPhoneLink, getWhatsAppLink, getEmailLink, getMapsLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = buildMetadata({
  title: "İletişim",
  description: `Gebze Güzeller'de ${BUSINESS.name} stüdyosu. Telefon, WhatsApp, e-posta ile ulaşın veya formdan mesaj gönderin. Adres: ${BUSINESS.street}.`,
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "İletişim", href: "/iletisim" }]} />

      <div className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">İletişim</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Size en uygun yöntemle bize ulaşın. WhatsApp ve telefonla anında dönüş sağlıyoruz; form
          mesajları için 24 saat içinde cevap veriyoruz.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Sol: İletişim Bilgileri */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 font-display text-xl font-semibold">İletişim Kanalları</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2">
                  <Phone className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Telefon</p>
                  <a
                    href={getPhoneLink()}
                    className="text-lg text-foreground hover:text-primary hover:underline"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-md bg-[#25D366]/10 p-2">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">WhatsApp</p>
                  <a
                    href={getWhatsAppLink("Merhaba, fiyat ve müsaitlik için bilgi alabilir miyim?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-foreground hover:text-primary hover:underline"
                  >
                    {BUSINESS.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2">
                  <Mail className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">E-posta</p>
                  <a href={getEmailLink()} className="text-foreground hover:text-primary hover:underline">
                    {BUSINESS.email}
                  </a>
                </div>
              </li>
              {BUSINESS.social.instagram ? (
                <li className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <Instagram className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Instagram</p>
                    <a
                      href={BUSINESS.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary hover:underline"
                    >
                      @aksefotografcilik
                    </a>
                  </div>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 font-display text-xl font-semibold">Stüdyo Adresi</h2>
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-primary/10 p-2">
                <MapPin className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div className="flex-1">
                <p className="font-medium">{BUSINESS.legalName}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.postalCode} {BUSINESS.district}/{BUSINESS.city}
                </p>
                <a
                  href={getMapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Google Maps'te Aç →
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 font-display text-xl font-semibold">Çalışma Saatleri</h2>
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-primary/10 p-2">
                <Clock className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <ul className="flex-1 space-y-1 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Pazartesi - Cumartesi</span>
                  <span className="font-medium">{BUSINESS.hours.monday}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Pazar</span>
                  <span className="font-medium">{BUSINESS.hours.sunday}</span>
                </li>
              </ul>
            </div>
            <p className="mt-4 rounded-md bg-accent/50 p-3 text-xs text-muted-foreground">
              💡 Belge fotoğrafı (vesikalık, biyometrik) için randevu gerekmez. Düğün/etkinlik gibi
              büyük çekimler için önceden müsaitlik kontrolü yapılır.
            </p>
          </div>

          {/* Konum kartı — Google Maps embed yerine tıklanabilir konum */}
          <a
            href={getMapsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/10 via-accent to-muted p-6 transition-all hover:border-primary/40 hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                <MapPin className="h-6 w-6" aria-hidden />
              </div>
              <div className="flex-1">
                <p className="font-display text-lg font-semibold">Stüdyo Konumumuz</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.postalCode} {BUSINESS.district}/{BUSINESS.city}
                </p>
                <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                  Google Maps'te aç
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </p>
              </div>
            </div>
            <p className="mt-4 rounded-md bg-background/60 p-3 text-xs text-muted-foreground backdrop-blur">
              💡 GOSB ve şehir merkezine 5-10 dakika mesafede; park imkanı mevcut. Toplu taşıma ile
              de ulaşılabilir.
            </p>
          </a>
        </div>

        {/* Sağ: İletişim Formu */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold">Mesaj Gönder</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Formu doldurun, en kısa sürede size dönüş yapalım. Acil durumlar için WhatsApp daha
            hızlıdır.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
