import { buildMetadata } from "@/lib/seo";
import { cabildo } from "@/lib/cabildo";
import { DirectorioGrid } from "@/components/gobierno/DirectorioGrid";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Directorio del Cabildo",
  description:
    "Directorio oficial del Cabildo del Gobierno Municipal de Arivechi: Presidente, Síndica, Regidurías y Presidencia del DIF Municipal. Administración 2024-2027.",
  path: "/gobierno/directorio",
});

export default function DirectorioPage() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            Directorio
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Cabildo Municipal
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[var(--color-text-secondary)] md:text-lg">
            Conoce al Presidente, Síndica, Regidurías y Presidencia del DIF
            Municipal que integran la Administración 2024-2027 del Gobierno
            Municipal de Arivechi. Selecciona una persona para ver sus datos.
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <DirectorioGrid people={cabildo} />
      </section>
    </main>
  );
}
