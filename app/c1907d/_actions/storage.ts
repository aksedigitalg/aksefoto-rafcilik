"use server";

import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { requireAdmin } from "@/lib/c1907d/auth";
import { getR2Client, r2PublicUrl, r2KeyFromPublicUrl, isR2Configured } from "@/lib/r2/client";

const VALID_BUCKETS = ["gallery", "services", "blog", "branding"] as const;
type Bucket = (typeof VALID_BUCKETS)[number];

/**
 * Görsel yükleme:
 *   1. R2 yapılandırılmışsa → Cloudflare R2'ye yükle (CDN URL döner)
 *   2. R2 yoksa → Supabase Storage fallback
 */
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
  if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
    return { error: "Sadece görsel veya video kabul edilir" };
  }
  if (file.size > 50 * 1024 * 1024) return { error: "Dosya 50MB'dan büyük olamaz" };

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "bin";
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const cleanPrefix = pathPrefix.replace(/^\/+|\/+$/g, "");
  const key = cleanPrefix
    ? `${bucket}/${cleanPrefix}/${safeName}`
    : `${bucket}/${safeName}`;

  const arrayBuffer = await file.arrayBuffer();
  const body = new Uint8Array(arrayBuffer);

  if (isR2Configured()) {
    try {
      const r2 = getR2Client();
      if (!r2) throw new Error("R2 client oluşturulamadı");
      await r2.client.send(
        new PutObjectCommand({
          Bucket: r2.config.bucket,
          Key: key,
          Body: body,
          ContentType: file.type,
          CacheControl: "public, max-age=31536000, immutable",
        }),
      );
      return { url: r2PublicUrl(key, r2.config) };
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      return { error: `R2 yükleme hatası: ${msg}` };
    }
  }

  const supabasePath = cleanPrefix ? `${cleanPrefix}/${safeName}` : safeName;
  const { error: uploadErr } = await supabase.storage
    .from(bucket)
    .upload(supabasePath, body, {
      contentType: file.type,
      cacheControl: "31536000",
      upsert: false,
    });
  if (uploadErr) return { error: uploadErr.message };

  const { data } = supabase.storage.from(bucket).getPublicUrl(supabasePath);
  return { url: data.publicUrl };
}

export async function deleteImage(
  publicUrl: string,
  bucket: Bucket,
): Promise<{ ok?: true; error?: string }> {
  const { supabase } = await requireAdmin();

  if (isR2Configured()) {
    const r2 = getR2Client();
    if (r2) {
      const key = r2KeyFromPublicUrl(publicUrl, r2.config);
      if (key) {
        try {
          await r2.client.send(
            new DeleteObjectCommand({ Bucket: r2.config.bucket, Key: key }),
          );
          return { ok: true };
        } catch (e) {
          const msg = e instanceof Error ? e.message : String(e);
          return { error: `R2 silme hatası: ${msg}` };
        }
      }
    }
  }

  const marker = `/storage/v1/object/public/${bucket}/`;
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) return { error: "URL tanınmadı" };

  const path = publicUrl.slice(idx + marker.length);
  const { error } = await supabase.storage.from(bucket).remove([path]);
  if (error) return { error: error.message };
  return { ok: true };
}
