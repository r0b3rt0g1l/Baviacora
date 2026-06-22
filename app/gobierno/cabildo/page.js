import { Breadcrumbs } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { municipalConfig } from "@/lib/municipalConfig";
import { getCabildo } from "@/lib/content";
import { derivePresidente, deriveSindica, deriveRegidores } from "@/lib/cabildo";
import { DirectorioGrid } from "@/components/gobierno/DirectorioGrid";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Cabildo",
  description: `Cabildo del ${municipalConfig.identidad.nombreCompleto}: Presidencia, Sindicatura y Regidurías. Administración ${municipalConfig.identidad.administracion}.`,
  path: "/gobierno/cabildo",
});

export default async function CabildoPage() {
  const lista = await getCabildo();
  // Solo electos, en orden: Presidente → Síndica → Regidores.
  const cabildo = [
    derivePresidente(lista),
    deriveSindica(lista),
    ...deriveRegidores(lista),
  ].filter(Boolean);

  return (
    <main className="flex flex-1 flex-col">
      <Breadcrumbs items={[{ name: "Inicio", path: "/" }, { name: "Gobierno", path: "/gobierno" }, { name: "Cabildo", path: "/gobierno/cabildo" }]} />
      <header className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
            Gobierno
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Cabildo
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[var(--color-text-secondary)] md:text-lg">
            Integrantes del Cabildo del {municipalConfig.identidad.nombreCompleto}:
            Presidencia, Sindicatura y Regidurías de la Administración{" "}
            {municipalConfig.identidad.administracion}. Selecciona una persona
            para ver sus datos.
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <DirectorioGrid people={cabildo} />
      </section>
    </main>
  );
}
