"use client";

import { useState } from "react";
import { FileText, Eye } from "lucide-react";
import { PDFViewer } from "@/components/transparencia/PDFViewer";

// Tarjeta de documento SEvAC. CLIENT component: el disparador se crea AQUÍ (en
// el cliente) y el PDFViewer va CONTROLADO (open/onOpenChange) — patrón de
// PrivacyDialog. Pasar un <button> como `trigger` desde el Server Component de
// la página NO lo renderiza en el DOM (Radix asChild/Slot no clona un elemento
// serializado desde el server) → era la causa del "no abre".
// UX: toda la tarjeta es el disparador (mejor área táctil, ideal en celular),
// con indicador liquid glass (ojo + "Ver documento") y operable por teclado.
export function SevacDocumentCard({ doc, label, badgeClass, subtitle }) {
  const [open, setOpen] = useState(false);
  const disponible = Boolean(doc.url);

  const abrir = () => setOpen(true);
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrir();
    }
  };

  // Solo interactivo/enfocable si hay archivo. La tarjeta entera es role="button".
  const interactivo = disponible
    ? {
        role: "button",
        tabIndex: 0,
        onClick: abrir,
        onKeyDown,
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        "aria-label": `Ver documento: ${doc.titulo}`,
      }
    : {};

  return (
    <li className="flex">
      <div
        {...interactivo}
        className={`group glass-light--flat flex w-full flex-col gap-4 rounded-xl p-5 transition sm:flex-row sm:items-center ${
          disponible
            ? "cursor-pointer hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dorado)] focus-visible:ring-offset-2"
            : ""
        }`}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--color-guinda)]/10 text-[var(--color-guinda)]">
          <FileText className="h-5 w-5" aria-hidden="true" />
        </span>

        <div className="flex-1 leading-tight">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${badgeClass}`}
          >
            {label}
          </span>
          <p className="mt-2 font-display text-base font-semibold text-[var(--color-text)] md:text-lg">
            {doc.titulo}
          </p>
          {doc.descripcion && (
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              {doc.descripcion}
            </p>
          )}
          {(doc.anio != null || doc.trimestre != null) && (
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              {doc.anio != null && <>Ejercicio {doc.anio}</>}
              {doc.anio != null && doc.trimestre != null && " · "}
              {doc.trimestre != null && <>Trim. {doc.trimestre}</>}
            </p>
          )}
        </div>

        {/* Indicador liquid glass — la tarjeta entera es el disparador → aria-hidden */}
        {disponible ? (
          <span
            aria-hidden="true"
            className="glass-light inline-flex shrink-0 items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition-transform duration-200 group-hover:scale-105 sm:self-center"
          >
            <Eye className="h-4 w-4" />
            Ver documento
          </span>
        ) : (
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[var(--color-text-muted)]/15 px-4 py-2 text-sm font-medium italic text-[var(--color-text-muted)] sm:self-center">
            Próximamente disponible
          </span>
        )}
      </div>

      {disponible && (
        <PDFViewer
          pdfUrl={doc.url}
          title={doc.titulo}
          subtitle={subtitle}
          open={open}
          onOpenChange={setOpen}
        />
      )}
    </li>
  );
}

export default SevacDocumentCard;
