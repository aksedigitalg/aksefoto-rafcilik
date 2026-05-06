"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Trash2, ChevronUp, ChevronDown, Loader2, Edit3, Check, X } from "lucide-react";
import { ImageUpload } from "@/components/c1907d/ImageUpload";
import {
  addGalleryItem,
  deleteGalleryItem,
  reorderGalleryItem,
  updateGalleryItemAlt,
} from "../actions";

interface Item {
  id: string;
  src: string;
  alt: string;
  title: string | null;
  width: number;
  height: number;
}

export function GalleryManager({
  categorySlug,
  initialItems,
}: {
  categorySlug: string;
  initialItems: Item[];
}) {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>(initialItems);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleUpload(url: string | null) {
    if (!url) return;

    startTransition(async () => {
      // Görsel boyutunu okumak için Image objesi
      const dims = await new Promise<{ width: number; height: number }>((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
        img.onerror = () => resolve({ width: 1200, height: 800 });
        img.src = url;
      });

      const result = await addGalleryItem({
        category_slug: categorySlug,
        src: url,
        alt: "Akse Fotoğrafçılık çekim örneği",
        title: null,
        width: dims.width,
        height: dims.height,
      });
      if (result.error) setError(result.error);
      else router.refresh();
    });
  }

  function handleDelete(item: Item) {
    if (!confirm("Görseli silmek istediğinize emin misiniz?")) return;
    startTransition(async () => {
      const r = await deleteGalleryItem(item.id, item.src);
      if (r.error) setError(r.error);
      else {
        setItems((prev) => prev.filter((x) => x.id !== item.id));
      }
    });
  }

  function handleReorder(item: Item, dir: "up" | "down") {
    startTransition(async () => {
      await reorderGalleryItem(item.id, dir);
      router.refresh();
    });
  }

  return (
    <div className="space-y-6">
      {/* Upload zone */}
      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 font-display text-lg font-semibold">Yeni Görsel Yükle</h2>
        <ImageUpload
          bucket="gallery"
          value={null}
          onChange={handleUpload}
          aspectRatio="video"
          pathPrefix={categorySlug}
          hint="Yüklenen görsel otomatik bu kategoriye eklenir"
        />
      </section>

      {error ? (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      {/* Items grid */}
      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-muted/20 p-10 text-center text-sm text-muted-foreground">
          Henüz görsel yok. Yukarıdan yükle.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <GalleryCard
              key={item.id}
              item={item}
              isFirst={idx === 0}
              isLast={idx === items.length - 1}
              onDelete={() => handleDelete(item)}
              onMoveUp={() => handleReorder(item, "up")}
              onMoveDown={() => handleReorder(item, "down")}
              pending={pending}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function GalleryCard({
  item,
  isFirst,
  isLast,
  onDelete,
  onMoveUp,
  onMoveDown,
  pending,
}: {
  item: Item;
  isFirst: boolean;
  isLast: boolean;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  pending: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [alt, setAlt] = useState(item.alt);
  const [title, setTitle] = useState(item.title ?? "");
  const [pendingSave, startSave] = useTransition();

  function save() {
    startSave(async () => {
      await updateGalleryItemAlt(item.id, alt, title || null);
      setEditing(false);
    });
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-[4/3] bg-muted">
        <Image src={item.src} alt={item.alt} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-3">
        {editing ? (
          <div className="space-y-2">
            <input
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              placeholder="Alt metni (SEO)"
              className="w-full rounded border border-input bg-background px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Başlık (opsiyonel)"
              className="w-full rounded border border-input bg-background px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={save}
                disabled={pendingSave}
                className="inline-flex items-center gap-1 rounded bg-primary px-2 py-1 text-xs text-primary-foreground hover:opacity-90 disabled:opacity-50"
              >
                <Check className="h-3 w-3" /> Kaydet
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-xs hover:bg-accent"
              >
                <X className="h-3 w-3" /> İptal
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="text-xs">
              <span className="text-muted-foreground">Alt: </span>
              <span className="line-clamp-1">{item.alt}</span>
            </div>
            {item.title ? (
              <div className="text-xs">
                <span className="text-muted-foreground">Title: </span>
                <span className="line-clamp-1">{item.title}</span>
              </div>
            ) : null}
            <div className="text-xs text-muted-foreground">
              {item.width}×{item.height}
            </div>
          </>
        )}

        <div className="flex items-center justify-between gap-2 border-t border-border pt-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onMoveUp}
              disabled={isFirst || pending}
              className="rounded p-1 hover:bg-accent disabled:opacity-30"
              title="Yukarı taşı"
            >
              <ChevronUp className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={onMoveDown}
              disabled={isLast || pending}
              className="rounded p-1 hover:bg-accent disabled:opacity-30"
              title="Aşağı taşı"
            >
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex items-center gap-1">
            {!editing ? (
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="rounded p-1 hover:bg-accent"
                title="Düzenle"
              >
                <Edit3 className="h-3.5 w-3.5" />
              </button>
            ) : null}
            <button
              type="button"
              onClick={onDelete}
              disabled={pending}
              className="rounded p-1 text-destructive hover:bg-destructive/10 disabled:opacity-30"
              title="Sil"
            >
              {pending ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Trash2 className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
