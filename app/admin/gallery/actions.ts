"use server";

import { revalidateTag } from "next/cache";
import { requireAdmin } from "@/lib/admin/auth";
import { deleteImage } from "../_actions/storage";

const TAG = "gallery";

export async function addGalleryItem(payload: {
  category_slug: string;
  src: string;
  alt: string;
  title: string | null;
  width: number;
  height: number;
}) {
  const { supabase } = await requireAdmin();

  const max = await supabase
    .from("gallery_items")
    .select("sort_order")
    .eq("category_slug", payload.category_slug)
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();
  const nextOrder = ((max.data as { sort_order?: number } | null)?.sort_order ?? -1) + 1;

  const { error } = await supabase
    .from("gallery_items")
    .insert({ ...payload, sort_order: nextOrder } as never);
  if (error) return { error: error.message };
  revalidateTag(TAG);
  return { ok: true };
}

export async function deleteGalleryItem(id: string, src: string) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("gallery_items").delete().eq("id", id);
  if (error) return { error: error.message };
  // Storage'dan dosyayı da sil
  if (src) await deleteImage(src, "gallery");
  revalidateTag(TAG);
  return { ok: true };
}

export async function updateGalleryItemAlt(id: string, alt: string, title: string | null) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase
    .from("gallery_items")
    .update({ alt, title } as never)
    .eq("id", id);
  if (error) return { error: error.message };
  revalidateTag(TAG);
  return { ok: true };
}

export async function reorderGalleryItem(id: string, direction: "up" | "down") {
  const { supabase } = await requireAdmin();
  const cur = await supabase
    .from("gallery_items")
    .select("id, category_slug, sort_order")
    .eq("id", id)
    .maybeSingle();
  const item = cur.data as { id: string; category_slug: string; sort_order: number } | null;
  if (!item) return { error: "Bulunamadı" };

  const op = direction === "up" ? "lt" : "gt";
  const order = direction === "up" ? "desc" : "asc";

  const sib = await supabase
    .from("gallery_items")
    .select("id, sort_order")
    .eq("category_slug", item.category_slug)
    [op === "lt" ? "lt" : "gt"]("sort_order", item.sort_order)
    .order("sort_order", { ascending: order === "asc" })
    .limit(1)
    .maybeSingle();
  const sibling = sib.data as { id: string; sort_order: number } | null;
  if (!sibling) return { ok: true };

  // Swap
  await supabase
    .from("gallery_items")
    .update({ sort_order: sibling.sort_order } as never)
    .eq("id", item.id);
  await supabase
    .from("gallery_items")
    .update({ sort_order: item.sort_order } as never)
    .eq("id", sibling.id);

  revalidateTag(TAG);
  return { ok: true };
}
