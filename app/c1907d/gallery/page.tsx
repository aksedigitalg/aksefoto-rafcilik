import Link from "next/link";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { requireAdmin } from "@/lib/c1907d/auth";

export const dynamic = "force-dynamic";

interface CatRow {
  slug: string;
  name: string;
  is_published: boolean;
}

interface CountRow {
  category_slug: string;
}

interface FirstImageRow {
  category_slug: string;
  src: string;
}

export default async function AdminGalleryPage() {
  const { supabase } = await requireAdmin();

  const cRes = await supabase
    .from("gallery_categories")
    .select("slug, name, is_published")
    .order("sort_order");
  const cats = (cRes.data ?? []) as CatRow[];

  const itemsRes = await supabase
    .from("gallery_items")
    .select("category_slug, src")
    .order("sort_order");
  const items = (itemsRes.data ?? []) as FirstImageRow[];

  const counts = items.reduce<Record<string, number>>((acc, r) => {
    acc[r.category_slug] = (acc[r.category_slug] ?? 0) + 1;
    return acc;
  }, {});
  const firstSrc = items.reduce<Record<string, string>>((acc, r) => {
    if (!acc[r.category_slug]) acc[r.category_slug] = r.src;
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Galeri Yönetimi</h1>
        <p className="text-sm text-muted-foreground">
          {cats.length} kategori. Bir kategoriye tıkla, görsel yükle veya yönet.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {cats.map((c) => {
          const count = counts[c.slug] ?? 0;
          const cover = firstSrc[c.slug];
          return (
            <Link
              key={c.slug}
              href={`/c1907d/gallery/${c.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary hover:shadow-sm"
            >
              <div className="relative aspect-video bg-muted">
                {cover ? (
                  <Image
                    src={cover}
                    alt={c.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <ImagePlus className="h-8 w-8" />
                  </div>
                )}
              </div>
              <div className="p-3">
                <div className="font-medium group-hover:text-primary">{c.name}</div>
                <div className="text-xs text-muted-foreground">
                  {count} görsel
                  {!c.is_published ? " · taslak" : ""}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
