import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/**
 * Admin route guard. Server Component / Server Action icinde cagirin.
 * Env yoksa /admin/login'e at (layout'ta kurulum mesaji cikar).
 * Auth yoksa /admin/login'e redirect eder.
 * admin_profiles'ta admin/editor rolu yoksa unauthorized.
 */
export async function requireAdmin() {
  // Env yoksa client olusturma — sadece login'e redirect et,
  // layout zaten "kurulum gerekli" mesajini gosterir.
  if (!isSupabaseConfigured()) {
    redirect("/admin/login");
  }
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const profileResult = await supabase
    .from("admin_profiles")
    .select("role")
    .eq("user_id", user.id)
    .maybeSingle();
  const profile = profileResult.data as { role: "admin" | "editor" | "viewer" } | null;

  if (!profile || !["admin", "editor"].includes(profile.role)) {
    redirect("/admin/login?error=unauthorized");
  }
  return { user, role: profile.role, supabase };
}
