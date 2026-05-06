"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { Upload, X, Loader2 } from "lucide-react";
import { uploadImage, deleteImage } from "@/app/admin/_actions/storage";

interface ImageUploadProps {
  bucket: "gallery" | "services" | "blog" | "branding";
  value: string | null | undefined;
  onChange: (url: string | null) => void;
  label?: string;
  hint?: string;
  aspectRatio?: "video" | "square" | "portrait";
  pathPrefix?: string;
}

export function ImageUpload({
  bucket,
  value,
  onChange,
  label,
  hint,
  aspectRatio = "video",
  pathPrefix = "",
}: ImageUploadProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  }[aspectRatio];

  function handleFile(file: File) {
    setError(null);
    if (!file.type.startsWith("image/")) {
      setError("Sadece görsel dosyaları yüklenebilir.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("Dosya 10MB'dan büyük olamaz.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("bucket", bucket);
    if (pathPrefix) formData.append("pathPrefix", pathPrefix);

    startTransition(async () => {
      const result = await uploadImage(formData);
      if (result.error) {
        setError(result.error);
      } else if (result.url) {
        onChange(result.url);
      }
    });
  }

  function handleDelete() {
    if (!value) return;
    if (!confirm("Görseli kaldırmak istediğinize emin misiniz?")) return;
    startTransition(async () => {
      await deleteImage(value, bucket);
      onChange(null);
    });
  }

  return (
    <div className="space-y-2">
      {label ? <label className="text-sm font-medium">{label}</label> : null}

      {value ? (
        <div className={`relative ${aspectClass} overflow-hidden rounded-lg border border-border`}>
          <Image
            src={value}
            alt="Yüklenen görsel"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className="absolute right-2 top-2 rounded-full bg-destructive p-2 text-white shadow hover:opacity-90 disabled:opacity-50"
            aria-label="Görseli kaldır"
          >
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}
          </button>
        </div>
      ) : (
        <label
          htmlFor={`upload-${bucket}-${pathPrefix}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files[0];
            if (file) handleFile(file);
          }}
          className={`flex ${aspectClass} cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${
            dragOver
              ? "border-primary bg-primary/5"
              : "border-border bg-muted/20 hover:border-primary/40 hover:bg-muted/40"
          }`}
        >
          <input
            id={`upload-${bucket}-${pathPrefix}`}
            type="file"
            accept="image/*"
            disabled={isPending}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
            className="sr-only"
          />
          {isPending ? (
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          ) : (
            <>
              <Upload className="h-10 w-10 text-muted-foreground" />
              <p className="mt-3 text-sm font-medium">Görseli sürükle bırak veya tıkla</p>
              <p className="mt-1 text-xs text-muted-foreground">
                JPEG, PNG, WebP, AVIF — max 10MB
              </p>
            </>
          )}
        </label>
      )}

      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {error ? (
        <p className="rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
