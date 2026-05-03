import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import {
  BUSINESS,
  NAV,
  DISTRICTS,
  getPhoneLink,
  getWhatsAppLink,
  getEmailLink,
  getMapsLink,
} from "@/lib/constants";

const SERVICE_LINKS = [
  { label: "Düğün Fotoğrafçısı", href: "/hizmetler/dugun-fotografcisi" },
  { label: "Nişan Fotoğrafçısı", href: "/hizmetler/nisan-fotografcisi" },
  { label: "Bebek Fotoğrafçısı", href: "/hizmetler/bebek-fotografcisi" },
  { label: "Yenidoğan Çekimi", href: "/hizmetler/yenidogan-cekimi" },
  { label: "Hamile Çekimi", href: "/hizmetler/hamile-fotograf-cekimi" },
  { label: "Aile Fotoğrafçısı", href: "/hizmetler/aile-fotografcisi" },
  { label: "Mezuniyet Çekimi", href: "/hizmetler/mezuniyet-fotograf-cekimi" },
  { label: "Vesikalık & Biyometrik", href: "/hizmetler/biyometrik-fotograf-cekimi" },
  { label: "Ürün Fotoğrafçısı", href: "/hizmetler/urun-fotograf-cekimi" },
  { label: "Drone Çekim", href: "/hizmetler/drone-fotograf-ve-video" },
  { label: "Tanıtım Filmi", href: "/hizmetler/tanitim-filmi-cekimi" },
  { label: "360° Sanal Tur", href: "/hizmetler/sanal-tur-cekimi" },
];

const SANAYI_LINKS = [
  { label: "GOSB Fotoğrafçı", href: "/sanayi-bolgeleri/gosb" },
  { label: "TOSB Fotoğrafçı", href: "/sanayi-bolgeleri/tosb" },
  { label: "Bilişim Vadisi", href: "/sanayi-bolgeleri/bilisim-vadisi" },
  { label: "Dilovası OSB", href: "/sanayi-bolgeleri/dilovasi-osb" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marka & Iletisim */}
          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold">{BUSINESS.name}</h2>
            <p className="text-sm text-muted-foreground">{BUSINESS.shortDescription}</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={getMapsLink()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  {BUSINESS.street}, {BUSINESS.neighborhood}, {BUSINESS.district}/{BUSINESS.city}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={getPhoneLink()} className="hover:text-primary">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a
                  href={getWhatsAppLink("Merhaba, fiyat ve müsaitlik için bilgi alabilir miyim?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  WhatsApp: {BUSINESS.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={getEmailLink()} className="hover:text-primary">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span className="text-muted-foreground">
                  Pzt-Cmt: {BUSINESS.hours.monday} <br />
                  Pazar: {BUSINESS.hours.sunday}
                </span>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Hizmetler</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-muted-foreground hover:text-primary">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/hizmetler" className="font-medium text-primary hover:underline">
                  Tüm Hizmetler →
                </Link>
              </li>
            </ul>
          </div>

          {/* Bolgeler */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Hizmet Bölgeleri</h3>
            <ul className="space-y-2 text-sm">
              {DISTRICTS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/bolgeler/${d.slug}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {d.name} Fotoğrafçı
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground">
                  Sanayi & B2B
                </p>
              </li>
              {SANAYI_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-muted-foreground hover:text-primary">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Kurumsal</h3>
            <ul className="space-y-2 text-sm">
              {NAV.primary.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-6 font-display text-lg font-semibold">Sosyal Medya</h3>
            <ul className="flex gap-3">
              {BUSINESS.social.instagram && (
                <li>
                  <a
                    href={BUSINESS.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-primary"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </li>
              )}
              {BUSINESS.social.facebook && (
                <li>
                  <a
                    href={BUSINESS.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </li>
              )}
              {BUSINESS.social.youtube && (
                <li>
                  <a
                    href={BUSINESS.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-primary"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Alt cubuk */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} {BUSINESS.name}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
            {NAV.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
