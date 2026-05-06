import Link from "next/link";
import { Plus, Edit3, ExternalLink } from "lucide-react";
import { requireAdmin } from "@/lib/admin/auth";
import { Button } from "@/components/ui/button";

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">Blog Yazıları</h1>
          <p className="text-sm text-muted-foreground">{rows.length} yazı</p>
        </div>
        <Button asChild>
          <Link href="/admin/blog/new" className="gap-2">
            <Plus className="h-4 w-4" /> Yeni Yazı
          </Link>
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted/40 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Başlık</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Yayın</th>
              <th className="px-4 py-3">Okuma</th>
              <th className="px-4 py-3 text-right">Eylem</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.slug} className="border-b border-border last:border-0 hover:bg-muted/30">
                <td className="px-4 py-3">
                  <div className="font-medium">{r.title}</div>
                  <div className="text-xs text-muted-foreground">{r.slug}</div>
                </td>
                <td className="px-4 py-3 text-xs">{r.category}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  {new Date(r.published_at).toLocaleDateString("tr-TR")}
                  {!r.is_published ? " · Taslak" : ""}
                </td>
                <td className="px-4 py-3 text-xs">{r.reading_time} dk</td>
                <td className="px-4 py-3 text-right">
                  <div className="inline-flex items-center gap-2">
                    <Link
                      href={`/blog/${r.slug}`}
                      target="_blank"
                      className="rounded-md border border-border p-1.5 text-xs hover:bg-accent"
                      title="Sitede aç"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                    <Link
                      href={`/admin/blog/${r.slug}/edit`}
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
    </div>
  );
}
