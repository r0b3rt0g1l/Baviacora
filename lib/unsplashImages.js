import { getStockImage } from "@/lib/stockImage";

// Imagenes tematizadas para todo el portal. Antes vivian como photo IDs
// hardcoded de Unsplash, pero esos IDs no eran verificablemente de
// Mexico/Sonora rural. Ahora se piden por tag a Lorem Flickr.
//
// Cuando el municipio entregue fotos reales, basta con sustituir cada
// `src` por la URL de Cloudinary (o /public/images/...) manteniendo la
// misma forma { src, alt, credit }.

const HD = { w: 1920, h: 1080 };
const MD = { w: 1280, h: 720 };
const SM = { w: 900, h: 600 };

function img(tags, size, alt) {
  return {
    src: getStockImage(tags, size.w, size.h),
    alt,
    credit: "Lorem Flickr · Tags: " + tags,
  };
}

export const heroImages = [
  {
    id: "bienvenida",
    src: "/images/arivechi/paisaje-sierra-madre.jpg",
    alt: "Paisaje panorámico de la Sierra Madre Occidental con vegetación de matorral en primer plano y nubes cúmulus al fondo",
    credit: "Wikimedia Commons · Sierra Madre Occidental",
  },
  {
    id: "patrimonio",
    src: "/images/hitos/parroquia-rosario-rayon.jpg",
    alt: "Parroquia colonial blanca con campanario y frontón en Rayón, Sonora",
    credit: "Wikimedia Commons · Parroquia Nuestra Señora del Rosario",
  },
  {
    id: "sierra",
    src: "/images/hitos/sierra-madre-paisaje.jpg",
    alt: "Vista de paisaje serrano de la Sierra Madre Occidental con árboles y valle al fondo",
    credit: "Wikimedia Commons · La Sierra Madre Occidental",
  },
  {
    id: "tradicion",
    src: "/images/sonora/alamos-vista-mirador.jpg",
    alt: "Vista panorámica desde mirador de Álamos, Sonora — pueblo colonial enclavado en valle con sierra al fondo",
    credit: "Wikimedia Commons · Vista mirador Álamos",
  },
  {
    id: "rio",
    src: "/images/sonora/arboles-en-el-rio.jpg",
    alt: "Río de Sonora bordeado por hilera de árboles con vegetación ribereña",
    credit: "Wikimedia Commons · Árboles en el río",
  },
  {
    id: "kiosco",
    src: "/images/arivechi/quiosco-morisco.jpg",
    alt: "Quiosco morisco de la Plaza Principal de Arivechi, Sonora",
    credit: "Wikimedia Commons · Quiosco de Arivechi",
  },
  {
    id: "gobierno",
    src: "/images/hitos/palacio-gobierno-hermosillo.jpg",
    alt: "Fachada neoclásica del Palacio de Gobierno de Sonora en Hermosillo",
    credit: "Wikimedia Commons · Palacio de Gobierno, Hermosillo",
  },
];

export const conoceArivechi = img(
  "mexico,village,colonial,sierra,pueblo",
  MD,
  "Pueblo serrano del norte de Mexico con arquitectura tradicional",
);

