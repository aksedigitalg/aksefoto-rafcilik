import Link from "next/link";
import { LogOut, AlertCircle } from "lucide-react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { signOut } from "./login/actions";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

// Admin tarafini her zaman dynamic render et — auth durumu degisiyor.
export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Supabase env vars yoksa kurulum mesaji goster (throw degil).
  if (!isSupabaseConfigured()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/20 px-4">
        <div className="w-full max-w-lg space-y-4 rounded-xl border border-amber-300 bg-amber-50 p-8 text-amber-900 shadow-sm">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6" />
            <h1 className="font-display text-xl font-semibold">Supabase Kurulumu Bekleniyor</h1>
          </div>
          <p className="text-sm">
            Admin paneli kullanilabilmesi icin once Supabase project kurulumu yapilmalidir.
            Detayli adim adim kilavuz icin <code className="rounded bg-amber-100 px-1.5 py-0.5 text-xs">SUPABASE_SETUP.md</code> dosyasina bakin.
          </p>
          <div className="rounded-lg border border-amber-200 bg-white/60 p-3 text-xs">
            <p className="mb-1 font-medium">Eksik environment variables:</p>
            <ul className="list-inside list-disc space-y-0.5">
              <li>NEXT_PUBLIC_SUPABASE_URL</li>
              <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
              <li>SUPABASE_SERVICE_ROLE_KEY (sadece local seed icin)</li>
            </ul>
            <p className="mt-2">Local: <code>.env.local</code> dosyasi. Vercel: Settings → Environment Variables.</p>
          </div>
          <Link href="/" className="inline-block text-sm underline">
            ← Ana sayfaya don
          </Link>
        </div>
      </div>
    );
  }

  // Login sayfasi kendi layout'una sahip degil — bu layout her admin route'a uygulanir.
  // /admin/login icin auth gate'i middleware halleder; bu layout'ta tekrar kontrol etmeyiz.
  // Diger admin sayfalarinda user yoksa login'e at.
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-muted/20">
      {user ? (
        <header className="border-b border-border bg-background">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-6">
              <Link href="/admin" className="font-display text-lg font-semibold">
                Akse Admin
              </Link>
              <nav className="flex items-center gap-4 text-sm text-muted-foreground">
                <Link href="/admin" className="hover:text-foreground">
                  Dashboard
                </Link>
                <Link href="/admin/testimonials" className="hover:text-foreground">
                  Yorumlar
                </Link>
                <Link href="/admin/services" className="hover:text-foreground">
                  Hizmetler
                </Link>
                <Link href="/admin/blog" className="hover:text-foreground">
                  Blog
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">{user.email}</span>
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
          </div>
        </header>
      ) : null}

      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
