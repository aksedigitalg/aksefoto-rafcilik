"use client";

import { useState, useMemo } from "react";
import { X, Search, Check } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  value: string[];
  onChange: (val: string[]) => void;
  label?: string;
  placeholder?: string;
  hint?: string;
}

export function MultiSelect({
  options,
  value,
  onChange,
  label,
  placeholder = "Ara…",
  hint,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selectedOptions = useMemo(
    () => options.filter((o) => value.includes(o.value)),
    [options, value],
  );

  const filtered = useMemo(() => {
    const q = query.toLocaleLowerCase("tr-TR");
    return options.filter(
      (o) =>
        !value.includes(o.value) &&
        (o.label.toLocaleLowerCase("tr-TR").includes(q) ||
          o.value.toLocaleLowerCase("tr-TR").includes(q)),
    );
  }, [options, value, query]);

  function toggle(v: string) {
    if (value.includes(v)) {
      onChange(value.filter((x) => x !== v));
    } else {
      onChange([...value, v]);
    }
  }

  return (
    <div className="space-y-2">
      {label ? <label className="text-sm font-medium">{label}</label> : null}

      {selectedOptions.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {selectedOptions.map((o) => (
            <span
              key={o.value}
              className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
            >
              {o.label}
              <button
                type="button"
                onClick={() => toggle(o.value)}
                className="rounded-full hover:bg-primary/20"
                aria-label={`${o.label} kaldır`}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      ) : null}

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm hover:border-primary/50"
        >
          <span className="text-muted-foreground">
            {value.length === 0 ? "Seçim yapın" : `${value.length} seçili — daha fazla ekle`}
          </span>
          <Search className="h-4 w-4 text-muted-foreground" />
        </button>

        {open ? (
          <div className="absolute left-0 right-0 top-full z-10 mt-1 max-h-72 overflow-auto rounded-md border border-border bg-card shadow-lg">
            <div className="sticky top-0 border-b border-border bg-card p-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                autoFocus
                className="w-full rounded border border-input bg-background px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            {filtered.length === 0 ? (
              <p className="p-3 text-center text-xs text-muted-foreground">Sonuç yok</p>
            ) : (
              <ul>
                {filtered.slice(0, 50).map((o) => (
                  <li key={o.value}>
                    <button
                      type="button"
                      onClick={() => {
                        toggle(o.value);
                        setQuery("");
                      }}
                      className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-accent"
                    >
                      <span>{o.label}</span>
                      <span className="text-xs text-muted-foreground">{o.value}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : null}
      </div>

      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
