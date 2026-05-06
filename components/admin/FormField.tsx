"use client";

import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface FieldProps {
  label?: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

export function Field({ label, hint, required, error, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      {label ? (
        <label className="text-sm font-medium">
          {label}
          {required ? <span className="ml-0.5 text-destructive">*</span> : null}
        </label>
      ) : null}
      {children}
      {hint && !error ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${inputClass} font-sans leading-relaxed ${props.className ?? ""}`}
    />
  );
}
