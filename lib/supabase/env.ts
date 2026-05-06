/**
 * Supabase env durumu kontrol helper'i.
 *
 * Env vars yokken (Supabase henuz kurulmamissa) admin sayfalari throw etmek
 * yerine "kurulum gerekli" mesaji gostermeli. Bu helper o kontrol icin.
 */

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export function isSupabaseAdminConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}
