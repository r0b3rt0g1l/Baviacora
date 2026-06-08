export const municipalConfig = {
  identidad: {
    nombreCorto: 'Arivechi',
    nombreOficial: 'Gobierno Municipal de Arivechi',
    nombreCompleto: 'Gobierno Municipal de Arivechi, Sonora',
    estado: 'Sonora',
    pais: 'México',
    administracion: '2024-2027',
    lema: 'Lugar de la Calavera',
    lemaOrigen: 'Significado en lengua ópata',
    fundacion: {
      anio: 1627,
      texto: 'Misión San Javier de Arivechi por Pedro Méndez',
    },
    municipioLibre: '12 de abril de 1932',
  },

  datos: {
    superficieKm2: 662.58,
    poblacion2020: 1177,
    altitudMin: 400,
    altitudMax: 2200,
    altitudMedia: 556,
    idh: 0.8066,
    coordenadas: {
      latStr: '28°55\'40"N',
      lonStr: '109°11\'13"O',
      lat: 28.9278,
      lon: -109.1869,
    },
    lada: '634',
    cp: '85680',
  },

  localidades: [
    { nombre: 'Arivechi', tipo: 'cabecera', habitantes: 635 },
    { nombre: 'Bámori', tipo: 'localidad' },
    { nombre: 'Tarachi', tipo: 'localidad' },
    { nombre: 'Pónida', tipo: 'localidad' },
    { nombre: 'Bacahuachi', tipo: 'localidad' },
    { nombre: 'La Mesa de los Pimas', tipo: 'localidad' },
  ],

  contacto: {
    direccion: 'Luis Donaldo Colosio Murrieta #20',
    cp: '85680',
    ciudad: 'Arivechi, Sonora',
    direccionCompleta: 'Luis Donaldo Colosio Murrieta #20, 85680 Arivechi, Sonora',
    telefonos: ['634 34 3 04 16', '634 34 3 04 99'],
    email: 'arivechitransparencia2427@gmail.com',
    horarios: 'Lunes a viernes, 8:00 - 16:00 hrs',
  },

  redes: {
    facebook: 'https://www.facebook.com/ArivechiOficial/',
    instagram: null,
    twitter: null,
    youtube: null,
  },

  enlacesExternos: {
    transparenciaAyuntamiento: 'https://arivechi.transparenciasonora.org/',
    transparenciaAyuntamientoSevac: 'https://arivechi.transparenciasonora.org/documentos/?id=288&if=286',
    transparenciaAyuntamientoLeyes: 'https://arivechi.transparenciasonora.org/documentos/?id=287&if=285',
    transparenciaSonora: 'https://transparencia.sonora.gob.mx/informacion-publica/organismos/9/municipios/1098/arivechi',
    plataformaNacionalTransparencia: 'https://www.plataformadetransparencia.org.mx',
    avisoPrivacidadPdf: '/documentos/aviso-privacidad-arivechi.pdf',
  },

  paleta: {
    guinda: '#6B1629',
    guindaProfundo: '#4A0E1C',
    guindaSuave: '#8A2A3D',
    dorado: '#D4A017',
    doradoSuave: '#E8B93A',
    crema: '#F5F5DC',
    texto: '#1A1A1A',
    textoSecundario: '#4A4A4A',
    fondo: '#FAFAFA',
    borde: '#E5E5E5',
  },

  servicios: {
    web3FormsKey: '9ee5082d-184c-433f-9faf-ff601b9a945b',
    cloudinaryCloud: 'dtpxt4a2p',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://arivechi.gob.mx',
  },

  developer: {
    nombre: 'Northa Digital',
    anioActual: 2026,
  },
};

export default municipalConfig;
