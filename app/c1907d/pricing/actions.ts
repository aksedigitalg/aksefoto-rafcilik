"use server";

import { revalidateTag } from "next/cache";
import { requireAdmin } from "@/lib/c1907d/auth";

interface PackageEdit {
  id: string;
  price_range: string;
}

/**
 * Toplu paket fiyatı güncelleme. Sadece price_range alanını günceller —
 * paket adı/içeriği değişmez. Hizmet edit sayfasından da düzenlenebilir.
 */
export async function bulkUpdatePackagePrices(
  edits: PackageEdit[],
): Promise<{ ok?: true; error?: string; count?: number }> {
  const { supabase } = await requireAdmin();
  let count = 0;

  for (const edit of edits) {
    if (!edit.id || edit.price_range === undefined) continue;
    const { error } = await supabase
      .from("service_packages")
      .update({ price_range: edit.price_range } as never)
      .eq("id", edit.id);
    if (error) return { error: error.message };
    count++;
  }

  revalidateTag("services");
  return { ok: true, count };
}
