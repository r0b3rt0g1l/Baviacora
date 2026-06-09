// Configuración del Municipio de Baviácora, Sonora. Administración 2024-2027.
// Construido sobre plantilla-municipal. Solo se llenan datos CONFIRMADOS; lo no
// confirmado se queda en null/'' (NO se inventa). Ver respaldo-base-arivechi.
export const municipalConfig = {
  identidad: {
    nombreCorto: 'Baviácora',
    nombreOficial: 'Municipio de Baviácora',
    nombreCompleto: 'H. Ayuntamiento de Baviácora, Sonora',
    estado: 'Sonora',
    pais: 'México',
    administracion: '2024-2027',
    // <<PENDIENTE: lema oficial del municipio>>
    lema: '',
    fundacion: {
      anio: null, // <<PENDIENTE: año de fundación>>
      texto: '',
    },
    municipioLibre: null, // <<PENDIENTE>>
    identidadEconomica: '', // <<PENDIENTE>>
    sitiosHistoricos: [], // <<PENDIENTE>>
    ubicacionGeografica: '', // <<PENDIENTE: p. ej. Región del Río Sonora — confirmar>>
  },

  datos: {
    superficieKm2: null, // <<PENDIENTE>>
    poblacion2020: 3191, // confirmado (INEGI 2020)
    altitudMin: null, // <<PENDIENTE>>
    altitudMax: null, // <<PENDIENTE>>
    altitudMedia: null, // <<PENDIENTE>>
    densidad: null, // <<PENDIENTE>>
    idh: null, // <<PENDIENTE>>
    coordenadas: {
      // Tentativas del sitio estático anterior. <<CONFIRMAR contra fuente oficial>>
      latStr: '',
      lonStr: '',
      lat: 29.7167,
      lon: -110.15,
    },
    lada: '623', // confirmado
    cp: '84941', // confirmado
  },

  clima: {
    tipo: '', // <<PENDIENTE>>
    temperaturaMediaAnualC: null,
    precipitacionMediaAnualMm: null,
  },

  actividadesEconomicas: {
    principales: [], // <<PENDIENTE>>
    minerales: [],
  },

  localidades: [
    { nombre: 'Baviácora', tipo: 'cabecera', habitantes: null },
    // <<PENDIENTE: resto de localidades del municipio>>
  ],

  contacto: {
    direccion: 'Avenida Eduardo W. Villa No. 10, Centro',
    cp: '84941',
    ciudad: 'Baviácora, Sonora',
    direccionCompleta:
      'Avenida Eduardo W. Villa No. 10, Centro, C.P. 84941, Baviácora, Sonora, México',
    telefonos: ['(623) 233-5131'], // confirmado
    email: 'ayuntamientobaviacora2024.2027@gmail.com', // confirmado
    horarios: '', // <<PENDIENTE: horario de atención>>
  },

  redes: {
    facebook:
      'https://www.facebook.com/people/Municipio-de-Baviácora-Sonora-2024-2027/61565830012679/',
    instagram: null,
    twitter: null,
    youtube: null,
  },

  enlacesExternos: {
    transparenciaAyuntamiento: 'https://baviacora.gob.mx/transparencia/',
    transparenciaAyuntamientoSevac: null, // <<PENDIENTE>>
    transparenciaAyuntamientoLeyes: null, // <<PENDIENTE>>
    transparenciaSonora:
      'https://transparencia.sonora.gob.mx/informacion-publica/organismos/9/municipios/1107/baviacora',
    plataformaNacionalTransparencia: 'https://www.plataformadetransparencia.org.mx',
    avisoPrivacidadPdf: null, // <<PENDIENTE: aviso de privacidad de Baviácora en PDF>>
  },

  // Paleta institucional verde/oro de Baviácora (tomada del sitio oficial actual).
  // El sistema CTA crema y los nombres de variables se conservan de la plantilla;
  // solo cambian los valores. Sincronizada con app/globals.css.
  paleta: {
    guinda: '#2D4F1B',
    guindaProfundo: '#1F3813',
    guindaSuave: '#4A7C2E',
    dorado: '#E5B53D',
    doradoSuave: '#EFC75E',
    crema: '#F5F5DC',
    texto: '#1A1A1A',
    textoSecundario: '#4A4A4A',
    fondo: '#FAFAFA',
    borde: '#E5E5E5',
  },

  servicios: {
    web3FormsKey: process.env.WEB3FORMS_ACCESS_KEY,
    cloudinaryCloud: '', // <<PENDIENTE: se define al conectar el CMS>>
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://baviacora.gob.mx',
  },

  developer: {
    nombre: 'Northa Digital',
    anioActual: 2026,
  },
};

export default municipalConfig;
