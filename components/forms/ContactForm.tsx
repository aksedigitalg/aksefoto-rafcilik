"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı"),
  phone: z
    .string()
    .min(10, "Geçerli bir telefon numarası girin")
    .regex(/^[0-9+\s()-]+$/, "Sadece rakam ve telefon karakterleri"),
  email: z.string().email("Geçerli bir e-posta girin").optional().or(z.literal("")),
  service: z.string().min(1, "Bir hizmet seçin"),
  preferredDate: z.string().optional(),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalı").max(2000, "Mesaj çok uzun"),
  kvkkConsent: z.literal(true, {
    errorMap: () => ({ message: "Devam etmek için KVKK onayı zorunludur" }),
  }),
  // Honeypot — botlar dolduruyor, gerçek kullanıcı boş bırakıyor
  website: z.string().max(0, "Bot tespit edildi"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: defaultService || "",
      website: "",
      kvkkConsent: false as unknown as true,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Form gönderilemedi");
      }
      setStatus("success");
      reset();
    } catch (e) {
      setStatus("error");
      setErrorMessage(e instanceof Error ? e.message : "Bir hata oluştu");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden />
        <h3 className="mt-4 font-display text-2xl font-semibold">Mesajınız İletildi!</h3>
        <p className="mt-2 text-muted-foreground">
          En kısa sürede size dönüş yapacağız. Acil durumlar için WhatsApp ile yazabilirsiniz.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-6">
          Yeni Mesaj Gönder
        </Button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const labelClass = "mb-1.5 block text-sm font-medium";
  const errorClass = "mt-1 text-xs text-destructive";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot - gizli */}
      <div className="hidden" aria-hidden>
        <label>
          Web siteniz (bu alanı boş bırakın)
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Ad Soyad *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={cn(inputClass, errors.name && "border-destructive")}
            {...register("name")}
          />
          {errors.name ? <p className={errorClass}>{errors.name.message}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Telefon *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="0532 000 00 00"
            className={cn(inputClass, errors.phone && "border-destructive")}
            {...register("phone")}
          />
          {errors.phone ? <p className={errorClass}>{errors.phone.message}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          E-posta (opsiyonel)
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={cn(inputClass, errors.email && "border-destructive")}
          {...register("email")}
        />
        {errors.email ? <p className={errorClass}>{errors.email.message}</p> : null}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="service" className={labelClass}>
            Hizmet *
          </label>
          <select
            id="service"
            className={cn(inputClass, errors.service && "border-destructive")}
            {...register("service")}
          >
            <option value="">Hizmet seçiniz</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">Diğer / Karma</option>
          </select>
          {errors.service ? <p className={errorClass}>{errors.service.message}</p> : null}
        </div>

        <div>
          <label htmlFor="preferredDate" className={labelClass}>
            Tahmini Tarih (opsiyonel)
          </label>
          <input
            id="preferredDate"
            type="date"
            className={inputClass}
            {...register("preferredDate")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Mesajınız *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Beklentileriniz, mekan, kişi sayısı, özel istekler..."
          className={cn(inputClass, "resize-none", errors.message && "border-destructive")}
          {...register("message")}
        />
        {errors.message ? <p className={errorClass}>{errors.message.message}</p> : null}
      </div>

      <div className="flex items-start gap-2">
        <input
          id="kvkk"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
          {...register("kvkkConsent")}
        />
        <label htmlFor="kvkk" className="text-xs text-muted-foreground">
          <a href="/kvkk-aydinlatma-metni" className="text-primary hover:underline" target="_blank">
            KVKK Aydınlatma Metni
          </a>
          'ni okudum, onaylıyorum. Verilerim sadece çekim koordinasyonu için kullanılacak. *
        </label>
      </div>
      {errors.kvkkConsent ? (
        <p className={errorClass}>{errors.kvkkConsent.message}</p>
      ) : null}

      {status === "error" && errorMessage ? (
        <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>{errorMessage}</span>
        </div>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Gönderiliyor..." : "Mesajı Gönder"}
      </Button>
    </form>
  );
}
