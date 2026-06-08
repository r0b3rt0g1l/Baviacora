import { getNoticiasFromCMS } from "@/lib/cms";
import {
  noticias as noticiasFallback,
  comunicados,
  getNoticiaPorSlug as getHardcodedPorSlug,
} from "@/lib/noticias";

export { comunicados };

let _cachedCMSNoticias = null;
let _cacheTimestamp = 0;
const CACHE_TTL = 30 * 1000;

async function getNoticias() {
  const now = Date.now();
  if (_cachedCMSNoticias && now - _cacheTimestamp < CACHE_TTL) {
    return _cachedCMSNoticias;
  }
  const cms = await getNoticiasFromCMS();
  const result = cms && cms.length > 0 ? cms : noticiasFallback;
  _cachedCMSNoticias = result;
  _cacheTimestamp = now;
  return result;
}

export async function getNoticiasAll() {
  return getNoticias();
}

export async function getNoticiasRecientes(limit = 3) {
  const all = await getNoticias();
  return [...all]
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, limit);
}

export async function getNoticiaPorSlug(slug) {
  const cmsNoticias = await getNoticias();
  const fromCMS = cmsNoticias.find((n) => n.slug === slug);
  if (fromCMS) return fromCMS;

  return getHardcodedPorSlug(slug);
}

export async function getNoticiasRelacionadas(slugActual, limit = 3) {
  const all = await getNoticias();
  return all
    .filter((n) => n.slug !== slugActual)
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, limit);
}
