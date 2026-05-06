"use client";

import Link from "next/link";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toggleApproved, deleteTestimonial } from "./actions";

export function TestimonialRowActions({
  id,
  approved,
}: {
  id: string;
  approved: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function onToggle() {
    startTransition(async () => {
      await toggleApproved(id, approved);
      router.refresh();
    });
  }

  function onDelete() {
    if (!confirm("Bu yorumu silmek istediğinize emin misiniz?")) return;
    startTransition(async () => {
      await deleteTestimonial(id);
      router.refresh();
    });
  }

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={onToggle}
        disabled={isPending}
        className="rounded-md border border-border px-2 py-1 text-xs hover:bg-accent disabled:opacity-50"
      >
        {approved ? "Onayı Kaldır" : "Onayla"}
      </button>
      <Link
        href={`/admin/testimonials/${id}/edit`}
        className="rounded-md border border-border px-2 py-1 text-xs hover:bg-accent"
      >
        Düzenle
      </Link>
      <button
        type="button"
        onClick={onDelete}
        disabled={isPending}
        className="rounded-md border border-destructive/50 px-2 py-1 text-xs text-destructive hover:bg-destructive/10 disabled:opacity-50"
      >
        Sil
      </button>
    </div>
  );
}
