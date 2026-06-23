import Image from "next/image";
import { getContenido } from "@/lib/content";

// Banner hero reutilizable y editable desde el CMS por `clave`: imagen de fondo
// + título + texto encima. Si no hay contenido utilizable (ni del CMS ni del
// fallback) → no se renderiza (return null).
export async function BannerHero({ clave, fallback = null, className = "" }) {
  const c = (clave ? await getContenido(clave) : null) ?? fallback;
  if (!c || (!c.titulo && !c.imagenUrl)) return null;

  return (
    <section
      aria-label={c.titulo || "Banner"}
      className={`relative isolate overflow-hidden bg-[var(--color-guinda-deep)] ${className}`}
    >
      {c.imagenUrl ? (
        <Image
          src={c.imagenUrl}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/40 to-black/20"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 text-white sm:px-6 md:py-24">
        {c.titulo ? (
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            {c.titulo}
          </h2>
        ) : null}
        {c.descripcion ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            {c.descripcion}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default BannerHero;
