"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";

// El footer global se muestra en TODAS las páginas EXCEPTO el home: en el home
// lo provee la sección Historia (modo overlay, sobre su imagen sticky), así que
// aquí se oculta para no duplicarlo. La lógica de ruta vive solo aquí; Footer
// queda puro (presentacional) para poder reutilizarlo dentro de Historia.
export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Footer />;
}

export default SiteFooter;
