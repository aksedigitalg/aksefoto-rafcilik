import { requireAdmin } from "@/lib/c1907d/auth";
import { ZoneForm } from "../ZoneForm";

export const dynamic = "force-dynamic";

export default async function NewZonePage() {
  await requireAdmin();
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="font-display text-2xl font-semibold">Yeni Sanayi Bölgesi</h1>
      <ZoneForm originalSlug={null} />
    </div>
  );
}
