import Link from "next/link";
import { Plus, Edit3, ExternalLink, Search } from "lucide-react";
import { requireAdmin } from "@/lib/c1907d/auth";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

interface ServiceListItem {
  slug: string;
  name: string;
  category: string;
  is_published: boolean;
  updated_at: string;
}

export default async function AdminServicesPage() {
  const { supabase } = await requireAdmin();
  const result = await supabase
    .from("services")
    .select("slug, name, category, is_published, updated_at")
    .order("sort_order");
  const rows = (result.data ?? []) as ServiceListItem[];

  const grouped = rows.reduce<Record<string, ServiceListItem[]>>((acc, r) => {
    (acc[r.category] ??= []).push(r);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">Hizmetler</h1>
          <p className="text-sm text-muted-foreground">
            {rows.length} hizmet — kart kart düzenle, yeni ekle, yayından kaldır.
          </p>
        </div>
        <Button asChild>
          <Link href="/c1907d/services/new" className="gap-2">
            <Plus className="h-4 w-4" />
            Yeni Hizmet
          </Link>
        </Button>
      </div>

      {Object.entries(grouped).map(([category, list]) => (
        <section key={category}>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {category} ({list.length})
          </h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <tbody>
                {list.map((r) => (
                  <tr
                    key={r.slug}
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
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {new Date(r.updated_at).toLocaleDateString("tr-TR")}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-2">
                        <Link
                          href={`/hizmetler/${r.slug}`}
                          target="_blank"
                          className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs hover:bg-accent"
                          title="Sitede aç"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                        <Link
                          href={`/c1907d/services/${r.slug}/edit`}
                          className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1 text-xs text-primary-foreground hover:opacity-90"
                        >
                          <Edit3 className="h-3 w-3" />
                          Düzenle
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
