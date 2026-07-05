import { assetUrl } from "../utils/assetUrl";
import mosaicoMock from "../data/mosaico.json";
import presentacionMock from "../data/presentacion.json";
import equipoMock from "../data/equipo.json";
import publicacionesMock from "../data/publicaciones.json";
import razonesMock from "../data/razones.json";

const BASE_URL = import.meta.env?.VITE_API_URL || "https://api.aapospotosi.com";

async function apiFetch(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(`Error ${res.status} en ${endpoint}`);
  return res.json();
}

export async function getMosaico() {
  try {
    return await apiFetch("/institucion/mosaico");
  } catch {
    return mosaicoMock.map((foto) => ({ ...foto, url: assetUrl(foto.url) }));
  }
}

export async function getPresentacion() {
  try {
    return await apiFetch("/institucion/presentacion");
  } catch {
    return {
      ...presentacionMock,
      imagenMascota: assetUrl(presentacionMock.imagenMascota),
    };
  }
}

export async function getEquipo() {
  try {
    return await apiFetch("/institucion/equipo");
  } catch {
    return equipoMock.map((persona) => ({ ...persona, imagen: assetUrl(persona.imagen) }));
  }
}

export async function getPublicaciones() {
  try {
    return await apiFetch("/institucion/publicaciones");
  } catch {
    return publicacionesMock.map((post) => ({
      ...post,
      medios: post.medios.map((medio) => {
        if (medio.tipo === "galeria") {
          return {
            ...medio,
            imagenes: medio.imagenes.map((img) => ({ ...img, url: assetUrl(img.url) })),
          };
        }
        return { ...medio, src: assetUrl(medio.src) };
      }),
    }));
  }
}

export async function getRazones() {
  try {
    return await apiFetch("/institucion/razones");
  } catch {
    return razonesMock.map((item) => ({ ...item, imagen: assetUrl(item.imagen) }));
  }
}