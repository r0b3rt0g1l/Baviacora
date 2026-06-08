"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Mountain,
  MapPin,
  Users,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { hitos } from "@/lib/hitos";

const HERO_IMAGE = "/images/arivechi/panorama-sierra-madre.jpg";
const TEXT_SHADOW = "0 2px 8px rgba(0,0,0,0.7)";

const features = [
  {
    icon: Calendar,
    label: "Fundación",
    value: "1627",
    detail: "Misión San Javier",
  },
  {
    icon: Mountain,
    label: "Altitud",
    value: "400 - 2,200",
    detail: "msnm",
  },
  {
    icon: MapPin,
    label: "Superficie",
    value: "662.58",
    detail: "km²",
  },
  {
    icon: Users,
    label: "Población",
    value: "1,177",
    detail: "municipio · 635 cabecera",
  },
];

const cardsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};
const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function HeroBlock({ reduce }) {
  return (
    <div
      className="relative flex min-h-[80vh] items-end px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-20"
      role="region"
      aria-labelledby="historia-titulo"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 60 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-30%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
        style={{ textShadow: TEXT_SHADOW }}
      >
        <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-dorado)]">
          <span
            aria-hidden="true"
            className="block h-px w-8 bg-[var(--color-dorado)]"
          />
          Historia
        </p>
        <h2
          id="historia-titulo"
          className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance text-white lg:text-7xl"
        >
          Lugar de las Calaveras
        </h2>
        <p className="mt-5 max-w-xl text-base text-white/85 lg:text-lg">
          Un pueblo con raíces ópatas en la Sierra Madre Occidental.
        </p>
      </motion.div>
    </div>
  );
}

function NarrativeBlock({ eyebrow, children, reduce, id, dropCap = false }) {
  return (
    <motion.article
      id={id}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex min-h-[60vh] flex-col justify-center rounded-xl border border-white/5 bg-black/40 p-7 backdrop-blur-md lg:p-9"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-dorado)]">
        {eyebrow}
      </p>
      {dropCap ? (
        <p className="mt-3 font-serif text-base leading-snug text-white lg:text-lg first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-[var(--color-dorado)]">
          {children}
        </p>
      ) : (
        <p className="mt-3 font-serif text-base leading-snug text-white lg:text-lg">
          {children}
        </p>
      )}
    </motion.article>
  );
}

