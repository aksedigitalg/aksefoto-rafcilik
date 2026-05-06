"use server";

import { requireAdmin } from "@/lib/admin/auth";

const VALID_BUCKETS = ["gallery", "services", "blog", "branding"] as const;
type Bucket = (typeof VALID_BUCKETS)[number];

export async function uploadImage(
  formData: FormData,
): Promise<{ url?: string; error?: string }> {
  const { supabase } = await requireAdmin();

  const file = formData.get("file") as File | null;
  const bucket = formData.get("bucket") as string | null;
  const pathPrefix = (formData.get("pathPrefix") as string | null) ?? "";

  if (!file) return { error: "Dosya bulunamadı" };
  if (!bucket || !VALID_BUCKETS.includes(bucket as Bucket)) {
    return { error: "Geçersiz bucket" };
  }
  if (!file.type.startsWith("image/")) return { error: "Sadece görsel kabul edilir" };
  if (file.size > 10 * 1024 * 1024) return { error: "Dosya 10MB'dan büyük olamaz" };

  // Slug-friendly filename
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const path = pathPrefix ? `${pathPrefix.replace(/\/+$/, "")}/${safeName}` : safeName;

  const arrayBuffer = await file.arrayBuffer();

  const { error: uploadErr } = await supabase.storage
    .from(bucket)
    .upload(path, arrayBuffer, {
      contentType: file.type,
      cacheControl: "31536000",
      upsert: false,
    });

  if (uploadErr) return { error: uploadErr.message };

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return { url: data.publicUrl };
}

export async function deleteImage(
  publicUrl: string,
  bucket: Bucket,
): Promise<{ ok?: true; error?: string }> {
  const { supabase } = await requireAdmin();

  // public URL: https://xxxx.supabase.co/storage/v1/object/public/<bucket>/<path>
  const marker = `/storage/v1/object/public/${bucket}/`;
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) return { error: "URL bucket'a uymuyor" };

  const path = publicUrl.slice(idx + marker.length);
  const { error } = await supabase.storage.from(bucket).remove([path]);
  if (error) return { error: error.message };
  return { ok: true };
}
