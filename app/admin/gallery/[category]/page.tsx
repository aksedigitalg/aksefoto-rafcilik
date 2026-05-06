import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { requireAdmin } from "@/lib/admin/auth";
import { GalleryManager } from "./GalleryManager";
import type { GalleryItemRow } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function GalleryCategoryAdminPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const { supabase } = await requireAdmin();

  const cRes = await supabase
    .from("gallery_categories")
    .select("*")
    .eq("slug", category)
    .maybeSingle();
  if (!cRes.data) notFound();
  const cat = cRes.data as { slug: string; name: string };

  const iRes = await supabase
    .from("gallery_items")
    .select("*")
    .eq("category_slug", category)
    .order("sort_order");
  const items = (iRes.data ?? []) as GalleryItemRow[];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin/gallery"
            className="mb-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" /> Tüm Kategoriler
          </Link>
          <h1 className="font-display text-2xl font-semibold">{cat.name}</h1>
          <p className="text-sm text-muted-foreground">
            {items.length} görsel · /{cat.slug}
          </p>
        </div>
        <Link
          href={`/galeri/${cat.slug}`}
          target="_blank"
          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
        >
          <ExternalLink className="h-3.5 w-3.5" /> Sitede Aç
        </Link>
      </div>

      <GalleryManager
        categorySlug={cat.slug}
        initialItems={items.map((i) => ({
          id: i.id,
          src: i.src,
          alt: i.alt,
          title: i.title,
          width: i.width,
          height: i.height,
        }))}
      />
    </div>
  );
}
