"use client";

import { Plus, Trash2, GripVertical } from "lucide-react";

interface ArrayInputProps {
  value: string[];
  onChange: (val: string[]) => void;
  label?: string;
  placeholder?: string;
  addLabel?: string;
  hint?: string;
  multiline?: boolean;
}

export function ArrayInput({
  value,
  onChange,
  label,
  placeholder = "Yeni öğe…",
  addLabel = "Öğe Ekle",
  hint,
  multiline = false,
}: ArrayInputProps) {
  function update(i: number, val: string) {
    const next = [...value];
    next[i] = val;
    onChange(next);
  }

  function remove(i: number) {
    onChange(value.filter((_, idx) => idx !== i));
  }

  function add() {
    onChange([...value, ""]);
  }

  function move(from: number, to: number) {
    if (to < 0 || to >= value.length) return;
    const next = [...value];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item!);
    onChange(next);
  }

  return (
    <div className="space-y-2">
      {label ? <label className="text-sm font-medium">{label}</label> : null}

      <ul className="space-y-2">
        {value.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <button
              type="button"
              onClick={() => move(i, i - 1)}
              disabled={i === 0}
              className="mt-1 cursor-grab rounded p-1 text-muted-foreground hover:bg-accent disabled:opacity-30"
              title="Yukarı taşı"
              aria-label="Yukarı taşı"
            >
              <GripVertical className="h-4 w-4" />
            </button>

            {multiline ? (
              <textarea
                value={item}
                onChange={(e) => update(i, e.target.value)}
                placeholder={placeholder}
                rows={2}
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            ) : (
              <input
                type="text"
                value={item}
                onChange={(e) => update(i, e.target.value)}
                placeholder={placeholder}
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            )}

            <button
              type="button"
              onClick={() => remove(i)}
              className="mt-1 rounded p-1.5 text-destructive hover:bg-destructive/10"
              title="Sil"
              aria-label="Sil"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={add}
        className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border px-3 py-1.5 text-sm text-muted-foreground hover:border-primary hover:text-primary"
      >
        <Plus className="h-4 w-4" />
        {addLabel}
      </button>

      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
