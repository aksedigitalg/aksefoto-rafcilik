import { cn } from "@/lib/utils";

export interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps?: ProcessStep[];
  title?: string;
  className?: string;
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    title: "İletişim",
    description: "WhatsApp veya telefonla bize ulaşın, ihtiyacınızı kısaca anlatın.",
  },
  {
    title: "Ön Görüşme",
    description: "Stüdyoda veya online görüşme ile beklenti, mekan, tarih, paket netleşir.",
  },
  {
    title: "Çekim Günü",
    description: "Profesyonel ekipman ve sanatkar yaklaşımla çekim gerçekleşir.",
  },
  {
    title: "Edit & Düzenleme",
    description: "Her kareye tek tek dokunulur; renk, ışık, detay düzenlemesi yapılır.",
  },
  {
    title: "Teslim",
    description: "Online galeri + USB veya dijital indirme ile fotoğraflarınız elinize ulaşır.",
  },
];

export function ProcessSteps({
  steps = DEFAULT_STEPS,
  title = "Nasıl Çalışıyoruz?",
  className,
}: ProcessStepsProps) {
  return (
    <section className={className}>
      {title ? (
        <h2 className="mb-10 text-center font-display text-2xl font-semibold md:text-3xl">
          {title}
        </h2>
      ) : null}
      <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {steps.map((step, idx) => (
          <li key={idx} className={cn("relative rounded-xl border border-border bg-card p-6")}>
            <div className="absolute -top-4 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
              {idx + 1}
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
