import { assetUrl } from "../utils/assetUrl";
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
      fondoMascota: assetUrl("/img/fondo.png"), 
      secciones: [
        {
          id: 1,
          titulo: "NUEVAS CONEXIONES\nDE AGUA POTABLE Y ALCANTARRILLADO",
          items: [
            "Testimonio de propiedad registrado en Derechos Reales (Folio Real)",
            "Cédula de Identidad",
            "Plano de lote",
            "Trámite de Alcantarillado",
          ],
        },
        {
          id: 2,
          titulo: "CAMBIO DE NOMBRE",
          items: [
            "Solicitud de cambio de nombre vía gerencia, adjunte todos los documentos requeridos.",
            "Testimonio de propiedad registrados en derechos reales (folio real)",
            "Cédula de identidad",
            "Plano de lote",
            "Última factura de agua",
          ],
        },
        {
          id: 3,
          titulo: "NOTA",
          items: [
            "Presente fotocopias, en caso de que sea necesario, solicite originales.",
            "La documentación solicitada debe ser entregada en las oficinas de odeco.",
            "Todo trámite realizado debe ser de manera personal.",
          ],
        },
      ],
    };
  }
}

export async function getObjetivos() {
  try {
    return await apiFetch("/institucion/objetivos");
  } catch {
    return [
      {
        id: 1,
        tipo: "texto",
        texto: "Fortalecer la imagen institucional a través de una reingeniería de los procesos internos.",
      },
      {
        id: 2,
        tipo: "foto",
        imagen: assetUrl("/img/servicios1.jpg"),
        texto: "Mejorar la calidad de los servicios de agua potable y alcantarillado sanitario.",
      },
      {
        id: 3,
        tipo: "foto",
        imagen:assetUrl( "/img/servicios2.jpg"),
        texto: "Aumentar la cobertura de los servicios básicos a las zonas más deprimidas del municipio.",
      },
      {
        id: 4,
        tipo: "foto",
        imagen: assetUrl("/img/servicios3.jpg"),
        texto: "Siempre velando por la seguridad de los ciudadanos",
      },
      {
        id: 5,
        tipo: "texto",
        texto:
          "Promover la universalización de los servicios de agua potable y saneamiento en las áreas urbana y rural, en forma concurrente y participativa.",
      },
      {
        id: 6,
        tipo: "foto",
        imagen:assetUrl( "/img/servicios4.jpg"),
        texto: "Cumpliendo con la sociedad",
      },
    ];
  }
}