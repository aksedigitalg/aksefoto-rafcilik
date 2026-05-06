import { S3Client } from "@aws-sdk/client-s3";

/**
 * Cloudflare R2 S3-compatible client.
 *
 * R2 endpoint: https://<account_id>.r2.cloudflarestorage.com
 * Region: 'auto' (R2 region zorunlu degil ama AWS SDK soruyor)
 *
 * Env vars (.env.local + Vercel):
 *   R2_ACCOUNT_ID         - Cloudflare account ID
 *   R2_ACCESS_KEY_ID      - R2 API token access key
 *   R2_SECRET_ACCESS_KEY  - R2 API token secret
 *   R2_BUCKET             - Bucket adi (orn. "akse-media")
 *   R2_PUBLIC_URL         - Custom domain (orn. "https://cdn.aksefotograf.com")
 *                           veya bucket public domain (https://pub-xxx.r2.dev)
 */

export interface R2Config {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
  publicUrl: string;
}

export function getR2Config(): R2Config | null {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const bucket = process.env.R2_BUCKET;
  const publicUrl = process.env.R2_PUBLIC_URL;

  if (!accountId || !accessKeyId || !secretAccessKey || !bucket || !publicUrl) {
    return null;
  }
  return { accountId, accessKeyId, secretAccessKey, bucket, publicUrl };
}

export function isR2Configured(): boolean {
  return getR2Config() !== null;
}

let cached: S3Client | null = null;

export function getR2Client(): { client: S3Client; config: R2Config } | null {
  const config = getR2Config();
  if (!config) return null;
  if (!cached) {
    cached = new S3Client({
      region: "auto",
      endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });
  }
  return { client: cached, config };
}

/**
 * Public URL'i path'ten ureten yardimci.
 * publicUrl: "https://cdn.aksefotograf.com"  (slash'siz)
 * path:      "gallery/dugun/abc.jpg"
 * sonuc:     "https://cdn.aksefotograf.com/gallery/dugun/abc.jpg"
 */
export function r2PublicUrl(path: string, config: R2Config): string {
  const base = config.publicUrl.replace(/\/+$/, "");
  const clean = path.replace(/^\/+/, "");
  return `${base}/${clean}`;
}

/**
 * Public URL'den storage key'ini cikarmak (silme icin).
 */
export function r2KeyFromPublicUrl(url: string, config: R2Config): string | null {
  const base = config.publicUrl.replace(/\/+$/, "");
  if (!url.startsWith(base + "/")) return null;
  return url.slice(base.length + 1);
}
