"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  Sun,
  CloudSun,
  Cloud,
  Cloudy,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Thermometer,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { municipalConfig } from "@/lib/municipalConfig";

// Componente AGNÓSTICO (base compartida): lee coordenadas de municipalConfig, así
// que el mismo archivo sirve a cualquier municipio. Robustez como requisito:
// el reloj NUNCA depende de la API; si el clima falla o no hay coordenadas, la
// barra sigue mostrando fecha + hora y oculta solo el clima (sin error visible).

const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

// Código WMO de Open-Meteo → icono lucide (SVG) + color + descripción en español.
// Iconos con color vivo pero elegante sobre el glass; default seguro.
function weatherInfo(code) {
  switch (code) {
    case 0:
      return { Icon: Sun, color: "text-amber-500", desc: "Despejado" };
    case 1:
      return { Icon: CloudSun, color: "text-amber-500", desc: "Mayormente despejado" };
    case 2:
      return { Icon: Cloudy, color: "text-slate-300", desc: "Parcialmente nublado" };
    case 3:
      return { Icon: Cloud, color: "text-slate-300", desc: "Nublado" };
    case 45:
    case 48:
      return { Icon: CloudFog, color: "text-slate-300", desc: "Niebla" };
    case 51:
    case 53:
    case 55:
      return { Icon: CloudDrizzle, color: "text-sky-400", desc: "Llovizna" };
    case 56:
    case 57:
      return { Icon: CloudDrizzle, color: "text-sky-400", desc: "Llovizna helada" };
    case 61:
    case 63:
    case 65:
      return { Icon: CloudRain, color: "text-sky-400", desc: "Lluvia" };
    case 66:
    case 67:
      return { Icon: CloudRain, color: "text-sky-400", desc: "Lluvia helada" };
    case 71:
    case 73:
    case 75:
      return { Icon: CloudSnow, color: "text-sky-400", desc: "Nieve" };
    case 77:
      return { Icon: CloudSnow, color: "text-sky-400", desc: "Cinarra" };
    case 80:
    case 81:
    case 82:
      return { Icon: CloudRain, color: "text-sky-400", desc: "Chubascos" };
    case 85:
    case 86:
      return { Icon: CloudSnow, color: "text-sky-400", desc: "Chubascos de nieve" };
    case 95:
      return { Icon: CloudLightning, color: "text-violet-500", desc: "Tormenta" };
    case 96:
    case 99:
      return { Icon: CloudLightning, color: "text-violet-500", desc: "Tormenta con granizo" };
    default:
      return { Icon: Thermometer, color: "text-slate-300", desc: "" };
  }
}

function formatFecha(d) {
  return `${DIAS[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]}, ${d.getFullYear()}`;
}

function formatHora(d) {
  return d.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

export function TopBar() {
  const reduce = useReducedMotion();

  // Reloj: arranca en null para NO renderizar hora en SSR (evita hydration
  // mismatch); se llena al montar en el cliente.
  const [now, setNow] = useState(null);
  // Clima: null = oculto (sin coordenadas, error de API, o aún cargando). La
  // barra nunca depende de este estado para funcionar.
  const [weather, setWeather] = useState(null);

  // Reloj en tiempo real — independiente de la API. Tick cada segundo, cleanup
  // del intervalo al desmontar.
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Clima al montar — robusto: si no hay coordenadas o la API falla, se queda
  // oculto y la barra sigue con fecha + hora.
  useEffect(() => {
    const { lat, lon } = municipalConfig.datos?.coordenadas ?? {};
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;

    const controller = new AbortController();

    (async () => {
      try {
        // Open-Meteo API moderna: el parámetro correcto es weather_code.
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=America/Hermosillo`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) return;
        const json = await res.json();
        const c = json?.current;
        const temp = c?.temperature_2m;
        // Tolerante a ambas variantes de la key.
        const code = c?.weather_code ?? c?.weathercode;
        if (typeof temp !== "number" || typeof code !== "number") return;
        setWeather({ temp, code });
      } catch {
        // Silencioso a propósito: el clima se oculta, la barra no se rompe.
      }
    })();

    return () => controller.abort();
  }, []);

  const fecha = now ? formatFecha(now) : "";
  const hora = now ? formatHora(now) : "";
  const clima = weather ? weatherInfo(weather.code) : null;

  // Bloque de clima reutilizable: compact = solo icono + temperatura (móvil,
  // junto a la hora); full = icono + condición + temperatura (desktop, derecha).
  const renderWeather = (compact) => {
    if (!clima) return null;
    const { Icon, color } = clima;
    return (
      <motion.span
        initial={reduce ? false : { opacity: 0, x: compact ? 0 : 6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="inline-flex items-center gap-1.5 font-medium"
      >
        <motion.span
          initial={reduce ? false : { scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 16, delay: 0.06 }}
          className="inline-flex"
        >
          <Icon
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 ${color} drop-shadow-[0_1px_1px_rgba(0,0,0,0.18)]`}
          />
        </motion.span>
        {!compact && clima.desc && (
          <span className="text-xs font-medium">{clima.desc}</span>
        )}
        <span className="text-[13px] font-semibold tabular-nums sm:text-sm">
          {Math.round(weather.temp)}°C
        </span>
      </motion.span>
    );
  };

  const divider = (
    <span
      aria-hidden="true"
      className="hidden h-4 w-px bg-white/20 sm:block"
    />
  );

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      // Liquid glass NEUTRO (sistema --glass-*): vidrio gris/carbón translúcido,
      // SIN tinte cobre. La barra es persistente (sobre hero oscuro y luego sobre
      // contenido claro) → variante DARK (una light desaparecería sobre blanco).
      // Texto e iconos en blanco; el borde-hairline inferior separa al scrollear.
      className="relative border-b border-[var(--glass-border-dark)] text-white shadow-[0_4px_16px_-8px_rgba(0,0,0,0.30)]"
      style={{
        backgroundColor: "var(--glass-bg-dark)",
        backdropFilter:
          "blur(var(--glass-blur-dark)) saturate(var(--glass-saturate-dark))",
        WebkitBackdropFilter:
          "blur(var(--glass-blur-dark)) saturate(var(--glass-saturate-dark))",
      }}
    >
      {/* Sheen de vidrio: degradado blanco de arriba hacia abajo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-white/5 to-transparent"
      />
      {/* Gloss: línea de brillo fina en el borde superior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/50"
      />
      <div className="relative mx-auto grid h-9 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:h-10 sm:px-6">
        {/* IZQUIERDA: fecha (oculta en móvil) */}
        <div className="hidden min-w-0 items-center gap-2 sm:flex">
          <CalendarDays
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 text-white/70"
          />
          <span className="truncate text-xs font-medium tracking-wide">{fecha}</span>
        </div>

        {/* CENTRO: hora destacada (+ clima compacto junto a ella en móvil) */}
        <div className="col-start-2 flex items-center justify-center gap-2.5">
          {divider}
          <span className="inline-flex items-center gap-1.5">
            <Clock
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-white/70"
            />
            <span className="text-[13px] font-semibold tabular-nums tracking-tight sm:text-sm">
              {hora}
            </span>
          </span>
          <span className="sm:hidden">{renderWeather(true)}</span>
          {divider}
        </div>

        {/* DERECHA: clima completo (oculto en móvil) */}
        <div className="hidden items-center justify-end sm:flex">
          {renderWeather(false)}
        </div>
      </div>
    </motion.div>
  );
}

export default TopBar;
