import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "./types";

/**
 * Auth session refresh middleware.
 * Her request'te access token'i kontrol eder, gerekirse yeniler.
 * /c1907d/* ve auth-required route'lar icin auth gate'i de burada.
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    // Env vars yoksa middleware'i sessiz gecistir (build/dev'de hata vermesin).
    return supabaseResponse;
  }

  const supabase = createServerClient<Database>(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options),
        );
      },
    },
  });

  // IMPORTANT: getUser() SUPABASE token'i her request'te dogrular (sunucuya
  // dogrulama gonderir). getSession() yerel storage'a guvenir, daha az guvenli.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Admin gate: /c1907d/* uzerine giden istek auth'lu degilse login'e at.
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/c1907d") && pathname !== "/c1907d/login") {
    if (!user) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/c1907d/login";
      loginUrl.searchParams.set("redirectTo", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Login sayfasinda zaten oturum varsa admin'e yonlendir.
  if (pathname === "/c1907d/login" && user) {
    const adminUrl = request.nextUrl.clone();
    adminUrl.pathname = "/c1907d";
    return NextResponse.redirect(adminUrl);
  }

  return supabaseResponse;
}
