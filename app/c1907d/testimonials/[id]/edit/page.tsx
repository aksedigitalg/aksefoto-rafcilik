import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/c1907d/auth";
import { TestimonialForm } from "../../TestimonialForm";
import { updateTestimonial } from "../../actions";
import type { TestimonialRow } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { supabase } = await requireAdmin();

  const result = await supabase
    .from("testimonials")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!result.data) notFound();
  const row = result.data as TestimonialRow;

  const action = updateTestimonial.bind(null, id);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Yorumu Düzenle</h1>
        <p className="text-sm text-muted-foreground">{row.name}</p>
      </div>
      <TestimonialForm initial={row} action={action} submitLabel="Değişiklikleri Kaydet" />
    </div>
  );
}
