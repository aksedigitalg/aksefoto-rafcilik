import Link from "next/link";
import { Plus, Edit3, ExternalLink } from "lucide-react";
import { requireAdmin } from "@/lib/c1907d/auth";
import { Button } from "@/components/ui/button";

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">Sanayi Bölgeleri</h1>
          <p className="text-sm text-muted-foreground">{rows.length} bölge</p>
        </div>
        <Button asChild>
          <Link href="/c1907d/industrial-zones/new" className="gap-2">
            <Plus className="h-4 w-4" /> Yeni
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {rows.map((r) => (
          <div
            key={r.slug}
            className="rounded-xl border border-border bg-card p-4 transition hover:border-primary"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-medium">{r.full_name}</div>
                <div className="text-xs text-muted-foreground">
                  {r.name} · {r.district}
                  {!r.is_published ? " · taslak" : ""}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <Link
                  href={`/sanayi-bolgeleri/${r.slug}`}
                  target="_blank"
                  className="rounded-md border border-border p-1.5 text-xs hover:bg-accent"
                >
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href={`/c1907d/industrial-zones/${r.slug}/edit`}
                  className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-xs text-primary-foreground hover:opacity-90"
                >
                  <Edit3 className="h-3 w-3" /> Düzenle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
