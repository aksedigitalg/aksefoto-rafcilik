/**
 * Admin user olusturucu.
 *
 * - Supabase Auth Admin API ile yeni user create (auto-confirm)
 * - admin_profiles tablosuna 'admin' rol ekle
 *
 * Kullanim:
 *   npm run admin:create -- info@aksedigital.com <opsiyonel-sifre>
 *
 * Sifre verilmezse rastgele guvenli sifre uretir ve ekrana yazar.
 */

import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { randomBytes } from "node:crypto";

config({ path: ".env.local" });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("❌ Eksik env vars (.env.local)");
  process.exit(1);
}

function generatePassword(): string {
  // 16 karakter, base64 — guvenli rastgele
  return (
    randomBytes(12).toString("base64").replace(/[+/=]/g, "").slice(0, 14) + "1!"
  );
}

async function main() {
  const args = process.argv.slice(2);
  const email = args[0] ?? "info@aksedigital.com";
  const password = args[1] ?? generatePassword();
  const fullName = args[2] ?? "Akse Fotoğrafçılık";

  console.log(`\n🔐 Creating admin user: ${email}`);

  const supabase = createClient(url!, serviceKey!, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  // 1. Supabase Auth user create
  const { data: createData, error: createErr } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName },
  });

  let userId: string;

  if (createErr) {
    // User zaten varsa, mevcut user'i kullan
    if (createErr.message.includes("already") || createErr.message.includes("exists")) {
      console.log("  ⚠️  User zaten var, mevcut user kullanilacak");
      const { data: listData } = await supabase.auth.admin.listUsers();
      const existing = listData?.users.find((u) => u.email === email);
      if (!existing) {
        console.error("❌ User bulunamadi");
        process.exit(1);
      }
      userId = existing.id;
    } else {
      console.error("❌ Auth create error:", createErr.message);
      process.exit(1);
    }
  } else {
    userId = createData.user!.id;
    console.log(`  ✓ Auth user created: ${userId}`);
  }

  // 2. admin_profiles upsert
  const { error: profileErr } = await supabase
    .from("admin_profiles")
    .upsert({ user_id: userId, role: "admin", full_name: fullName });

  if (profileErr) {
    console.error("❌ admin_profiles error:", profileErr.message);
    process.exit(1);
  }
  console.log(`  ✓ admin_profiles role=admin`);

  console.log("\n✅ Admin kullanici hazir!\n");
  console.log("=".repeat(60));
  console.log(`  Email   : ${email}`);
  console.log(`  Sifre   : ${password}`);
  console.log(`  User ID : ${userId}`);
  console.log("=".repeat(60));
  console.log("\nGiris: https://aksefotograf.com/c1907d/login");
  console.log("       (local: http://localhost:3000/c1907d/login)\n");
  console.log("⚠️  Sifreyi guvenli bir yere kaydet. Degistirmek icin:");
  console.log("    Supabase Dashboard -> Authentication -> Users -> ... menu -> Reset");
}

main().catch((err) => {
  console.error("❌ Hata:", err);
  process.exit(1);
});
