/**
 * Migration runner. supabase/migrations/ altındaki SQL dosyalarını
 * Postgres'e push eder.
 *
 * Calistirma:
 *   npm run db:migrate
 *
 * Env:
 *   SUPABASE_DB_HOST, _PORT, _USER, _PASSWORD, _NAME (.env.local)
 */

import { config } from "dotenv";
import { Client } from "pg";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

config({ path: ".env.local" });

const host = process.env.SUPABASE_DB_HOST;
const port = parseInt(process.env.SUPABASE_DB_PORT ?? "5432", 10);
const user = process.env.SUPABASE_DB_USER;
const password = process.env.SUPABASE_DB_PASSWORD;
const database = process.env.SUPABASE_DB_NAME ?? "postgres";

if (!host || !user || !password) {
  console.error("❌ Eksik DB env vars (.env.local'da SUPABASE_DB_HOST/USER/PASSWORD)");
  process.exit(1);
}

async function main() {
  const client = new Client({
    host,
    port,
    user,
    password,
    database,
    ssl: { rejectUnauthorized: false },
  });

  console.log(`🔌 Connecting to ${host}:${port}/${database} as ${user}...`);
  await client.connect();
  console.log("✓ Connected\n");

  const dir = join(process.cwd(), "supabase", "migrations");
  const files = readdirSync(dir)
    .filter((f) => f.endsWith(".sql"))
    .sort();

  if (files.length === 0) {
    console.error("❌ supabase/migrations/ bos");
    await client.end();
    process.exit(1);
  }

  for (const file of files) {
    const path = join(dir, file);
    const sql = readFileSync(path, "utf-8");
    console.log(`▶ Running ${file} (${sql.length} chars)...`);
    try {
      await client.query(sql);
      console.log(`  ✓ ${file} OK\n`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      // Already-exists hatalarini idempotent kabul et
      if (
        msg.includes("already exists") ||
        msg.includes("duplicate")
      ) {
        console.log(`  ⚠️  ${file}: ${msg.split("\n")[0]} (idempotent skip)\n`);
        continue;
      }
      console.error(`  ❌ ${file}: ${msg}\n`);
      await client.end();
      process.exit(1);
    }
  }

  await client.end();
  console.log("✅ Tum migration'lar tamamlandi.");
}

main().catch((err) => {
  console.error("❌ Migration hatasi:", err);
  process.exit(1);
});
