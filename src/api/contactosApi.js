import { assetUrl } from "../utils/assetUrl";
import contactoResumenMock from "../data/contactoResumen.json";
import contactoCompletoMock from "../data/contactoCompleto.json";

const BASE_URL = import.meta.env?.VITE_API_URL || "https://api.aapospotosi.com";

async function apiFetch(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(`Error ${res.status} en ${endpoint}`);
  return res.json();
}

export async function getContactoResumen() {
  try {
    return await apiFetch("/institucion/contacto-resumen");
  } catch {
    return contactoResumenMock;
  }
}

export async function getContactoCompleto() {
  try {
    return await apiFetch("/institucion/contacto-completo");
  } catch {
    return contactoCompletoMock;
  }
}