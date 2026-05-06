import Link from "next/link";
import { Plus, Check, X } from "lucide-react";
import { requireAdmin } from "@/lib/admin/auth";
import { Button } from "@/components/ui/button";
import { TestimonialRowActions } from "./TestimonialRowActions";
import type { TestimonialRow } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function AdminTestimonialsPage() {
  const { supabase } = await requireAdmin();
  const result = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });
  const rows = (result.data ?? []) as TestimonialRow[];
  const error = result.error;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">Müşteri Yorumları</h1>
          <p className="text-sm text-muted-foreground">
            {rows.length} kayıt — onaylanmamış olanlar herkese görünmez.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/testimonials/new" className="gap-2">
            <Plus className="h-4 w-4" />
            Yeni Yorum
          </Link>
        </Button>
      </div>

      {error ? (
        <p className="rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error.message}
        </p>
      ) : null}

      {rows.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
          <p className="text-muted-foreground">Henüz yorum yok.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Gerçek müşteri yorumu geldikçe ekleyin. Asla sahte/uydurma yorum kullanmayın
            — Google Rich Results politikası ihlal cezası riski var.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/40 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Müşteri</th>
                <th className="px-4 py-3">Hizmet</th>
                <th className="px-4 py-3">Bölge</th>
                <th className="px-4 py-3">Puan</th>
                <th className="px-4 py-3">Durum</th>
                <th className="px-4 py-3 text-right">Eylem</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">
                    <div className="font-medium">{r.name}</div>
                    <div className="line-clamp-1 max-w-md text-xs text-muted-foreground">
                      {r.text}
                    </div>
                  </td>
                  <td className="px-4 py-3">{r.service}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {r.neighborhood ? `${r.neighborhood}, ` : ""}
                    {r.district ?? "—"}
                  </td>
                  <td className="px-4 py-3">{r.rating}/5</td>
                  <td className="px-4 py-3">
                    {r.approved ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                        <Check className="h-3 w-3" /> Onaylı
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                        <X className="h-3 w-3" /> Bekliyor
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <TestimonialRowActions id={r.id} approved={r.approved} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
