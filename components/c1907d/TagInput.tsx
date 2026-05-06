"use client";

import { useState, type KeyboardEvent } from "react";
import { X } from "lucide-react";

interface TagInputProps {
  value: string[];
  onChange: (val: string[]) => void;
  label?: string;
  placeholder?: string;
  hint?: string;
}

export function TagInput({ value, onChange, label, placeholder, hint }: TagInputProps) {
  const [input, setInput] = useState("");

  function add(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    if (value.includes(trimmed)) return;
    onChange([...value, trimmed]);
    setInput("");
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      add(input);
    } else if (e.key === "Backspace" && input === "" && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  }

  return (
    <div className="space-y-2">
      {label ? <label className="text-sm font-medium">{label}</label> : null}

      <div className="flex flex-wrap items-center gap-2 rounded-md border border-input bg-background p-2 focus-within:ring-2 focus-within:ring-ring">
        {value.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs"
          >
            {tag}
            <button
              type="button"
              onClick={() => onChange(value.filter((t) => t !== tag))}
              className="rounded-full hover:bg-background"
              aria-label={`${tag} etiketini sil`}
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          onBlur={() => input.trim() && add(input)}
          placeholder={value.length === 0 ? placeholder : ""}
          className="min-w-[10ch] flex-1 bg-transparent text-sm focus:outline-none"
        />
      </div>

      {hint ? (
        <p className="text-xs text-muted-foreground">{hint || "Enter veya , ile ekle"}</p>
      ) : (
        <p className="text-xs text-muted-foreground">Enter veya virgül ile etiket ekleyin</p>
      )}
    </div>
  );
}
