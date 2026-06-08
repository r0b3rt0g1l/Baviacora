// Atractivos turísticos de Baviácora — <<PENDIENTE: contenido oficial>>.
// Vacío a propósito: NO se inventan atractivos. Cuando el municipio entregue
// el contenido, poblar este arreglo con la misma forma usada en Arivechi-v2
// ({ slug, nombre, tipo, ubicacion, descripcionCorta, descripcionLarga,
//   portada, galeria, coordenadas, horario, destacado }).
export const atractivos = [];

export function getAtractivoPorSlug(slug) {
  return atractivos.find((a) => a.slug === slug) || null;
}

export function getAtractivosCercanos(slugActual, limit = 3) {
  return atractivos.filter((a) => a.slug !== slugActual).slice(0, limit);
}

// <<PENDIENTE: gastronomía y artesanías típicas de Baviácora>>
export const gastronomia = { platillos: [], dulces: [] };
export const artesanias = [];

export default atractivos;
