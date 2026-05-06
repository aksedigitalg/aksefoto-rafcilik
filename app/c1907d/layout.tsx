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
  Tag,
  ExternalLink,
} from "lucide-react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { signOut } from "./login/actions";

export const metadata = {
  title: "Yönetim Paneli",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const NAV: Array<{
  href: string;
  label: string;
  icon: typeof LayoutDashboard;
  group?: string;
}> = [
  { href: "/c1907d", label: "Genel Bakış", icon: LayoutDashboard, group: "Ana" },
  { href: "/c1907d/services", label: "Hizmetler", icon: Briefcase, group: "İçerik" },
  { href: "/c1907d/blog", label: "Blog", icon: FileText, group: "İçerik" },
  { href: "/c1907d/neighborhoods", label: "Mahalleler", icon: MapPin, group: "İçerik" },
  { href: "/c1907d/industrial-zones", label: "Sanayi Bölgeleri", icon: Building2, group: "İçerik" },
  { href: "/c1907d/gallery", label: "Galeri", icon: ImageIcon, group: "Medya" },
  { href: "/c1907d/pricing", label: "Fiyat Listesi", icon: Tag, group: "Yönetim" },
  { href: "/c1907d/testimonials", label: "Yorumlar", icon: MessageSquare, group: "Yönetim" },
  { href: "/c1907d/settings", label: "Site Ayarları", icon: Settings, group: "Yönetim" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isSupabaseConfigured()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
        <div className="w-full max-w-lg space-y-4 rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-zinc-700" />
            <h1 className="text-lg font-semibold text-zinc-900">Kurulum Bekleniyor</h1>
          </div>
          <p className="text-sm text-zinc-600">
            Supabase bağlantısı yapılmamış.
          </p>
        </div>
      </div>
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <div className="font-sans text-zinc-900">{children}</div>
      </div>
    );
  }

  const grouped = NAV.reduce<Record<string, typeof NAV>>((acc, item) => {
    const k = item.group ?? "Ana";
    (acc[k] ??= []).push(item);
    return acc;
  }, {});

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans text-zinc-900 antialiased">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-zinc-200 bg-white lg:flex">
        <div className="flex h-14 items-center gap-2 border-b border-zinc-200 px-5">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-zinc-900 text-xs font-bold text-white">
            A
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">Akse</div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-500">Yönetim</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {Object.entries(grouped).map(([group, items]) => (
            <div key={group} className="mb-5">
              <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                {group}
              </div>
              <div className="space-y-0.5">
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                    >
                      <Icon className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-zinc-200 p-3">
          <div className="mb-2 truncate px-3 text-xs text-zinc-500">{user.email}</div>
          <form action={signOut}>
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
            >
              <LogOut className="h-4 w-4 text-zinc-400" />
              Çıkış Yap
            </button>
          </form>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-zinc-200 bg-white/80 px-4 backdrop-blur lg:px-8">
          <div className="lg:hidden">
            <Link href="/c1907d" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-zinc-900 text-xs font-bold text-white">
                A
              </div>
              <span className="text-sm font-semibold">Yönetim</span>
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
            >
              <ExternalLink className="h-3 w-3" />
              Siteyi Aç
            </Link>
          </div>
        </header>

        <nav className="flex gap-1 overflow-x-auto border-b border-zinc-200 bg-white px-4 py-2 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs text-zinc-600 hover:bg-zinc-100"
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
