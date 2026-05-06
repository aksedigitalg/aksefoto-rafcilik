"use client";

import { useState, useRef } from "react";
import { Eye, Edit3, Bold, Italic, List, Heading2, Heading3, Link2 } from "lucide-react";

interface MarkdownEditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  rows?: number;
  label?: string;
  hint?: string;
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder,
  rows = 18,
  label,
  hint,
}: MarkdownEditorProps) {
  const [tab, setTab] = useState<"edit" | "preview">("edit");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function wrap(prefix: string, suffix: string = prefix) {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const before = value.slice(0, start);
    const sel = value.slice(start, end);
    const after = value.slice(end);
    const next = `${before}${prefix}${sel}${suffix}${after}`;
    onChange(next);
    setTimeout(() => {
      ta.focus();
      ta.selectionStart = start + prefix.length;
      ta.selectionEnd = end + prefix.length;
    }, 0);
  }

  function insertLine(text: string) {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const before = value.slice(0, start);
    const after = value.slice(start);
    const needsNewline = before.length > 0 && !before.endsWith("\n");
    const insertText = `${needsNewline ? "\n" : ""}${text}`;
    onChange(before + insertText + after);
    setTimeout(() => {
      ta.focus();
      ta.selectionStart = ta.selectionEnd = start + insertText.length;
    }, 0);
  }

  return (
    <div className="space-y-2">
      {label ? <label className="text-sm font-medium">{label}</label> : null}

      <div className="overflow-hidden rounded-lg border border-input bg-background">
        {/* Toolbar */}
        <div className="flex items-center gap-1 border-b border-border bg-muted/30 px-2 py-1.5">
          <button
            type="button"
            onClick={() => insertLine("## ")}
            title="Başlık 2"
            className="rounded p-1.5 hover:bg-accent"
          >
            <Heading2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => insertLine("### ")}
            title="Başlık 3"
            className="rounded p-1.5 hover:bg-accent"
          >
            <Heading3 className="h-4 w-4" />
          </button>
          <div className="mx-1 h-5 w-px bg-border" />
          <button
            type="button"
            onClick={() => wrap("**")}
            title="Kalın"
            className="rounded p-1.5 hover:bg-accent"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => wrap("_")}
            title="İtalik"
            className="rounded p-1.5 hover:bg-accent"
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => wrap("[", "](url)")}
            title="Link"
            className="rounded p-1.5 hover:bg-accent"
          >
            <Link2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => insertLine("- ")}
            title="Liste"
            className="rounded p-1.5 hover:bg-accent"
          >
            <List className="h-4 w-4" />
          </button>

          <div className="ml-auto flex items-center gap-1 rounded bg-background p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setTab("edit")}
              className={`inline-flex items-center gap-1 rounded px-2 py-1 ${
                tab === "edit" ? "bg-primary text-primary-foreground" : "hover:bg-accent"
              }`}
            >
              <Edit3 className="h-3 w-3" /> Düzenle
            </button>
            <button
              type="button"
              onClick={() => setTab("preview")}
              className={`inline-flex items-center gap-1 rounded px-2 py-1 ${
                tab === "preview" ? "bg-primary text-primary-foreground" : "hover:bg-accent"
              }`}
            >
              <Eye className="h-3 w-3" /> Önizle
            </button>
          </div>
        </div>

        {/* Body */}
        {tab === "edit" ? (
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            className="block w-full bg-background px-3 py-2.5 font-mono text-sm leading-relaxed focus:outline-none"
          />
        ) : (
          <div
            className="prose prose-sm max-w-none p-4"
            style={{ minHeight: `${rows * 1.5}em` }}
          >
            <MarkdownPreview value={value} />
          </div>
        )}
      </div>

      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

function MarkdownPreview({ value }: { value: string }) {
  if (!value.trim()) {
    return <p className="text-muted-foreground">Önizleme için bir şeyler yazın…</p>;
  }
  const lines = value.split("\n");
  const out: React.ReactNode[] = [];
  let listBuf: string[] | null = null;

  const flush = () => {
    if (listBuf) {
      out.push(
        <ul key={`u${out.length}`} className="my-3 ml-5 list-disc space-y-1">
          {listBuf.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ul>,
      );
      listBuf = null;
    }
  };

  for (const line of lines) {
    const t = line.trim();
    if (!t) {
      flush();
      continue;
    }
    if (t.startsWith("## ")) {
      flush();
      out.push(
        <h2 key={`h${out.length}`} className="mb-2 mt-5 text-xl font-semibold">
          {t.slice(3)}
        </h2>,
      );
    } else if (t.startsWith("### ")) {
      flush();
      out.push(
        <h3 key={`h${out.length}`} className="mb-2 mt-4 text-lg font-semibold">
          {t.slice(4)}
        </h3>,
      );
    } else if (t.startsWith("- ")) {
      if (!listBuf) listBuf = [];
      listBuf.push(t.slice(2));
    } else {
      flush();
      out.push(
        <p key={`p${out.length}`} className="mb-3 leading-relaxed">
          {renderInline(t)}
        </p>,
      );
    }
  }
  flush();
  return <>{out}</>;
}

function renderInline(text: string): React.ReactNode {
  const tokens = text.split(/(\*\*[^*]+\*\*|_[^_]+_|\[[^\]]+\]\([^)]+\))/g);
  return tokens.map((tk, i) => {
    if (tk.startsWith("**") && tk.endsWith("**")) {
      return <strong key={i}>{tk.slice(2, -2)}</strong>;
    }
    if (tk.startsWith("_") && tk.endsWith("_")) {
      return <em key={i}>{tk.slice(1, -1)}</em>;
    }
    const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(tk);
    if (linkMatch) {
      return (
        <a key={i} href={linkMatch[2]} className="text-primary underline">
          {linkMatch[1]}
        </a>
      );
    }
    return <span key={i}>{tk}</span>;
  });
}
