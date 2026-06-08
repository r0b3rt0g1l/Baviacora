// Hitos historicos del municipio de Arivechi.
// Fuente unica para componentes que los renderizan: ConoceArivechi
// (intercalados con la narrativa, T25) y LineaTiempo (scroll horizontal,
// componente legacy de T24 actualmente sin consumidor en el home).
//
// Cuando el municipio entregue datos historicos adicionales o sustituya
// las imagenes con fotos oficiales, basta editar este archivo. Las
// rutas de imagen apuntan a /public/images/hitos/ y a /escudo-arivechi-hd.png.

export const hitos = [
  {
    ano: "1627",
    titulo: "Fundación de la misión",
    descripcion:
      "El jesuita Pedro Méndez funda la misión de San Javier de Arivechi para evangelizar a las tribus ópatas que habitaban la región serrana.",
    datoCurioso:
      "Pedro Méndez fue el primer jesuita portugués en establecer misiones en el noroeste de Sonora.",
    imagen: "/images/hitos/capilla-santa-cruz-buenavista.jpg",
    align: "left",
  },
  {
    ano: "1638",
    titulo: "Misión formalizada",
    descripcion:
      "Se establece formalmente con el primer templo permanente bajo el sistema de reducciones jesuitas, integrando costumbres ópatas con la fe católica.",
    datoCurioso:
      "Las reducciones jesuitas combinaban evangelización con preservación de lenguas y tradiciones indígenas.",
    imagen: "/images/hitos/parroquia-rosario-rayon.jpg",
    align: "left",
  },
  {
    ano: "1932",
    titulo: "Decreto municipal",
    descripcion:
      "Arivechi es decretado oficialmente como municipio libre del estado de Sonora, consolidando su autonomía administrativa.",
    datoCurioso:
      "El decreto fue parte de la reorganización territorial postrevolucionaria de Sonora.",
    imagen: "/images/hitos/palacio-gobierno-hermosillo.jpg",
    align: "left",
  },
  {
    ano: "2010",
    titulo: "Cerro Conchas Área Natural",
    descripcion:
      "La zona del Cerro de las Conchas es decretada Área Natural Protegida por su biodiversidad endémica y valor paleontológico.",
    datoCurioso:
      "El Cerro Conchas alberga especies únicas de cactáceas y reptiles endémicos.",
    imagen: "/images/hitos/sierra-madre-paisaje.jpg",
    align: "right",
  },
  {
    ano: "2016",
    titulo: "Fósiles cambrianos",
    descripcion:
      "Investigadores descubren fósiles marinos de más de 500 millones de años en el Cerro de las Conchas, posicionando a Arivechi como sitio paleontológico relevante.",
    datoCurioso:
      "Los fósiles cambrianos son contemporáneos a la 'explosión cámbrica', el periodo de mayor diversificación de vida en la Tierra.",
    imagen: "/images/hitos/trilobite-cambrico.jpg",
    align: "left",
  },
  {
    ano: "2024",
    titulo: "Administración actual",
    descripcion:
      "Inicia la administración 2024-2027 bajo el liderazgo del C. Francisco Flores Robles, con enfoque en transparencia, modernización digital y desarrollo sostenible.",
    datoCurioso:
      "Esta administración es la primera en Arivechi con presencia digital institucional completa.",
    imagen: null,
    escudo: "/escudo-arivechi-hd.png",
    align: "right",
  },
];

export function getHitoByYear(year) {
  return hitos.find((h) => h.ano === String(year)) ?? null;
}

export default hitos;
