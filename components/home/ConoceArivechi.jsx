"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, MapPin, Landmark, Hash } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { municipalConfig } from "@/lib/municipalConfig";

const HERO_IMAGE = "/images/baviacora/cultura-baviacora.jpg";
const TEXT_SHADOW = "0 2px 8px rgba(0,0,0,0.7)";

// Datos del municipio. SOLO cifras confirmadas; lo no confirmado NO se inventa.
const features = [
  { icon: Users, label: "Población", value: "3,191", detail: "habitantes · INEGI 2020" },
  { icon: MapPin, label: "Cabecera", value: "Baviácora", detail: "Estado de Sonora" },
  { icon: Landmark, label: "Administración", value: "2024-2027", detail: "H. Ayuntamiento" },
  { icon: Hash, label: "Código Postal", value: "84941", detail: "LADA 623" },
];

const cardsContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function ConoceArivechi() {
  const reduce = useReducedMotion();
  const { identidad } = municipalConfig;

  return (
    <>
      {/* BIENVENIDA — imagen del municipio + título */}
      <section id="historia" aria-label="Conoce Baviácora" className="relative bg-black">
        <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Vista del municipio de Baviácora, Sonora"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />
          <div aria-hidden="true" className="absolute inset-0 bg-[rgba(45,79,27,0.22)]" />
          <div className="absolute inset-0 flex items-end px-6 pb-14 sm:px-10 lg:px-16">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl"
              style={{ textShadow: TEXT_SHADOW }}
            >
              <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-dorado)]">
                <span aria-hidden="true" className="block h-px w-8 bg-[var(--color-dorado)]" />
                Conoce el municipio
              </p>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white lg:text-7xl">
                {identidad.nombreCorto}
              </h2>
              <p className="mt-5 max-w-xl text-base text-white/85 lg:text-lg">
                Portal oficial del {identidad.nombreOficial}, en el estado de {identidad.estado}.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESEÑA HISTÓRICA — pendiente (placeholder limpio, sin datos inventados) */}
      <section aria-label="Reseña histórica" className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-guinda)]">
            Historia
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[var(--color-guinda-deep)] md:text-3xl">
            Reseña histórica
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
            La reseña histórica oficial de {identidad.nombreCorto} se publicará próximamente.
          </p>
        </div>
      </section>

      {/* DATOS DEL MUNICIPIO */}
      <section aria-label="Datos del municipio" className="bg-[var(--color-guinda)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <header className="mb-8 max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-dorado)]">
              <span aria-hidden="true" className="block h-px w-8 bg-[var(--color-dorado)]" />
              Datos del municipio
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              {identidad.nombreCorto} en cifras
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
                className="rounded-xl border border-[var(--color-dorado)]/30 bg-[var(--color-guinda-deep)] p-5 text-left shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-dorado)]/70"
              >
                <Icon aria-hidden="true" className="h-5 w-5 text-[var(--color-dorado)]" />
                <dt className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-cream)]/70">
                  {label}
                </dt>
                <dd className="mt-1 font-display text-lg font-bold text-[var(--color-dorado)] md:text-xl">
                  {value}
                </dd>
                <dd className="text-[11px] text-[var(--color-cream)]/80">{detail}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/gobierno/directorio"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-dorado)] px-6 py-3 text-sm font-semibold text-[var(--color-guinda-deep)] shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Conoce el Gobierno
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/transparencia"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-dorado)] hover:text-[var(--color-dorado)]"
            >
              Ir a Transparencia
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConoceArivechi;
