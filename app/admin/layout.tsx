import Link from "next/link";
import {
  LogOut,
  AlertCircle,
  LayoutDashboard,
  Briefcase,
  FileText,
  MapPin,
  Building2,
  Image as ImageIcon,
  MessageSquare,
  Settings,
} from "lucide-react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { signOut } from "./login/actions";

export const metadata = {
  title: "Akse Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/services", label: "Hizmetler", icon: Briefcase },
  { href: "/admin/blog", label: "Blog Yazıları", icon: FileText },
  { href: "/admin/neighborhoods", label: "Mahalleler", icon: MapPin },
  { href: "/admin/industrial-zones", label: "Sanayi Bölgeleri", icon: Building2 },
  { href: "/admin/gallery", label: "Galeri", icon: ImageIcon },
  { href: "/admin/testimonials", label: "Yorumlar", icon: MessageSquare },
  { href: "/admin/settings", label: "Site Ayarları", icon: Settings },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isSupabaseConfigured()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/20 px-4">
        <div className="w-full max-w-lg space-y-4 rounded-xl border border-amber-300 bg-amber-50 p-8 text-amber-900 shadow-sm">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6" />
            <h1 className="font-display text-xl font-semibold">Supabase Kurulumu Bekleniyor</h1>
          </div>
          <p className="text-sm">
            Admin paneli kullanılabilmesi için Supabase kurulumu yapılmalı.
            Detay için <code className="rounded bg-amber-100 px-1.5 py-0.5 text-xs">SUPABASE_SETUP.md</code>.
          </p>
          <Link href="/" className="inline-block text-sm underline">
            ← Ana sayfaya dön
          </Link>
        </div>
      </div>
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // /admin/login → user yokken login formu doğrudan render edilsin
  if (!user) {
    return <div className="min-h-screen bg-muted/20">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 border-r border-border bg-background lg:block">
        <div className="flex h-16 items-center border-b border-border px-5">
          <Link href="/admin" className="font-display text-lg font-semibold">
            Akse Admin
          </Link>
        </div>
        <nav className="space-y-0.5 p-3">
          {NAV.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
              >
                <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-background px-4 lg:px-8">
          <div className="lg:hidden">
            <Link href="/admin" className="font-display text-lg font-semibold">
              Akse Admin
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
            >
              Siteyi Aç ↗
            </Link>
            <span className="hidden text-sm text-muted-foreground md:inline">{user.email}</span>
            <form action={signOut}>
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent"
              >
                <LogOut className="h-3.5 w-3.5" />
                Çıkış
              </button>
            </form>
          </div>
        </header>

        <nav className="flex gap-1 overflow-x-auto border-b border-border bg-background px-4 py-2 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