function HitoItem({ hito, reduce, isLast }) {
  return (
    <motion.li
      role="region"
      aria-label={`Hito ${hito.ano}: ${hito.titulo}`}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex min-h-[40vh] flex-col justify-center pl-10 ${
        isLast ? "" : "pb-8"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-[var(--color-dorado)] ring-4 ring-black/40"
      />
      <div className="rounded-lg border border-white/5 bg-black/40 px-5 py-4 backdrop-blur-sm">
        <p className="font-display text-4xl font-bold leading-none text-[var(--color-dorado)] lg:text-5xl">
          {hito.ano}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white lg:text-xl">
          {hito.titulo}
        </h3>
        <p className="mt-2 font-serif text-sm leading-snug text-white/85 lg:text-base">
          {hito.descripcion}
        </p>
      </div>
    </motion.li>
  );
}

function TimelineColumn({ reduce }) {
  return (
    <div className="relative">
      <ol className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[7px] top-4 bottom-4 w-px bg-[var(--color-dorado)]/40"
        />
        {hitos.map((hito, index) => (
          <HitoItem
            key={hito.ano}
            hito={hito}
            reduce={reduce}
            isLast={index === hitos.length - 1}
          />
        ))}
      </ol>
    </div>
  );
}

export function ConoceArivechi() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* HISTORIA — sticky scroll storytelling NYT-style con 2 columnas */}
      <section
        id="historia"
        aria-label="Historia de Arivechi"
        className="relative bg-black"
      >
        {/* Imagen sticky base — Sierra Madre */}
        <div
          className={
            reduce
              ? "relative h-dvh w-full overflow-hidden"
              : "sticky top-0 h-dvh w-full overflow-hidden"
          }
        >
          <Image
            src={HERO_IMAGE}
            alt="Panorámica de la Sierra Madre Occidental con nubes flotando entre las montañas"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[rgba(107,22,41,0.20)]"
          />
        </div>

        {/* Contenido superpuesto al sticky */}
        <div
          className={reduce ? "relative z-10" : "relative z-10 -mt-[100dvh]"}
        >
          <HeroBlock reduce={reduce} />

          {/* Grid 2 columnas: narrativa izq + timeline der */}
          <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Columna IZQ: 4 bloques narrativos */}
              <div className="space-y-8 lg:space-y-10">
                <NarrativeBlock
                  id="historia-origen"
                  eyebrow="Origen"
                  reduce={reduce}
                  dropCap
                >
                  Fundado en 1627 por el misionero jesuita Pedro Méndez bajo el
                  nombre de San Javier de Arivechi, una misión religiosa
                  establecida para evangelizar a las tribus ópatas que habitaban
                  la región.
                </NarrativeBlock>

                <NarrativeBlock
                  id="historia-significado"
                  eyebrow="Significado"
                  reduce={reduce}
                >
                  Su nombre proviene del idioma ópata Arivetzi, que significa
                  &ldquo;Lugar de las Calaveras&rdquo; — de las raíces Arive
                  (calavera) y Tzi (lugar). Hoy alberga 635 habitantes en la
                  cabecera y 1,177 en todo el municipio.
                </NarrativeBlock>

                <NarrativeBlock
                  id="historia-patrimonio"
                  eyebrow="Patrimonio"
                  reduce={reduce}
                >
                  Su plaza monumental ostenta una singular obra arquitectónica:
                  un kiosco que es réplica del Pabellón Morisco de la colonia
                  Santa María la Ribera en la Ciudad de México, con vitrales
                  que retratan paisajes, fauna y flora locales.
                </NarrativeBlock>

                <NarrativeBlock
                  id="historia-naturaleza"
                  eyebrow="Naturaleza"
                  reduce={reduce}
                >
                  En 2010, la zona del Cerro de las Conchas fue decretada Área
                  Natural Protegida por su biodiversidad endémica y sus
                  formaciones geológicas únicas en el noroeste de México.
                </NarrativeBlock>
              </div>

              {/* Columna DER: timeline 6 hitos */}
              <TimelineColumn reduce={reduce} />
            </div>
          </div>

          {/* Transición Historia → Datos: últimos 120px funden a guinda (T30) */}
          <div
            aria-hidden="true"
            className="pointer-events-none h-32 w-full bg-gradient-to-b from-transparent to-[var(--color-guinda)]"
          />
        </div>
      </section>

      {/* DATOS DEL MUNICIPIO — sección guinda preservada de T22 */}
      <section
        aria-label="Datos del municipio"
        className="bg-[var(--color-guinda)]"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <header className="mb-8 max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-dorado)]">
              <span
                aria-hidden="true"
                className="block h-px w-8 bg-[var(--color-dorado)]"
              />
              Datos del municipio
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              Arivechi en cifras
            </h3>
          </header>

          <motion.dl
            variants={reduce ? undefined : cardsContainer}
            initial={reduce ? undefined : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {features.map(({ icon: Icon, label, value, detail }) => (
              <motion.div
                key={label}
                variants={reduce ? undefined : cardItem}
                className="rounded-xl border border-[var(--color-dorado)]/30 bg-[var(--color-guinda-deep)] p-5 text-left shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-dorado)]/70 hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.5)]"
              >
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 text-[var(--color-dorado)]"
                />
                <dt className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-cream)]/70">
                  {label}
                </dt>
                <dd className="mt-1 font-display text-lg font-bold text-[var(--color-dorado)] md:text-xl">
                  {value}
                </dd>
                <dd className="text-[11px] text-[var(--color-cream)]/80">
                  {detail}
                </dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/turismo"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-dorado)] px-6 py-3 text-sm font-semibold text-[var(--color-guinda-deep)] shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#E5B62A] hover:shadow-lg"
            >
              Descubre el turismo
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/gobierno/directorio"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-dorado)] hover:text-[var(--color-dorado)]"
            >
              Conoce el Gobierno
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConoceArivechi;
