"use client";

import { useState, useTransition } from "react";

interface TestimonialFormProps {
  initial?: {
    id?: string;
    name: string;
    service: string;
    service_slug: string | null;
    district: string | null;
    neighborhood: string | null;
    rating: number;
    text: string;
    date: string;
    avatar: string | null;
    approved: boolean;
  };
  action: (formData: FormData) => Promise<{ error?: string } | void>;
  submitLabel?: string;
}

const DISTRICT_OPTIONS = [
  { value: "", label: "—" },
  { value: "gebze", label: "Gebze" },
  { value: "darica", label: "Darıca" },
  { value: "cayirova", label: "Çayırova" },
  { value: "dilovasi", label: "Dilovası" },
];

export function TestimonialForm({
  initial,
  action,
  submitLabel = "Kaydet",
}: TestimonialFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const res = await action(formData);
      if (res && "error" in res && res.error) setError(res.error);
    });
  }

  return (
    <form action={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Ad Soyad" name="name" defaultValue={initial?.name} required />
        <Field label="Hizmet (görünen ad)" name="service" defaultValue={initial?.service} required />
        <Field
          label="Hizmet slug (opsiyonel)"
          name="service_slug"
          defaultValue={initial?.service_slug ?? ""}
          hint="Örn: dugun-fotografcisi"
        />
        <SelectField
          label="İlçe"
          name="district"
          defaultValue={initial?.district ?? ""}
          options={DISTRICT_OPTIONS}
        />
        <Field label="Mahalle" name="neighborhood" defaultValue={initial?.neighborhood ?? ""} />
        <Field
          label="Puan (1-5)"
          name="rating"
          type="number"
          min={1}
          max={5}
          defaultValue={String(initial?.rating ?? 5)}
          required
        />
        <Field
          label="Tarih"
          name="date"
          type="date"
          defaultValue={initial?.date ?? new Date().toISOString().slice(0, 10)}
          required
        />
        <Field
          label="Avatar URL (opsiyonel)"
          name="avatar"
          defaultValue={initial?.avatar ?? ""}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="text" className="text-sm font-medium">
          Yorum Metni
        </label>
        <textarea
          id="text"
          name="text"
          required
          rows={5}
          defaultValue={initial?.text}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="approved"
          defaultChecked={initial?.approved ?? false}
          className="h-4 w-4"
        />
        Onaylı (sitede herkese görünür)
      </label>

      {error ? (
        <p className="rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
        >
          {isPending ? "Kaydediliyor…" : submitLabel}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  required,
  type = "text",
  min,
  max,
  hint,
}: {
  label: string;
  name: string;
  defaultValue?: string | number;
  required?: boolean;
  type?: string;
  min?: number;
  max?: number;
  hint?: string;
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required ? <span className="ml-0.5 text-destructive">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        min={min}
        max={max}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  options,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
