export const municipalConfig = {
  identidad: {
    nombreCorto: 'Baviácora',
    nombreOficial: 'H. Ayuntamiento de Baviácora',
    nombreCompleto: 'Gobierno Municipal de Baviácora, Sonora',
    estado: 'Sonora',
    pais: 'México',
    administracion: '2024-2027',
    lema: null, // <<PENDIENTE: lema oficial del municipio>>
    lemaOrigen: null, // <<PENDIENTE>>
    fundacion: {
      anio: null, // <<PENDIENTE: año de fundación>>
      texto: null, // <<PENDIENTE: texto de fundación>>
    },
    municipioLibre: null, // <<PENDIENTE: fecha de municipio libre>>
  },

  datos: {
    superficieKm2: null, // <<PENDIENTE>>
    poblacion2020: 3191, // confirmado (INEGI 2020)
    altitudMin: null, // <<PENDIENTE>>
    altitudMax: null, // <<PENDIENTE>>
    altitudMedia: null, // <<PENDIENTE>>
    idh: null, // <<PENDIENTE>>
    coordenadas: {
      // Tentativas (del sitio estático anterior). <<CONFIRMAR>>
      latStr: null,
      lonStr: null,
      lat: 29.7167,
      lon: -110.15,
    },
    lada: '623', // confirmado
    cp: '84941', // confirmado
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
    horarios: null, // <<PENDIENTE: horario de atención>>
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

  // PALETA PROVISIONAL — verde/dorado institucional REAL de Baviácora
  // (tomado del sitio oficial actual). Ajustable por la jefa.
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
    web3FormsKey: null, // <<PENDIENTE: access key de Web3Forms propia de Baviácora>>
    cloudinaryCloud: null, // <<PENDIENTE: se define al conectar el CMS (FASE 3)>>
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://baviacora.gob.mx',
  },

  developer: {
    nombre: 'Northa Digital',
    anioActual: 2026,
  },
};

export default municipalConfig;
