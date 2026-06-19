"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// Íconos Phosphor SOLO en esta sección (estadísticas del home). El resto del
// sitio sigue con lucide.
import {
  UsersThree,
  MapTrifold,
  MapPin,
  ClipboardText,
  HardHat,
  Money,
} from "@phosphor-icons/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { municipalConfig } from "@/lib/municipalConfig";

// Fila de 6 estadísticas. Reales (de municipalConfig): Población, Superficie,
// Comunidades. Las otras 3 quedan "Por designar" hasta confirmarse (regla del
// proyecto: no inventar datos).
const poblacion = municipalConfig.datos.poblacion2020;
const superficie = municipalConfig.datos.superficieKm2;
const comunidades = municipalConfig.datos.comunidades;
const stats = [
  {
    icon: UsersThree,
    label: "Población",
    value: poblacion ? poblacion.toLocaleString("es-MX") : "—",
    detail: "habitantes (INEGI 2020)",
  },
  {
    icon: MapTrifold,
    label: "Superficie",
    value: superficie ? `${superficie} km²` : "—",
    detail: "extensión territorial",
  },
  {
    icon: MapPin,
    label: "Comunidades",
    value: comunidades ?? "—",
    detail: "localidades",
  },
  { icon: ClipboardText, label: "Programas", value: "Por designar", pending: true },
  { icon: HardHat, label: "Obras realizadas", value: "Por designar", pending: true },
  { icon: Money, label: "Inversión pública", value: "Por designar", pending: true },
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

export function Estadisticas() {
  const reduce = useReducedMotion();

  return (
    <section aria-label="Datos del municipio" className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 pb-2">
        {/* Barra única: contenedor blanco redondeado con 6 celdas divididas por
            líneas sutiles (gap-px sobre el color de línea). Más angosta (max-w-5xl)
            y centrada. Sigue flotando sobre el hero con el overlap actual. */}
        <motion.dl
          variants={reduce ? undefined : cardsContainer}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 mx-auto -mt-8 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] sm:grid-cols-3 lg:-mt-12 lg:grid-cols-6"
        >
          {stats.map(({ icon: Icon, label, value, detail, pending }) => (
            <motion.div
              key={label}
              variants={reduce ? undefined : cardItem}
              className="flex flex-col items-center gap-1 bg-white p-4 text-center"
            >
              <Icon
                aria-hidden="true"
                weight="duotone"
                className="h-5 w-5 text-[var(--color-dorado)]"
              />
              <dt className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                {label}
              </dt>
              <dd
                className={`text-lg font-bold md:text-xl ${
                  pending
                    ? "italic text-[var(--color-text-muted)]"
                    : "text-[var(--color-text)]"
                }`}
              >
                {value}
              </dd>
              {detail && (
                <dd className="text-[11px] leading-tight text-[var(--color-text-secondary)]">
                  {detail}
                </dd>
              )}
            </motion.div>
          ))}
        </motion.dl>

        <div className="mx-auto mt-4 flex max-w-5xl justify-end">
          <Link
            href="/turismo"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-cta-bg)] px-6 py-3 text-sm font-semibold text-[var(--color-cta-text)] shadow-md transition-all duration-200 hover:scale-105 hover:bg-[var(--color-cta-bg-hover)] hover:shadow-lg"
          >
            Descubre el turismo
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Estadisticas;