export const atractivosImages = {
  "kiosco-morisco": [
    img(
      "mexico,kiosk,bandstand,plaza,architecture",
      HD,
      "Kiosco morisco octagonal en plaza publica con detalles arquitectonicos",
    ),
    img(
      "mexico,plaza,zocalo,trees",
      MD,
      "Plaza central de un pueblo mexicano con kiosko y arboleda",
    ),
    img(
      "mexico,arches,colonial,architecture",
      MD,
      "Detalle de arquitectura mexicana tradicional con arcadas",
    ),
  ],
  "templo-santa-rosalia": [
    img(
      "mexico,colonial,church,facade,catholic",
      HD,
      "Iglesia colonial mexicana con dos torres simetricas",
    ),
    img(
      "mexico,church,bell-tower,architecture",
      MD,
      "Detalle arquitectonico de iglesia catolica tradicional",
    ),
    img(
      "mexico,church,interior,altar,catholic",
      MD,
      "Interior iluminado de un templo catolico con altar central",
    ),
  ],
  "cerro-de-las-conchas": [
    img(
      "sonora,desert,hill,sierra,vegetation",
      HD,
      "Cerro de la sierra con vegetacion seca propia del desierto sonorense",
    ),
    img(
      "sierra-madre,mountain,sunrise,mexico",
      MD,
      "Sierra Madre Occidental al amanecer con luz dorada",
    ),
    img(
      "mexico,mountain,rocks,landscape",
      MD,
      "Paisaje serrano con formaciones rocosas",
    ),
  ],
  "rio-sahuaripa": [
    img(
      "mexico,river,canyon,sierra,water",
      HD,
      "Rio de montana corriendo entre formaciones rocosas y vegetacion",
    ),
    img(
      "mexico,canyon,cliffs,river",
      MD,
      "Canon con rio al fondo y paredes rocosas a los lados",
    ),
    img(
      "mexico,riverbank,trees,nature",
      MD,
      "Vegetacion riberena a lo largo de un cauce de montana",
    ),
  ],
  "cerro-de-los-pilares": [
    img(
      "sonora,sierra,mountain,rocks,desert",
      HD,
      "Formaciones rocosas en cordillera del norte de Mexico",
    ),
    img(
      "mexico,rock,pillars,geology,nature",
      MD,
      "Pilares naturales de roca destacando en paisaje serrano",
    ),
    img(
      "mexico,sierra,sunset,hill",
      MD,
      "Cerro serrano con luz lateral del atardecer",
    ),
  ],
  "fiesta-santa-rosalia": [
    img(
      "mexico,festival,papel-picado,plaza,celebration",
      HD,
      "Festival tradicional mexicano con personas y banderines de colores",
    ),
    img(
      "mexico,traditional,dance,costume,folklore",
      MD,
      "Danza tradicional con vestimenta colorida en festividad mexicana",
    ),
    img(
      "mexico,fiesta,patronal,night,plaza,lights",
      MD,
      "Fiesta patronal en plaza mexicana con iluminacion nocturna",
    ),
  ],
};

export const noticiaPlaceholderImages = {
  "obras-publicas": img(
    "mexico,road,construction,rural,machinery",
    SM,
    "Maquinaria trabajando en obras publicas de un camino rural",
  ),
  cultura: img(
    "mexico,culture,traditional,celebration,folklore",
    SM,
    "Celebracion cultural con vestimenta tradicional mexicana",
  ),
  salud: img(
    "mexico,health,clinic,community,vaccination",
    SM,
    "Personal de salud durante jornada de vacunacion comunitaria",
  ),
  educacion: img(
    "mexico,school,classroom,students,education",
    SM,
    "Estudiantes en aula durante actividad escolar",
  ),
  seguridad: img(
    "mexico,rural,road,sierra,landscape",
    SM,
    "Camino rural en zona montanosa",
  ),
  turismo: img(
    "sonora,sierra,mexico,landscape,nature",
    SM,
    "Sierra del norte de Mexico con vegetacion caracteristica",
  ),
  gobierno: img(
    "mexico,government,municipal,building,colonial",
    SM,
    "Edificio institucional historico mexicano",
  ),
  default: img(
    "mexico,municipal,village,colonial,sierra",
    SM,
    "Imagen institucional del Gobierno Municipal de Arivechi",
  ),
};

export function getNoticiaImageByCategoria(categoria = "") {
  const key = categoria
    .toLowerCase()
    .replace(/í/g, "i")
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u");
  if (key.includes("obra")) return noticiaPlaceholderImages["obras-publicas"];
  if (key.includes("cultura")) return noticiaPlaceholderImages.cultura;
  if (key.includes("salud")) return noticiaPlaceholderImages.salud;
  if (key.includes("educa")) return noticiaPlaceholderImages.educacion;
  if (key.includes("segur")) return noticiaPlaceholderImages.seguridad;
  if (key.includes("turismo")) return noticiaPlaceholderImages.turismo;
  if (
    key.includes("tesor") ||
    key.includes("convocatoria") ||
    key.includes("aviso") ||
    key.includes("secretar")
  )
    return noticiaPlaceholderImages.gobierno;
  return noticiaPlaceholderImages.default;
}

export default {
  heroImages,
  conoceArivechi,
  atractivosImages,
  noticiaPlaceholderImages,
  getNoticiaImageByCategoria,
};
