import { requireAdmin } from "@/lib/c1907d/auth";
import { NeighborhoodForm } from "../NeighborhoodForm";

export const dynamic = "force-dynamic";

export default async function NewNeighborhoodPage() {
  const { supabase } = await requireAdmin();

  const sRes = await supabase.from("services").select("slug, name").order("sort_order");
  const services = (sRes.data ?? []) as Array<{ slug: string; name: string }>;
  const serviceOptions = services.map((s) => ({ value: s.slug, label: s.name }));

  const nRes = await supabase.from("neighborhoods").select("slug, name").order("name");
  const neighborhoods = (nRes.data ?? []) as Array<{ slug: string; name: string }>;
  const neighborhoodOptions = neighborhoods.map((n) => ({ value: n.slug, label: n.name }));

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="font-display text-2xl font-semibold">Yeni Mahalle</h1>
      <NeighborhoodForm
        originalSlug={null}
        serviceOptions={serviceOptions}
        neighborhoodOptions={neighborhoodOptions}
      />
    </div>
  );
}
