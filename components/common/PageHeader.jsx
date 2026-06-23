import { getContenido } from "@/lib/content";

// Encabezado de página reutilizable y editable desde el CMS por `clave`.
// Solo título y descripción vienen del CMS; si la clave no existe (o está
// inactiva) usa el fallback del repo → la página nunca queda sin encabezado.
// El eyebrow/badge/ícono/bg/ancho y el contenido extra (children) se pasan por
// props (no editables).
export async function PageHeader({
  clave,
  fallbackTitulo,
  fallbackDescripcion = null,
  eyebrow = null,
  badge = null,
  bg = "white",
  narrow = false,
  children = null,
}) {
  const c = clave ? await getContenido(clave) : null;
  const titulo = c?.titulo || fallbackTitulo;
  const descripcion =
    c?.descripcion !== undefined && c?.descripcion !== null
      ? c.descripcion
      : fallbackDescripcion;

  return (
    <header
      className={`border-b border-[var(--color-border)] ${
        bg === "bg" ? "bg-[var(--color-bg)]" : "bg-white"
      }`}
    >
      <div
        className={`mx-auto ${
          narrow ? "max-w-5xl" : "max-w-7xl"
        } px-4 py-12 sm:px-6 md:py-16`}
      >
        {badge
          ? badge
          : eyebrow
            ? (
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-guinda)]">
                {eyebrow}
              </p>
            )
            : null}
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-5xl">
          {titulo}
        </h1>
        {descripcion ? (
          <p className="mt-4 max-w-3xl text-base text-[var(--color-text-secondary)] md:text-lg">
            {descripcion}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}

export default PageHeader;
