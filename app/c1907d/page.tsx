import Link from "next/link";
import { MessageSquare, Briefcase, FileText, Image as ImageIcon, MapPin, Building2 } from "lucide-react";
import { requireAdmin } from "@/lib/c1907d/auth";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const { user, role, supabase } = await requireAdmin();

  // Hizli istatistikler
  const [
    { count: serviceCount },
    { count: neighborhoodCount },
    { count: blogCount },
    { count: testimonialCount },
    { count: pendingTestimonialCount },
  ] = await Promise.all([
    supabase.from("services").select("*", { count: "exact", head: true }),
    supabase.from("neighborhoods").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("testimonials").select("*", { count: "exact", head: true }),
    supabase.from("testimonials").select("*", { count: "exact", head: true }).eq("approved", false),
  ]);

  const cards = [
    {
      href: "/c1907d/testimonials",
      icon: MessageSquare,
      label: "Müşteri Yorumları",
      count: testimonialCount ?? 0,
      hint:
        (pendingTestimonialCount ?? 0) > 0
          ? `${pendingTestimonialCount} onay bekliyor`
          : "Hepsi onaylı",
      highlight: (pendingTestimonialCount ?? 0) > 0,
    },
    {
      href: "/c1907d/services",
      icon: Briefcase,
      label: "Hizmetler",
      count: serviceCount ?? 0,
      hint: "Hizmet kataloğu",
    },
    {
      href: "/c1907d/blog",
      icon: FileText,
      label: "Blog Yazıları",
      count: blogCount ?? 0,
      hint: "Yayın yönetimi",
    },
    {
      href: "/c1907d/neighborhoods",
      icon: MapPin,
      label: "Mahalleler",
      count: neighborhoodCount ?? 0,
      hint: "76 mahalle yönetimi",
    },
    {
      href: "/c1907d/industrial-zones",
      icon: Building2,
      label: "Sanayi Bölgeleri",
      count: 8,
      hint: "OSB B2B sayfaları",
    },
    {
      href: "/c1907d/gallery",
      icon: ImageIcon,
      label: "Galeri",
      count: "—",
      hint: "Görsel yönetimi",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold">Hoş geldiniz</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {user.email} olarak giriş yaptınız ({role}).
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.href}
              href={c.href}
              className={`block rounded-xl border bg-card p-5 transition hover:border-primary hover:shadow-sm ${
                c.highlight ? "border-primary/60" : "border-border"
              }`}
            >
              <div className="flex items-start justify-between">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
                <span className="font-display text-2xl font-semibold">{c.count}</span>
              </div>
              <p className="mt-3 font-medium">{c.label}</p>
              <p className="text-xs text-muted-foreground">{c.hint}</p>
            </Link>
          );
        })}
      </div>

      <div className="rounded-xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Hızlı ipuçları</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Yorum onayladığınızda en geç 60 saniye içinde sayfada görünür (ISR cache).</li>
          <li>Acil yansıma için yorum onayı sonrası "Cache'i yenile" butonunu kullanın.</li>
          <li>Hizmet/blog değişiklikleri için aynı revalidation geçerlidir.</li>
        </ul>
      </div>
    </div>
  );
}
