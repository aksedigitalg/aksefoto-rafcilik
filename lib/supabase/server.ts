import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./types";

/**
 * Server-side Supabase clients.
 *
 * 3 ayri client tipi:
 *   - createSupabaseServerClient(): kullanicinin auth oturumuyla
 *     (cookie'den) sorgu calistirir. RLS uygulanir. Server Components,
 *     Route Handlers, Server Actions icin.
 *   - createSupabaseAnonReadClient(): cookie KULLANMAZ, anon key ile
 *     yalnizca public okumalar icin. ISR/SSG'de kullanilmali (Server Component
 *     icinde cookies() okumak dynamic rendering tetikler — biz statik sayfa
 *     uretmek istiyoruz).
 *   - createSupabaseAdminClient(): service_role key kullanir, RLS bypass eder.
 *     Sadece guvenilir server-side tarafta (Route Handler / Server Action),
 *     ASLA client'a expose etmeyin.
 */

function getEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      "Supabase env vars eksik (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY).",
    );
  }
  return { url, anonKey };
}

/**
 * Cookie-bound server client (auth oturumu okur/yazar).
 * Server Component icinde cagirildiginda dynamic rendering'e zorlar.
 */
export async function createSupabaseServerClient() {
  const { url, anonKey } = getEnv();
  const cookieStore = await cookies();

  return createServerClient<Database>(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // Server Component'ten cagirilirsa setAll cookie modifikasyonu
          // yapamaz; refresh token guncellemesi middleware'de yapilir.
        }
      },
    },
  });
}

/**
 * Stateless anon read client. Cookie'ye dokunmaz, dolayisiyla SSG/ISR ile
 * uyumlu. SADECE public-readable veri icin kullanin (RLS public_read policy
 * ile korunan select sorgulari).
 */
export function createSupabaseAnonReadClient() {
  const { url, anonKey } = getEnv();
  return createServerClient<Database>(url, anonKey, {
    cookies: {
      getAll() {
        return [];
      },
      setAll() {
        // no-op
      },
    },
  });
}

/**
 * Service role client (RLS bypass). Sadece TRUSTED server taraf:
 *   - Admin operasyonlari (otomasyon)
 *   - Route Handler icinde ozel mutations
 * service_role key client'a kacarsa tum DB ele gecer — DIKKAT!
 */
export function createSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "Supabase admin env vars eksik (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY). .env.local dosyanizi kontrol edin.",
    );
  }
  return createServerClient<Database>(url, serviceKey, {
    cookies: {
      getAll() {
        return [];
      },
      setAll() {
        // no-op
      },
    },
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
