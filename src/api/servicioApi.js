import { assetUrl } from "../utils/assetUrl";
import requisitosOdecoMock from "../data/requisitosOdeco.json";
import objetivosMock from "../data/objetivos.json";

const BASE_URL = import.meta.env?.VITE_API_URL || "https://api.aapospotosi.com";

async function apiFetch(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(`Error ${res.status} en ${endpoint}`);
  return res.json();
}

export async function getRequisitosOdeco() {
  try {
    return await apiFetch("/institucion/requisitos-odeco");
  } catch {
    return {
      ...requisitosOdecoMock,
      fondoMascota: assetUrl(requisitosOdecoMock.fondoMascota),
    };
  }
}

export async function getObjetivos() {
  try {
    return await apiFetch("/institucion/objetivos");
  } catch {
    return objetivosMock.map((item) => ({
      ...item,
      imagen: item.imagen ? assetUrl(item.imagen) : item.imagen,
    }));
  }
}