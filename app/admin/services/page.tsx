import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";

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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Hizmetler</h1>
        <p className="text-sm text-muted-foreground">
          {rows.length} hizmet — düzenleme UI'ı sonraki sürümde. Şimdilik
          listeleme + yayın durumu görünür. İçerik düzenlemek için Supabase
          Dashboard SQL Editor veya Table Editor'ü kullanın.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted/40 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Hizmet</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Yayında</th>
              <th className="px-4 py-3">Son Güncelleme</th>
              <th className="px-4 py-3 text-right">Görüntüle</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.slug} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.slug}</div>
                </td>
                <td className="px-4 py-3 text-xs">{r.category}</td>
                <td className="px-4 py-3">
                  {r.is_published ? (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">
                      Yayında
                    </span>
                  ) : (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      Taslak
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  {new Date(r.updated_at).toLocaleDateString("tr-TR")}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/hizmetler/${r.slug}`}
                    target="_blank"
                    className="rounded-md border border-border px-2 py-1 text-xs hover:bg-accent"
                  >
                    Sitede Aç
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
