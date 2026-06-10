import { Breadcrumbs } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { municipalConfig } from "@/lib/municipalConfig";
import { getCabildo } from "@/lib/content";
import { DirectorioGrid } from "@/components/gobierno/DirectorioGrid";

// Bajamos el revalidate de 3600 → 60 ahora que el directorio se administra
// desde el CMS y los cambios deben verse rápido en producción.
export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Directorio del Cabildo",
  description: `Directorio oficial del ${municipalConfig.identidad.nombreCompleto}: Cabildo (Presidencia, Sindicatura, Regidurías) y gabinete municipal. Administración ${municipalConfig.identidad.administracion}.`,
  path: "/gobierno/directorio",
});

export default async function DirectorioPage() {
  // getCabildo() ya resuelve CMS-o-fallback (ver lib/content).
  const lista = await getCabildo();

  return (
    <main className="flex flex-1 flex-col">
      <Breadcrumbs items={[{ name: "Inicio", path: "/" }, { name: "Gobierno", path: "/gobierno" }, { name: "Directorio", path: "/gobierno/directorio" }]} />
      <header className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            Directorio
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Cabildo Municipal
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[var(--color-text-secondary)] md:text-lg">
            Conoce al Cabildo (Presidencia, Sindicatura y Regidurías) y al
            gabinete municipal que integran la Administración{" "}
            {municipalConfig.identidad.administracion} del{" "}
            {municipalConfig.identidad.nombreCompleto}. Selecciona una persona
            para ver sus datos.
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <DirectorioGrid people={lista} />
      </section>
    </main>
  );
}
