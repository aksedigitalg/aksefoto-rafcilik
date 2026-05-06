import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";

export const dynamic = "force-dynamic";

interface ZoneListItem {
  slug: string;
  name: string;
  full_name: string;
  district: string;
  is_published: boolean;
}

export default async function AdminIndustrialZonesPage() {
  const { supabase } = await requireAdmin();
  const result = await supabase
    .from("industrial_zones")
    .select("slug, name, full_name, district, is_published")
    .order("sort_order");
  const rows = (result.data ?? []) as ZoneListItem[];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Sanayi Bölgeleri</h1>
        <p className="text-sm text-muted-foreground">
          {rows.length} OSB — düzenleme UI'ı sonraki sürümde.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {rows.map((r) => (
          <Link
            key={r.slug}
            href={`/sanayi-bolgeleri/${r.slug}`}
            target="_blank"
            className="rounded-xl border border-border bg-card p-4 transition hover:border-primary"
          >
            <div className="font-medium">{r.full_name}</div>
            <div className="text-xs text-muted-foreground">
              {r.name} • {r.district}
              {!r.is_published ? " • taslak" : ""}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
