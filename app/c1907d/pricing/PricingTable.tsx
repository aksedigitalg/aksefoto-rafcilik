"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { Save, Edit3, Star } from "lucide-react";
import { bulkUpdatePackagePrices } from "./actions";

interface ServiceRow {
  slug: string;
  name: string;
  category: string;
  is_published: boolean;
}
interface PackageRow {
  id: string;
  service_slug: string;
  name: string;
  price_range: string;
  popular: boolean;
  sort_order: number;
}

export function PricingTable({
  initialServices,
  initialPackages,
  grouped,
  pkgsByService,
}: {
  initialServices: ServiceRow[];
  initialPackages: PackageRow[];
  grouped: Record<string, ServiceRow[]>;
  pkgsByService: Record<string, PackageRow[]>;
}) {
  // edits map: package.id -> price_range
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const dirty = Object.keys(edits).length > 0;

  function setPrice(id: string, price: string) {
    setEdits((prev) => ({ ...prev, [id]: price }));
  }

  function save() {
    if (!dirty) return;
    setMsg(null);
    const payload = Object.entries(edits).map(([id, price_range]) => ({
      id,
      price_range,
    }));
    startTransition(async () => {
      const r = await bulkUpdatePackagePrices(payload);
      if (r.error) setMsg({ type: "err", text: r.error });
      else {
        setMsg({ type: "ok", text: `${r.count} paket fiyatı güncellendi.` });
        setEdits({});
      }
    });
  }

  return (
    <>
      {msg ? (
        <div
          className={`mb-4 rounded-md border px-3 py-2 text-sm ${
            msg.type === "ok"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {msg.text}
        </div>
      ) : null}

      <div className="space-y-6">
        {Object.entries(grouped).map(([category, list]) => (
          <section
            key={category}
            className="overflow-hidden rounded-lg border border-zinc-200 bg-white"
          >
            <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-600">
              {category} ({list.length})
            </div>
            <table className="w-full text-sm">
              <thead className="border-b border-zinc-200 text-left text-xs uppercase tracking-wider text-zinc-500">
                <tr>
                  <th className="px-4 py-2.5">Hizmet</th>
                  <th className="px-4 py-2.5">Paketler & Fiyatlar</th>
                  <th className="w-24 px-4 py-2.5"></th>
                </tr>
              </thead>
              <tbody>
                {list.map((s) => {
                  const pkgs = pkgsByService[s.slug] ?? [];
                  return (
                    <tr key={s.slug} className="border-b border-zinc-100 last:border-0">
                      <td className="px-4 py-3 align-top">
                        <div className="font-medium text-zinc-900">{s.name}</div>
                        <div className="text-xs text-zinc-500">{s.slug}</div>
                      </td>
                      <td className="px-4 py-3">
                        {pkgs.length === 0 ? (
                          <span className="text-xs italic text-zinc-400">
                            Paket tanımlı değil
                          </span>
                        ) : (
                          <div className="space-y-1.5">
                            {pkgs.map((p) => {
                              const current = edits[p.id] ?? p.price_range;
                              const changed = current !== p.price_range;
                              return (
                                <div
                                  key={p.id}
                                  className="flex items-center gap-2 text-xs"
                                >
                                  <span
                                    className={`min-w-[80px] truncate ${
                                      p.popular ? "font-semibold text-zinc-900" : "text-zinc-600"
                                    }`}
                                  >
                                    {p.popular ? <Star className="mr-1 inline h-3 w-3 text-amber-500" /> : null}
                                    {p.name}
                                  </span>
                                  <input
                                    type="text"
                                    value={current}
                                    onChange={(e) => setPrice(p.id, e.target.value)}
                                    className={`flex-1 rounded border px-2 py-1 font-mono text-xs ${
                                      changed
                                        ? "border-amber-400 bg-amber-50"
                                        : "border-zinc-200 bg-white"
                                    } focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900`}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 align-top text-right">
                        <Link
                          href={`/c1907d/services/${s.slug}/edit`}
                          className="inline-flex items-center gap-1 rounded border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600 hover:bg-zinc-50"
                        >
                          <Edit3 className="h-3 w-3" />
                          Detay
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        ))}
      </div>

      {/* Sticky save bar */}
      <div className="sticky bottom-0 -mx-4 mt-6 flex items-center gap-3 border-t border-zinc-200 bg-white/90 px-4 py-3 backdrop-blur lg:-mx-8 lg:px-8">
        <span className="text-sm text-zinc-600">
          {dirty
            ? `${Object.keys(edits).length} değişiklik var`
            : "Değişiklik yok"}
        </span>
        <button
          type="button"
          onClick={save}
          disabled={!dirty || isPending}
          className="ml-auto inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:bg-zinc-300"
        >
          <Save className="h-4 w-4" />
          {isPending ? "Kaydediliyor…" : "Toplu Kaydet"}
        </button>
        {dirty ? (
          <button
            type="button"
            onClick={() => setEdits({})}
            disabled={isPending}
            className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
          >
            İptal
          </button>
        ) : null}
      </div>
    </>
  );
}
