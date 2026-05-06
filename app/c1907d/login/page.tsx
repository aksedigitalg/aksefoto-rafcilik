import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Giriş",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo?: string }>;
}) {
  const { redirectTo } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-sm space-y-6 rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="space-y-2 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded bg-zinc-900 text-sm font-bold text-white">
            A
          </div>
          <h1 className="text-lg font-semibold text-zinc-900">Yönetim Paneli</h1>
          <p className="text-xs text-zinc-500">Devam etmek için giriş yapın</p>
        </div>
        <LoginForm redirectTo={redirectTo ?? "/c1907d"} />
      </div>
    </div>
  );
}
