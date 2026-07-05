import { assetUrl } from "../utils/assetUrl";
import resenaHistoricaMock from "../data/resenaHistorica.json";
import visionMisionValoresMock from "../data/visionMisionValores.json";
import galeriaHistoriaMock from "../data/galeriaHistoria.json";

const BASE_URL = import.meta.env?.VITE_API_URL || "https://api.aapospotosi.com";

async function apiFetch(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(`Error ${res.status} en ${endpoint}`);
  return res.json();
}

export async function getResenaHistorica() {
  try {
    return await apiFetch("/institucion/resena-historica");
  } catch {
    return resenaHistoricaMock;
  }
}

export async function getVisionMisionValores() {
  try {
    return await apiFetch("/institucion/vision-mision-valores");
  } catch {
    return {
      ...visionMisionValoresMock,
      imagenVision: assetUrl(visionMisionValoresMock.imagenVision),
      imagenMisionGrupo: assetUrl(visionMisionValoresMock.imagenMisionGrupo),
      imagenValores: assetUrl(visionMisionValoresMock.imagenValores),
    };
  }
}

export async function getGaleriaHistoria() {
  try {
    return await apiFetch("/institucion/galeria?seccion=historia");
  } catch {
    return galeriaHistoriaMock.map((foto) => ({
      ...foto,
      url: assetUrl(foto.url),
    }));
  }
}