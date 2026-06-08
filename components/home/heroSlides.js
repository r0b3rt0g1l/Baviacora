import { heroImages } from "@/lib/unsplashImages";
import { municipalConfig } from "@/lib/municipalConfig";

const { identidad } = municipalConfig;

// Slides institucionales neutros para Baviácora. Sin atractivos ni narrativa
// inventada; el contenido turístico/histórico entra después. Cada `id` debe
// existir en heroImages (lib/unsplashImages) para resolver la imagen de fondo.
const META = [
  {
    id: "bienvenida",
    eyebrow: identidad.estado,
    title: `Bienvenidos a ${identidad.nombreCorto}`,
    subtitle: `Portal oficial del ${identidad.nombreOficial}.`,
    cta: { label: "Conoce el Gobierno", href: "/gobierno/directorio" },
    align: "center",
  },
  {
    id: "gobierno",
    eyebrow: `Administración ${identidad.administracion}`,
    title: "Gobierno Municipal",
    subtitle:
      "Una administración cercana a la gente, con transparencia y rendición de cuentas.",
    cta: { label: "Directorio del Cabildo", href: "/gobierno/directorio" },
    align: "center",
  },
  {
    id: "sierra",
    eyebrow: "Transparencia",
    title: "Información pública",
    subtitle:
      "Consulta los documentos y la información oficial del Ayuntamiento.",
    cta: { label: "Ir a Transparencia", href: "/transparencia" },
    align: "center",
  },
];

const imagesById = Object.fromEntries(heroImages.map((i) => [i.id, i]));

export const heroSlides = META.map((meta) => {
  const img = imagesById[meta.id];
  return {
    ...meta,
    image: img?.src ?? null,
    alt: img?.alt ?? meta.title,
    credit: img?.credit ?? null,
  };
});

export default heroSlides;
