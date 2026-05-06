"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./types";

/**
 * Browser-side Supabase client.
 * Sadece Client Components icinde kullanin (lazim oldukca).
 *
 * Public reads icin genelde server-side fetch kullanilmali (lib/db/*.ts).
 * Bu client esas olarak admin UI / interactive auth flows icin.
 */
export function createSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      "Supabase env vars eksik (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY). .env.local dosyanizi kontrol edin.",
    );
  }
  return createBrowserClient<Database>(url, anonKey);
}
