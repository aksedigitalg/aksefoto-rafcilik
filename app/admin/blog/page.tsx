import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";

export const dynamic = "force-dynamic";

interface BlogListItem {
  slug: string;
  title: string;
  category: string;
  published_at: string;
  is_published: boolean;
  reading_time: number;
}

export default async function AdminBlogPage() {
  const { supabase } = await requireAdmin();
  const result = await supabase
    .from("blog_posts")
    .select("slug, title, category, published_at, is_published, reading_time")
    .order("published_at", { ascending: false });
  const rows = (result.data ?? []) as BlogListItem[];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Blog Yazıları</h1>
        <p className="text-sm text-muted-foreground">
          {rows.length} yazı — düzenleme UI'ı sonraki sürümde. İçerik
          düzenlemek için Supabase Table Editor'ü kullanın.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted/40 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Başlık</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Yayın</th>
              <th className="px-4 py-3">Okuma</th>
              <th className="px-4 py-3 text-right">Görüntüle</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.slug} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <div className="font-medium">{r.title}</div>
                  <div className="text-xs text-muted-foreground">{r.slug}</div>
                </td>
                <td className="px-4 py-3 text-xs">{r.category}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  {new Date(r.published_at).toLocaleDateString("tr-TR")}
                  {!r.is_published ? " (taslak)" : ""}
                </td>
                <td className="px-4 py-3 text-xs">{r.reading_time} dk</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/blog/${r.slug}`}
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
