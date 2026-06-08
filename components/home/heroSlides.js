import { heroImages } from "@/lib/unsplashImages";

const META = [
  {
    id: "bienvenida",
    eyebrow: "Lugar de la Calavera",
    title: "Bienvenidos a Arivechi",
    subtitle:
      "Un municipio de la Sierra Madre Occidental con historia, tradición ópata y paisajes únicos.",
    cta: { label: "Conoce el Municipio", href: "/turismo" },
    align: "center",
  },
  {
    id: "patrimonio",
    eyebrow: "Patrimonio histórico",
    title: "Templo de Santa Rosalía",
    subtitle:
      "Iglesia de dos torres, sede de la celebración patronal del 4 de septiembre.",
    cta: { label: "Descubre nuestra historia", href: "/turismo" },
    align: "left",
  },
  {
    id: "sierra",
    eyebrow: "Naturaleza",
    title: "Sierra Madre Occidental",
    subtitle:
      "Paisajes que van de los 400 a los 2,200 metros sobre el nivel del mar.",
    cta: { label: "Explora el turismo", href: "/turismo" },
    align: "center",
  },
  {
    id: "tradicion",
    eyebrow: "Cultura",
    title: "Tradición Ópata",
    subtitle:
      "Arivechi conserva el legado de los pueblos ópatas en su lengua, fiestas y gastronomía.",
    cta: { label: "Conoce nuestra cultura", href: "/turismo" },
    align: "left",
  },
  {
    id: "rio",
    eyebrow: "Naturaleza",
    title: "Río Sahuaripa",
    subtitle:
      "Cauce que cruza el municipio de sur a norte y da vida a la región serrana.",
    cta: { label: "Naturaleza protegida", href: "/turismo/rio-sahuaripa" },
    align: "center",
  },
  {
    id: "kiosco",
    eyebrow: "Arquitectura",
    title: "Kiosco Morisco",
    subtitle:
      "Réplica del Pabellón Morisco de Santa María la Ribera, símbolo de la Plaza Principal.",
    cta: { label: "Atractivos turísticos", href: "/turismo" },
    align: "right",
  },
  {
    id: "gobierno",
    eyebrow: "Administración 2024-2027",
    title: "Gobierno Municipal de Arivechi",
    subtitle:
      "Una administración cercana a la gente, con transparencia, rendición de cuentas y trabajo en equipo.",
    cta: { label: "Conoce el Gobierno", href: "/gobierno/directorio" },
    align: "center",
  },
];

const imagesById = Object.fromEntries(heroImages.map((i) => [i.id, i]));

export const heroSlides = META.map((meta) => {
  const img = imagesById[meta.id];
  return {
    ...meta,
    image: img.src,
    alt: img.alt,
    credit: img.credit,
  };
});

export default heroSlides;
