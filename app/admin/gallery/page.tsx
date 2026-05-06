import { requireAdmin } from "@/lib/admin/auth";

export const dynamic = "force-dynamic";

interface GalleryCategoryItem {
  slug: string;
  name: string;
  is_published: boolean;
}

export default async function AdminGalleryPage() {
  const { supabase } = await requireAdmin();
  const result = await supabase
    .from("gallery_categories")
    .select("slug, name, is_published")
    .order("sort_order");
  const cats = (result.data ?? []) as GalleryCategoryItem[];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Galeri</h1>
        <p className="text-sm text-muted-foreground">
          {cats.length} kategori — görsel yükleme UI'ı sonraki sürümde
          (Supabase Storage entegrasyonu gerekli).
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {cats.map((c) => (
          <div key={c.slug} className="rounded-xl border border-border bg-card p-4">
            <div className="font-medium">{c.name}</div>
            <div className="text-xs text-muted-foreground">
              {c.slug} {!c.is_published ? "• taslak" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
