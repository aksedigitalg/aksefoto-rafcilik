import Link from "next/link";
import { LogOut } from "lucide-react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
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
