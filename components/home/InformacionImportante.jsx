"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, FileText, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Miniatura de la 1ª página vía transformación de URL de Cloudinary (sin
// procesar nada en el backend). Solo aplica a PDFs servidos como `image`.
function pdfThumb(url) {
  if (
    typeof url !== "string" ||
    !url.includes("/image/upload/") ||
    !/\.pdf(\?|$)/i.test(url)
  ) {
    return null;
  }
  return url.replace(
    "/image/upload/",
    "/image/upload/pg_1,w_400,ar_4:3,c_fill,g_north,f_jpg,q_auto/",
  );
}

export function InformacionImportante({ documentos = [] }) {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  // Mismo patrón/timing que el carrusel del hero: loop + duration 36 +
  // Autoplay 6s (stopOnInteraction:false → tras arrastrar se reanuda solo;
  // stopOnMouseEnter:true → pausa al pasar el cursor). Reduce-aware.
  const [emblaRef, emblaApi] = useEmblaCarousel(
    // duration alto = deslizamiento lento y suave (el hero usa 36; aquí 70 para
    // un movimiento muy pausado y elegante).
    { loop: documentos.length > 1, align: "start", duration: 70 },
    reduce || documentos.length <= 1
      ? []
      : [
          // Intervalo amplio (12 s) → rota muy despacio, sin prisa.
          Autoplay({
            delay: 12000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onReInit = () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    };
    onReInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi]);

  // a11y: pausar autoplay al enfocar con teclado los controles.
  const getAutoplay = useCallback(
    () => emblaApi?.plugins?.()?.autoplay,
    [emblaApi],
  );
  const handleFocus = useCallback(() => getAutoplay()?.stop(), [getAutoplay]);
  const handleBlur = useCallback(
    (event) => {
      if (!sectionRef.current?.contains(event.relatedTarget)) {
        getAutoplay()?.play();
      }
    },
    [getAutoplay],
  );

  // Tri-state: si no hay documentos, la sección no se renderiza.
  if (!documentos || documentos.length === 0) return null;

  const showControls = documentos.length > 1;

  return (
    <section
      ref={sectionRef}
      aria-roledescription="carrusel"
      aria-label="Información importante"
      onFocusCapture={handleFocus}
      onBlurCapture={handleBlur}
      className="bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-10">
        <header className="mb-5">
          <span
            aria-hidden="true"
            className="mb-2 block h-1 w-9 rounded-full bg-[var(--color-dorado)]"
          />
          <h2 className="font-display text-xl font-bold tracking-tight text-[var(--color-text)] md:text-2xl">
            Información Importante
          </h2>
          <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-[var(--color-text-secondary)] md:text-sm">
            Documentos oficiales para consulta y descarga.
          </p>
        </header>

        <div className="relative">
          {/* Viewport embla: auto-avance + arrastre manual */}
          <div ref={emblaRef} className="overflow-hidden">
            <ul className="flex gap-2.5 sm:gap-3">
              {documentos.map((doc) => {
                const thumb = pdfThumb(doc.url);
                return (
                  <li
                    key={doc.id}
                    className="min-w-0 flex-[0_0_58%] sm:flex-[0_0_31%] lg:flex-[0_0_22%]"
                  >
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${doc.titulo} (PDF, nueva pestaña)`}
                      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-dorado)]/40 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dorado)] focus-visible:ring-offset-2"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-cream)]">
                        {thumb ? (
                          <Image
                            src={thumb}
                            alt={`Primera página de ${doc.titulo}`}
                            fill
                            sizes="(min-width: 1024px) 270px, (min-width: 640px) 31vw, 58vw"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[var(--color-dorado-700)]">
                            <FileText className="h-10 w-10" aria-hidden="true" />
                          </div>
                        )}
                        {/* velo inferior sutil para profundidad */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/10 to-transparent"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-cta-bg)] text-[var(--color-cta-text)] opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100"
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col gap-1 p-2">
                        <h3 className="line-clamp-2 text-[11px] font-semibold leading-snug tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-guinda)]">
                          {doc.titulo}
                        </h3>
                        <span className="mt-auto inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-dorado-700)]">
                          <FileText className="h-2.5 w-2.5" aria-hidden="true" />
                          PDF
                        </span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {showControls && (
            <>
              {/* Flechas (escritorio), estilo pulido como el hero */}
              <button
                type="button"
                aria-label="Documento anterior"
                onClick={scrollPrev}
                className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] shadow-md transition hover:border-[var(--color-dorado)] hover:text-[var(--color-dorado-700)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dorado)] focus-visible:ring-offset-2 md:inline-flex"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Documento siguiente"
                onClick={scrollNext}
                className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] shadow-md transition hover:border-[var(--color-dorado)] hover:text-[var(--color-dorado-700)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dorado)] focus-visible:ring-offset-2 md:inline-flex"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* Dots (mismo estilo animado del hero) */}
              <div
                role="tablist"
                aria-label="Selector de documento"
                className="mt-6 flex items-center justify-center gap-2"
              >
                {snaps.map((_, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <button
                      key={index}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Ir al grupo ${index + 1}`}
                      onClick={() => scrollTo(index)}
                      className="group flex h-8 min-w-[28px] items-center justify-center px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dorado)] focus-visible:ring-offset-2"
                    >
                      <motion.span
                        aria-hidden="true"
                        animate={{
                          width: isActive ? 26 : 7,
                          backgroundColor: isActive
                            ? "#B5732E"
                            : "rgba(35,41,46,0.22)",
                        }}
                        transition={{
                          duration: reduce ? 0 : 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-1.5 rounded-full"
                      />
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default InformacionImportante;
