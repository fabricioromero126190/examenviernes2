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
    return {
      horario: "Lunes a viernes de 8:00 a 12:00 y de 14:00 a 18:00",
      email: "aapos@aapos.com.bo",
      facebook: "AAPOSOFICIAL",
    };
  }
}

export async function getContactoCompleto() {
  try {
    return await apiFetch("/institucion/contacto-completo");
  } catch {
    return {
      emergencias: ["69607734", "69612868"],
      oficinasOdeco: ["62-27430", "62-27431", "69610566 - 69610585", "69610581 - 69610592"],
      direccionCentral: "Calle Bustillos N° 1251",
      direccionTecnica: "AV. Antofagasta s/N",
      correo: "aapospotosi.com",
    };
  }
}