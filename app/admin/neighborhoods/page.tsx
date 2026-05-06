import Link from "next/link";
import { Plus, Edit3, ExternalLink } from "lucide-react";
import { requireAdmin } from "@/lib/admin/auth";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

interface NeighborhoodListItem {
  slug: string;
  name: string;
  district: string;
  is_published: boolean;
  updated_at: string;
}

export default async function AdminNeighborhoodsPage() {
  const { supabase } = await requireAdmin();
  const result = await supabase
    .from("neighborhoods")
    .select("slug, name, district, is_published, updated_at")
    .order("district")
    .order("sort_order");
  const rows = (result.data ?? []) as NeighborhoodListItem[];

  const grouped = rows.reduce<Record<string, NeighborhoodListItem[]>>((acc, r) => {
    (acc[r.district] ??= []).push(r);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">Mahalleler</h1>
          <p className="text-sm text-muted-foreground">{rows.length} mahalle</p>
        </div>
        <Button asChild>
          <Link href="/admin/neighborhoods/new" className="gap-2">
            <Plus className="h-4 w-4" /> Yeni Mahalle
          </Link>
        </Button>
      </div>

      {Object.entries(grouped).map(([district, list]) => (
        <section key={district}>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {district} ({list.length})
          </h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <tbody>
                {list.map((r) => (
                  <tr
                    key={`${r.district}-${r.slug}`}
                    className="border-b border-border last:border-0 hover:bg-muted/30"
                  >
                    <td className="px-4 py-3">
                      <div className="font-medium">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.slug}</div>
                    </td>
                    <td className="px-4 py-3 text-xs">
                      {r.is_published ? (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700">
                          Yayında
                        </span>
                      ) : (
                        <span className="rounded-full bg-muted px-2 py-0.5 text-muted-foreground">
                          Taslak
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-2">
                        <Link
                          href={`/bolgeler/${r.district}/${r.slug}`}
                          target="_blank"
                          className="rounded-md border border-border p-1.5 text-xs hover:bg-accent"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                        <Link
                          href={`/admin/neighborhoods/${r.slug}/edit`}
                          className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1 text-xs text-primary-foreground hover:opacity-90"
                        >
                          <Edit3 className="h-3 w-3" /> Düzenle
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
