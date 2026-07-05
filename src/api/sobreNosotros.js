import { assetUrl } from "../utils/assetUrl";
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
      vision:
        "Ser una empresa metropolitana y líder a nivel nacional en la prestación del servicio de agua potable y saneamiento, que contribuye a mejorar la calidad de vida de los habitantes de nuestra ciudad de Potosí.",
      mision:
        "Proporcionar servicios de agua potable y saneamiento en beneficio de los habitantes de la ciudad de Potosí, a través de una gestión eficiente, transparente y sostenible, con enfoque social.",
      valores:
        'Administración Autónoma para Obras Sanitarias se guía y se identifica con sus clientes internos y externos por los siguientes valores empresariales: "probidad y vocación de servicio, lealtad y obediencia, trabajo en equipo, puntualidad, respeto y disciplina, veracidad y transparencia, idoneidad".',
      imagenVision:assetUrl( "/img/foto1.png"),
      imagenMisionGrupo: assetUrl("/img/foto2.png"),
      imagenValores: assetUrl("/img/foto12.jpg"),
    };
  }
}

export async function getGaleriaHistoria() {
  try {
    return await apiFetch("/institucion/galeria?seccion=historia");
  } catch {
    return [
      { id: 1, url:assetUrl( "/img/foto4.jpg"), alt: "Entrega de conexión de agua potable a una familia" },
      { id: 2, url:assetUrl( "/img/foto5.jpg"), alt: "Inspección técnica de conexión domiciliaria" },
      { id: 3, url:assetUrl( "/img/foto6.jpg"), alt: "Cuadrilla en labores de mantenimiento de red" },
      { id: 4, url:assetUrl ("/img/foto7.jpg"), alt: "Personal de AAPOS en campo" },
      { id: 5, url:assetUrl( "/img/foto8.jpg"), alt: "Obra de tendido de red de agua potable" },
      { id: 6, url:assetUrl("/img/foto9.jpg"), alt: "Visita técnica a zona de trabajo" },
      { id: 7, url:assetUrl("/img/foto10.jpg"), alt: "Entrega de conexión a familia beneficiaria" },
      { id: 8, url:assetUrl( "/img/foto11.jpg"), alt: "Equipo de AAPOS en labores de mantenimiento" },
    ];
  }
}