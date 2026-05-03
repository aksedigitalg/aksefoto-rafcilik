import Image from "next/image";
import { Camera, Heart, Sparkles, Award, Clock, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { personSchema } from "@/lib/schema";
import { HERO_IMAGES } from "@/lib/data/unsplash-images";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";
import { TrustBadges } from "@/components/sections/TrustBadges";

export const metadata = buildMetadata({
  title: "Hakkımızda",
  description: `${BUSINESS.name} — Gebze Güzeller'de 2025'te kurulmuş genç ve yenilikçi bir fotoğraf stüdyosu. Modern ekipman, sanatkar bakış, hızlı teslim.`,
  path: "/hakkimizda",
});

const VALUES = [
  {
    icon: Heart,
    title: "Hikaye Önceliği",
    description:
      "Sıradan bir kare çekmiyoruz; bir anın gerçek duygusunu yakalıyoruz. Belgeselci bakış açımız her çekimde aynı.",
  },
  {
    icon: Sparkles,
    title: "Modern Ekipman",
    description:
      "Sony FX kameralar, gimbal, drone, profesyonel ışık. Teknolojiyi sanata hizmet ettirmek için sürekli yatırım.",
  },
  {
    icon: Award,
    title: "Dijital Pazarlama Avantajı",
    description:
      "Sadece fotoğraf değil, görsel kimliğin dijital pazarlama stratejisine entegrasyonu — SEO uyumlu kareler ve sosyal medya formatları standardımız.",
  },
  {
    icon: Clock,
    title: "Hızlı Teslim",
    description: `Edit teslim süremiz ${BUSINESS.stats.deliveryDays} gün; sosyal medya için ilk kareler 24-48 saat içinde elinizde.`,
  },
  {
    icon: Camera,
    title: "70+ Hizmet",
    description:
      "Düğünden ürüne, vesikalıktan drone çekime — tek stüdyodan 70+ farklı kategoride profesyonel hizmet.",
  },
  {
    icon: MapPin,
    title: "Yerel Uzmanlık",
    description:
      "Gebze, Darıca, Çayırova ve Dilovası'nın her mahallesini, çekim mekanını ve sanayi bölgesini biliyoruz.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema(BUSINESS.owner, "Fotoğrafçı / Stüdyo Sahibi")} />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <BreadcrumbNav items={[{ name: "Hakkımızda", href: "/hakkimizda" }]} />

        {/* Hero */}
        <section className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              {BUSINESS.tagline}
            </h1>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">{BUSINESS.name}</strong>, Gebze Güzeller'de{" "}
                {BUSINESS.founded} yılında kurulmuş genç ve yenilikçi bir fotoğraf stüdyosudur.
                Düğün, nişan, bebek, kurumsal, ürün ve sanayi tanıtım çekimleri başta olmak üzere
                70+ farklı kategoride profesyonel hizmet sunuyoruz.
              </p>
              <p>
                Bireysel müşterilerimize hem de bölgenin önde gelen sanayi tesislerine — GOSB, TOSB,
                Bilişim Vadisi, Dilovası OSB — kapsamlı görsel çözümler üretiyoruz. Modern sinema
                kameraları, drone, gimbal stabilizatör ve 360° ekipmanlarıyla teknolojiyi sanata
                hizmet ettiriyoruz.
              </p>
              <p>
                Sadece güzel fotoğraf değil, fotoğrafın markanıza ve hatıralarınıza ne katacağını
                da düşünüyoruz. SEO uyumlu görseller, sosyal medya formatları ve dijital pazarlama
                stratejisi — her çekim sonunda elinizde sadece "fotoğraf" değil, kullanılabilir
                bir görsel paket olur.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            <Image
              src={HERO_IMAGES.about}
              alt="Profesyonel fotoğraf stüdyosu"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Trust badges */}
        <section className="mb-16">
          <TrustBadges />
        </section>

        {/* Değerler */}
        <section className="mb-16">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Neden Biz?</h2>
            <p className="mt-3 text-muted-foreground">
              Yeniyiz ama hazırız. Modern ekipman + sanatkar bakış + dijital pazarlama bilinci =
              sizin için fark.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6">
                <Icon className="h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vizyon / Misyon */}
        <section className="mb-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-semibold">Vizyonumuz</h2>
            <p className="mt-4 text-muted-foreground">
              Kocaeli'nin en güvenilir ve yenilikçi fotoğraf stüdyosu olmak. Bireysel müşterilerimize
              hayatlarının en özel anlarını, kurumsal müşterilerimize markalarının görsel kimliğini
              tutarlı ve etkileyici bir şekilde sunmak.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-semibold">Misyonumuz</h2>
            <p className="mt-4 text-muted-foreground">
              Her çekimde modern teknolojiyi sanat ile birleştirerek, müşterilerimize sıradan bir
              fotoğraf değil, zamana direnen bir hatıra sunmak. Yerel SEO ve dijital pazarlama
              avantajını fotoğraf hizmetimize entegre etmek.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />
      </div>
    </>
  );
}
