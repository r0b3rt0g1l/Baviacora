import { Compass } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { municipalConfig } from "@/lib/municipalConfig";

export const revalidate = 86400;

export const metadata = buildMetadata({
  title: "Turismo",
  description: `Atractivos turísticos del municipio de ${municipalConfig.identidad.nombreCorto}, Sonora. Contenido en preparación.`,
  path: "/turismo",
});

export default function TurismoPage() {
  const { identidad } = municipalConfig;

  return (
    <main className="flex flex-1 flex-col">
      <section
        aria-label="Bienvenida turismo"
        className="relative isolate overflow-hidden bg-[var(--color-guinda-deep)] text-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_25%_30%,rgba(229,181,61,0.55)_0,transparent_50%),radial-gradient(circle_at_75%_70%,white_0,transparent_50%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-cream)] backdrop-blur-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--color-dorado)]" />
              {identidad.estado}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Descubre {identidad.nombreCorto}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-[var(--color-cream)]/90 md:text-lg">
              Los atractivos turísticos, la gastronomía y las tradiciones del municipio
              se publicarán próximamente.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-[var(--color-border)] bg-white p-10 text-center shadow-[var(--shadow-card)]">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-guinda)]/10 text-[var(--color-guinda)]">
            <Compass className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-bold text-[var(--color-text)]">
            Contenido en preparación
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
            Estamos integrando la información turística oficial de {identidad.nombreCorto}.
            Vuelve pronto para conocer los atractivos del municipio.
          </p>
        </div>
      </section>
    </main>
  );
}
