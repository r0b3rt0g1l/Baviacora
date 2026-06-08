// Noticias y comunicados de respaldo (fallback) de Baviácora.
// Vacío a propósito: el contenido entra por el CMS (FASE 3). NO se inventan
// noticias. Las categorías se conservan para la UI de filtros/tabs.

export const categoriasNoticias = [
  "Obras Públicas",
  "Cultura",
  "Salud",
  "Educación",
  "Seguridad",
  "Turismo",
  "Desarrollo Social",
];

export const categoriasComunicados = [
  "Tesorería",
  "Secretaría",
  "Aviso Oficial",
  "Convocatoria",
];

export const noticias = [];

export const comunicados = [];

export function getNoticiaPorSlug(slug) {
  return [...noticias, ...comunicados].find((n) => n.slug === slug) || null;
}

export function getNoticiasRecientes(limit = 3) {
  return noticias.slice(0, limit);
}

export function getNoticiasRelacionadas(slugActual, limit = 3) {
  return noticias.filter((n) => n.slug !== slugActual).slice(0, limit);
}

const noticiasModule = {
  categoriasNoticias,
  categoriasComunicados,
  noticias,
  comunicados,
  getNoticiaPorSlug,
  getNoticiasRecientes,
  getNoticiasRelacionadas,
};

export default noticiasModule;
