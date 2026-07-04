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
    return {
      titulo: "AAPOS",
      subtitulo: "Administración Autónoma para Obras Sanitarias",
      parrafos: [
        `La Administración Autónoma Para Obras Sanitarias (AAPOS) fue creada mediante DS 10221 de 21 de abril de 1972, sobre la base de DAP (Ex Departamento de Aguas Potables) con carácter de empresa descentralizada de la Honorable Gobierno Municipal sin alterar la naturaleza jurídica de la entidad mencionada, por ende con autonomía de Gestión Administrativa y Financiera, con duración indefinida con Patrimonio Independiente de acuerdo a disposiciones legales enmarcadas en el DS 10221 y DL (Decreto Ley 17835 de fecha diciembre de 1980) y sus normas complementarias que rigen en el estatuto orgánico, aprobado por resolución Ministerial N° 115 de 30 de mayo de 1973.`,
        `Entidad sujeta a fiscalización por parte de la CGE, en virtud del art. 18 del DS 10221, "La Contraloría General de la República, a través de su oficina departamental, fiscalizará permanentemente el desenvolvimiento económico, administrativo y financiero de AAPOS - Potosí".`,
        `Por otra parte, en fecha 21 de febrero de 1997, mediante DS N° 24505 el Poder Ejecutivo reglamenta la Ley del Sistema de Regulación Sectorial SIRESE (Superintendencia de Servicios Básicos SISAB), AAPOS Autoridad de Fiscalización de Agua Potable y Alcantarillado Sanitaria, dentro del ámbito de competencias, los procedimientos de audiencia pública de infracciones y sanciones, así como los recursos administrativos.`,
        `En fecha 22 de julio de 1997 mediante DS 24716 se aprobó el Reglamento de Organización Institucional y de las Concesiones del sector de Aguas y el Reglamento de Uso de Bienes de dominio público de aguas. Además se determina entre otras que la Superintendencia de Aguas, actualmente AAPS es el Organismo con jurisdicción nacional que cumple la función de Regulación, que consiste en cumplir y hacer cumplir la Ley del Sistema de regulación. La Ley de Agua asegurando la correcta aplicación de los Principios, Objetivos y Políticas que forman parte de las normas.`,
        `En fecha 21 de abril de 1998, AAPOS mediante memorial solicita la Regulación de Concesión, a la Superintendencia de Aguas, instancia por el cual emitió la Resolución N° 40/98 en fecha 2 de octubre de 1998 autorizando a la EPSA AAPOS (Empresa Prestadora de Servicios de Agua Potable y Alcantarillado, de la Administración Autónoma Para Obras Sanitarias), la cual se consolida el 13 de noviembre de 2000 con la suscripción y formalización del contrato de concesión por 30 años.`,
      ],
    };
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
      imagenVision: "/img/foto1.png",
      imagenMisionGrupo: "/img/foto2.png",
      imagenValores: "/img/foto12.jpg",
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