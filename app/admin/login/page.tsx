import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Giriş",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo?: string }>;
}) {
  const { redirectTo } = await searchParams;

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6 rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="space-y-1 text-center">
          <h1 className="font-display text-2xl font-semibold">Admin Giriş</h1>
          <p className="text-sm text-muted-foreground">
            Akse Fotoğrafçılık yönetim paneli
          </p>
        </div>
        <LoginForm redirectTo={redirectTo ?? "/admin"} />
      </div>
    </div>
  );
}
