export async function getHeroSlides() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    console.warn(
      "[cms] NEXT_PUBLIC_API_URL no está definido. Usando fallback de hero.",
    );
    return null;
  }

  const url = `${baseUrl}/api/municipios/arivechi/hero`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.warn(
        `[cms] Hero endpoint respondió con status ${response.status}.`,
      );
      return null;
    }

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error("[cms] Hero endpoint devolvió JSON inválido:", parseError);
      return null;
    }

    if (!Array.isArray(data)) {
      console.warn("[cms] Hero endpoint no devolvió un array.");
      return null;
    }

    const activeSlides = data.filter((item) => item && item.activo === true);

    if (activeSlides.length === 0) {
      return null;
    }

    activeSlides.sort((a, b) => (a.orden ?? 0) - (b.orden ?? 0));

    return activeSlides.map((item) => ({
      id: item.id,
      eyebrow: item.etiqueta || "",
      title: item.titulo,
      subtitle: item.subtitulo || "",
      cta: {
        label: item.textoBoton || "Ver más",
        href: item.linkBoton || "/",
      },
      image: item.imagenUrl,
      alt: item.titulo,
      align: "center",
    }));
  } catch (error) {
    console.error("[cms] Error al obtener slides del hero:", error);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

function toISODate(value) {
  if (!value) return "";
  try {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    return d.toISOString().slice(0, 10);
  } catch {
    return "";
  }
}

function mapNoticiaCMSToPortal(item) {
  const contenido = item.contenido || item.cuerpo || "";
  const extractoRaw =
    item.extracto && typeof item.extracto === "string"
      ? item.extracto
      : contenido;
  const extracto =
    extractoRaw.length > 200
      ? extractoRaw.slice(0, 197).trimEnd() + "..."
      : extractoRaw;

  const fechaSrc =
    item.fechaPublicacion || item.fecha || item.creadoEn || item.createdAt;

  return {
    slug: item.id,
    titulo: item.titulo || "",
    extracto,
    contenido,
    categoria: item.categoria || "Sin categoría",
    fecha: toISODate(fechaSrc),
    autor: item.autor || "Gobierno Municipal",
    imagen: item.imagenUrl || item.imagen || "/og/og-default.jpg",
  };
}

export async function getNoticiasFromCMS() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    console.warn(
      "[cms] NEXT_PUBLIC_API_URL no está definido. Usando fallback de noticias.",
    );
    return null;
  }

  const url = `${baseUrl}/api/municipios/arivechi/noticias`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.warn(
        `[cms] Noticias endpoint respondió con status ${response.status}.`,
      );
      return null;
    }

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error(
        "[cms] Noticias endpoint devolvió JSON inválido:",
        parseError,
      );
      return null;
    }

    if (!Array.isArray(data)) {
      console.warn("[cms] Noticias endpoint no devolvió un array.");
      return null;
    }

    const activeNoticias = data.filter(
      (item) => item && item.activo !== false,
    );

    if (activeNoticias.length === 0) {
      return null;
    }

    activeNoticias.sort((a, b) => {
      const da = new Date(
        a.fechaPublicacion || a.fecha || a.creadoEn || 0,
      ).getTime();
      const db = new Date(
        b.fechaPublicacion || b.fecha || b.creadoEn || 0,
      ).getTime();
      return db - da;
    });

    return activeNoticias.map(mapNoticiaCMSToPortal);
  } catch (error) {
    console.error("[cms] Error al obtener noticias:", error);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function getImagenesFromCMS() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    console.warn(
      "[cms] NEXT_PUBLIC_API_URL no está definido. No se cargarán imágenes del CMS.",
    );
    return null;
  }

  const url = `${baseUrl}/api/municipios/arivechi/imagenes`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.warn(
        `[cms] Imágenes endpoint respondió con status ${response.status}.`,
      );
      return null;
    }

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error(
        "[cms] Imágenes endpoint devolvió JSON inválido:",
        parseError,
      );
      return null;
    }

    if (!Array.isArray(data)) {
      console.warn("[cms] Imágenes endpoint no devolvió un array.");
      return null;
    }

    if (data.length === 0) {
      return null;
    }

    data.sort((a, b) => {
      const da = new Date(a.creadoEn || 0).getTime();
      const db = new Date(b.creadoEn || 0).getTime();
      return db - da;
    });

    return data.map((item) => ({
      id: item.id,
      url: item.url,
      titulo: item.titulo || "",
      descripcion: item.descripcion || "",
      categoria: item.categoria || "general",
      fecha: item.creadoEn,
    }));
  } catch (error) {
    console.error("[cms] Error al obtener imágenes:", error);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function getDocumentosFromCMS(filtros = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    console.warn(
      "[cms] NEXT_PUBLIC_API_URL no está definido. No se cargarán documentos del CMS.",
    );
    return null;
  }

  const params = new URLSearchParams();
  if (filtros.categoria) params.set("categoria", filtros.categoria);
  if (filtros.anio) params.set("anio", String(filtros.anio));
  if (filtros.trimestre) params.set("trimestre", String(filtros.trimestre));
  if (filtros.ambito) params.set("ambito", filtros.ambito);
  const qs = params.toString() ? `?${params.toString()}` : "";
  const url = `${baseUrl}/api/municipios/arivechi/documentos${qs}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.warn(
        `[cms] Documentos endpoint respondió con status ${response.status}.`,
      );
      return null;
    }

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error(
        "[cms] Documentos endpoint devolvió JSON inválido:",
        parseError,
      );
      return null;
    }

    if (!Array.isArray(data)) {
      console.warn("[cms] Documentos endpoint no devolvió un array.");
      return null;
    }

    if (data.length === 0) {
      return null;
    }

    data.sort((a, b) => {
      const anioA = a.anio ?? 0;
      const anioB = b.anio ?? 0;
      if (anioB !== anioA) return anioB - anioA;
      const da = new Date(a.creadoEn || 0).getTime();
      const db = new Date(b.creadoEn || 0).getTime();
      return db - da;
    });

    return data.map((item) => ({
      id: item.id,
      titulo: item.titulo,
      descripcion: item.descripcion || "",
      url: item.archivoUrl,
      tamanoBytes: item.fileSize ?? null,
      nombreArchivo: item.fileName ?? null,
      categoria: item.categoria || "otros",
      tipo: item.tipo || "PDF",
      ambito: item.ambito ?? null,
      anio: item.anio ?? null,
      trimestre: item.trimestre ?? null,
      creadoEn: item.creadoEn,
      actualizadoEn: item.actualizadoEn,
    }));
  } catch (error) {
    console.error("[cms] Error al obtener documentos:", error);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function getSevacFromCMS(filtros = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    console.warn(
      "[cms] NEXT_PUBLIC_API_URL no está definido. No se cargarán documentos SEvAC del CMS.",
    );
    return null;
  }

  const params = new URLSearchParams();
  if (filtros.categoria) params.set("categoria", filtros.categoria);
  if (filtros.anio) params.set("anio", String(filtros.anio));
  if (filtros.trimestre) params.set("trimestre", String(filtros.trimestre));
  const qs = params.toString() ? `?${params.toString()}` : "";
  const url = `${baseUrl}/api/municipios/arivechi/sevac${qs}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.warn(
        `[cms] SEvAC endpoint respondió con status ${response.status}.`,
      );
      return null;
    }

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error(
        "[cms] SEvAC endpoint devolvió JSON inválido:",
        parseError,
      );
      return null;
    }

    if (!Array.isArray(data)) {
      console.warn("[cms] SEvAC endpoint no devolvió un array.");
      return null;
    }

    if (data.length === 0) {
      return null;
    }

    data.sort((a, b) => {
      const anioA = a.anio ?? 0;
      const anioB = b.anio ?? 0;
      if (anioB !== anioA) return anioB - anioA;
      const da = new Date(a.creadoEn || 0).getTime();
      const db = new Date(b.creadoEn || 0).getTime();
      return db - da;
    });

    return data.map((item) => ({
      id: item.id,
      titulo: item.titulo,
      descripcion: item.descripcion || "",
      url: item.archivoUrl,
      tamanoBytes: item.fileSize ?? null,
      nombreArchivo: item.fileName ?? null,
      categoria: item.categoria || "otros",
      tipo: item.tipo || "PDF",
      anio: item.anio ?? null,
      trimestre: item.trimestre ?? null,
      creadoEn: item.creadoEn,
      actualizadoEn: item.actualizadoEn,
    }));
  } catch (error) {
    console.error("[cms] Error al obtener documentos SEvAC:", error);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}
