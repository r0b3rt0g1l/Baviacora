import { noticias, getNoticiasRecientes } from "@/lib/noticias";
import { getNoticiaImageByCategoria } from "@/lib/unsplashImages";
import { getStockImage } from "@/lib/stockImage";

const SR2026_SLUG = "convocatoria-fiestas-santa-rosalia-2026";

function pickImage({ id, categoria }) {
  const img = categoria
    ? getNoticiaImageByCategoria(categoria)
    : null;
  return {
    src: img?.src ?? getStockImage(id, 1280, 720),
    alt: img?.alt ?? "",
  };
}

const sr2026 = noticias.find((n) => n.slug === SR2026_SLUG);
const sr2026Img = pickImage({ id: SR2026_SLUG, categoria: "Cultura" });

const sr2026Banner = {
  id: SR2026_SLUG,
  tipo: "comunicado",
  titulo: "Convocatoria para las Fiestas de Santa Rosalía 2026",
  resumen:
    "La Dirección de Cultura invita a comités vecinales y grupos tradicionales a sumarse a la programación oficial del 4 de septiembre.",
  imagen: sr2026Img.src,
  imagenAlt: sr2026Img.alt,
  link: `/acciones-de-gobierno/noticias/${SR2026_SLUG}`,
  fecha: sr2026?.fecha ?? "2026-04-15",
};

const noticiasDestacadas = getNoticiasRecientes(4)
  .filter((n) => n.slug !== SR2026_SLUG)
  .slice(0, 3)
  .map((n) => {
    const img = pickImage({ id: n.slug, categoria: n.categoria });
    return {
      id: n.slug,
      tipo: "noticia",
      titulo: n.titulo,
      resumen: n.extracto,
      imagen: img.src,
      imagenAlt: img.alt,
      link: `/acciones-de-gobierno/noticias/${n.slug}`,
      fecha: n.fecha,
    };
  });

export const bannersUnificados = [sr2026Banner, ...noticiasDestacadas];
