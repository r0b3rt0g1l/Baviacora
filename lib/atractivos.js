import { getStockImage } from "@/lib/stockImage";

const HD = (tags) => getStockImage(tags, 1600, 900);

export const atractivos = [
  {
    slug: 'kiosco-morisco',
    nombre: 'Kiosco Morisco',
    tipo: 'Patrimonio arquitectónico',
    ubicacion: 'Plaza Principal, Arivechi',
    descripcionCorta: 'Réplica del Pabellón Morisco de Santa María la Ribera, símbolo identitario de la Plaza Principal.',
    descripcionLarga: 'El Kiosco Morisco de Arivechi es una notable réplica del Pabellón Morisco que se encuentra en la Alameda de Santa María la Ribera de la Ciudad de México. Erigido en la Plaza Principal del municipio, es uno de los principales emblemas arquitectónicos de Arivechi y punto de reunión durante las festividades.',
    portada: HD('mexico,kiosk,bandstand,plaza,architecture'),
    galeria: [
      { src: HD('mexico,kiosk,bandstand,plaza,architecture'), alt: 'Pabellón morisco en plaza' },
      { src: HD('mexico,plaza,zocalo,trees'), alt: 'Plaza histórica' },
      { src: HD('mexico,arches,colonial,architecture'), alt: 'Arquitectura mexicana' },
    ],
    coordenadas: { lat: 28.9278, lon: -109.1869 },
    horario: 'Acceso libre las 24 horas',
    destacado: true,
  },
  {
    slug: 'templo-santa-rosalia',
    nombre: 'Templo de Santa Rosalía',
    tipo: 'Patrimonio religioso',
    ubicacion: 'Plaza Principal, Arivechi',
    descripcionCorta: 'Iglesia histórica con dos torres emblemáticas dedicada a la patrona del municipio.',
    descripcionLarga: 'El Templo de Santa Rosalía es la iglesia principal del municipio, distinguida por sus dos torres gemelas que destacan en el paisaje del centro histórico. Es el corazón religioso de Arivechi y sede de la celebración patronal del 4 de septiembre.',
    portada: HD('mexico,colonial,church,facade,catholic'),
    galeria: [
      { src: HD('mexico,colonial,church,facade,catholic'), alt: 'Iglesia colonial mexicana' },
      { src: HD('mexico,church,bell-tower,architecture'), alt: 'Detalle de iglesia' },
      { src: HD('mexico,church,interior,altar,catholic'), alt: 'Interior de templo' },
    ],
    coordenadas: { lat: 28.9278, lon: -109.1869 },
    horario: 'Misa diaria 7:00 AM y 6:00 PM',
    destacado: true,
  },
  {
    slug: 'cerro-de-las-conchas',
    nombre: 'Cerro de las Conchas',
    tipo: 'Área Natural Protegida',
    ubicacion: '16 km al sureste de Arivechi',
    descripcionCorta: 'Área Natural Protegida desde 2010, con fósiles cámbricos de más de 500 millones de años.',
    descripcionLarga: 'El Cerro de las Conchas fue decretado Área Natural Protegida en 2010 debido al hallazgo de fósiles marinos del periodo cámbrico, con una antigüedad superior a 500 millones de años. El sitio es de gran valor paleontológico, geológico y educativo, siendo un destino imperdible para investigadores y entusiastas de la naturaleza.',
    portada: HD('sonora,desert,hill,sierra,vegetation'),
    galeria: [
      { src: HD('sonora,desert,hill,sierra,vegetation'), alt: 'Cerro de la sierra' },
      { src: HD('sierra-madre,mountain,sunrise,mexico'), alt: 'Sierra Madre Occidental' },
      { src: HD('mexico,mountain,rocks,landscape'), alt: 'Paisaje de montaña' },
    ],
    coordenadas: { lat: 28.85, lon: -109.05 },
    horario: 'Visitas con guía local recomendadas',
    destacado: true,
  },
  {
    slug: 'rio-sahuaripa',
    nombre: 'Río Sahuaripa',
    tipo: 'Naturaleza',
    ubicacion: 'Cruza el municipio de sur a norte',
    descripcionCorta: 'Cauce que atraviesa el municipio, generando paisajes y ecosistemas únicos en la sierra.',
    descripcionLarga: 'El Río Sahuaripa recorre el municipio de Arivechi de sur a norte, sirviendo como columna vertebral del sistema hídrico y ecológico local. Sus riberas albergan vegetación ribereña y fauna característica de la Sierra Madre Occidental, ofreciendo paisajes contrastantes con los cerros áridos de la región.',
    portada: HD('mexico,river,canyon,sierra,water'),
    galeria: [
      { src: HD('mexico,river,canyon,sierra,water'), alt: 'Río de montaña' },
      { src: HD('mexico,canyon,cliffs,river'), alt: 'Cañón con río' },
      { src: HD('mexico,riverbank,trees,nature'), alt: 'Vegetación ribereña' },
    ],
    coordenadas: { lat: 28.9, lon: -109.18 },
    horario: 'Acceso libre',
    destacado: false,
  },
  {
    slug: 'cerro-de-los-pilares',
    nombre: 'Cerro de los Pilares',
    tipo: 'Naturaleza',
    ubicacion: 'Municipio de Arivechi',
    descripcionCorta: 'Formación rocosa emblemática que forma parte del paisaje serrano del municipio.',
    descripcionLarga: 'El Cerro de los Pilares es una de las formaciones geológicas más distintivas del municipio. Sus columnas naturales han fascinado a visitantes y locales por generaciones, formando parte del imaginario colectivo de la región serrana de Arivechi.',
    portada: HD('sonora,sierra,mountain,rocks,desert'),
    galeria: [
      { src: HD('sonora,sierra,mountain,rocks,desert'), alt: 'Formación rocosa' },
      { src: HD('mexico,rock,pillars,geology,nature'), alt: 'Pilares de roca' },
      { src: HD('mexico,sierra,sunset,hill'), alt: 'Cerro serrano' },
    ],
    coordenadas: { lat: 28.93, lon: -109.2 },
    horario: 'Acceso libre',
    destacado: false,
  },
  {
    slug: 'fiesta-santa-rosalia',
    nombre: 'Fiesta de Santa Rosalía',
    tipo: 'Tradición y cultura',
    ubicacion: 'Centro de Arivechi',
    descripcionCorta: 'Celebración patronal del 4 de septiembre con matachines, danza y tradición ópata.',
    descripcionLarga: 'Cada 4 de septiembre, Arivechi se viste de fiesta para honrar a Santa Rosalía, su santa patrona. La celebración reúne la danza de matachines, procesiones, música tradicional, gastronomía local y la presencia activa de la comunidad. Es la festividad más importante del año y el mejor momento para conocer la riqueza cultural de raíz ópata.',
    portada: HD('mexico,festival,papel-picado,plaza,celebration'),
    galeria: [
      { src: HD('mexico,festival,papel-picado,plaza,celebration'), alt: 'Festival tradicional mexicano' },
      { src: HD('mexico,traditional,dance,costume,folklore'), alt: 'Danza tradicional' },
      { src: HD('mexico,fiesta,patronal,night,plaza,lights'), alt: 'Fiesta patronal' },
    ],
    coordenadas: { lat: 28.9278, lon: -109.1869 },
    horario: 'Anual: 4 de septiembre',
    destacado: true,
  },
];

export function getAtractivoPorSlug(slug) {
  return atractivos.find((a) => a.slug === slug) || null;
}

export function getAtractivosCercanos(slugActual, limit = 3) {
  return atractivos
    .filter((a) => a.slug !== slugActual)
    .slice(0, limit);
}

export const gastronomia = {
  platillos: [
    'Carne asada',
    'Queso cocido',
    'Quesadillas',
    'Caldo de queso',
    'Tortillas de harina',
  ],
  dulces: [
    'Conserva de durazno',
    'Conserva de higo',
    'Conserva de manzana',
    'Conserva de limón',
    'Conserva de naranja',
  ],
};

export const artesanias = [
  'Tehuas',
  'Monturas',
  'Escobas de palma',
  'Cintos',
];

export default atractivos;
