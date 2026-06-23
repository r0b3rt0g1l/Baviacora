import { Breadcrumbs } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { municipalConfig } from "@/lib/municipalConfig";
import { getCabildo } from "@/lib/content";
import { derivePresidente, deriveSindica, deriveRegidores } from "@/lib/cabildo";
import { DirectorioGrid } from "@/components/gobierno/DirectorioGrid";
import { PageHeader } from "@/components/common/PageHeader";

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
      <PageHeader
        clave="header-cabildo"
        eyebrow="Gobierno"
        fallbackTitulo="Cabildo"
        fallbackDescripcion={`Integrantes del Cabildo del ${municipalConfig.identidad.nombreCompleto}: Presidencia, Sindicatura y Regidurías de la Administración ${municipalConfig.identidad.administracion}. Selecciona una persona para ver sus datos.`}
        bg="white"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <DirectorioGrid people={cabildo} />
      </section>
    </main>
  );
}
