
import { assetUrl } from "../utils/assetUrl";
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
    return [
      { id: 1, url:assetUrl( "/img/inicio1.jpg"), alt: "Fachada histórica de AAPOS" },
      { id: 2, url: assetUrl("/img/inicio2.jpg"), alt: "Logo AAPOS con mascota" },
      { id: 3, url: assetUrl("/img/inicio3.jpg"), alt: "Edificio central de AAPOS" },
      
    ];
  }
}

export async function getPresentacion() {
  try {
    return await apiFetch("/institucion/presentacion");
  } catch {
    return {
      descripcion:
        "La Administración Autónoma para Obras Sanitarias AAPOS-POTOSÍ es responsable de brindar los servicios de abastecimiento de agua potable y alcantarillado sanitario a la ciudad de Potosí.",
      imagenMascota:assetUrl( "/img/inicio4.jpg"),
    };
  }
}


export async function getEquipo() {
  try {
    return await apiFetch("/institucion/equipo");
  } catch {
    return [
      {
        id: 1,
        imagenLado: "izquierda",
        imagen: assetUrl("/img/inicio5.jpg"),
        titulo: "Gerente General Ing. Carlos Chumacero Pacheco",
        texto:
          "Es la máxima autoridad ejecutiva, la cual está encargada de cumplir las resoluciones y determinaciones, siendo responsable de la administración de la empresa, en lo que corresponde a sus funciones y atribuciones establecidas en el estatuto orgánico, manual de funciones y demás normas conexas.",
      },
      {
        id: 2,
        imagenLado: "derecha",
        imagen:assetUrl( "/img/inicio6.jpg"),
        titulo: "Sede del sindicato de Trabajadores de la empresa",
        texto:
          "Toda una organización a disposición de la sociedad, cumpliendo las funciones que sean asignadas a cada área de trabajo y mejorando día a día por el bien de la empresa.",
      },
    ];
  }
}


export async function getPublicaciones() {
  try {
    return await apiFetch("/institucion/publicaciones");
  } catch {
    return [
     {
          id: 1,
          encabezado: "AAPOS INFORMA",
          subtitulo: "Acción comunal de limpieza lagunas del Kari Kari",
          texto:
            "De la mano de todos los trabajadores de AAPOS POTOSÍ, se realizó la tarea de limpieza y mantenimiento de nuestras lagunas de la cuenca del Kari Kari.",
          medios: [
            {
              tipo: "galeria",
              imagenes: [
                { url:assetUrl( "/img/inicio9.jpg"), alt: "Foto 1 de la limpieza en las lagunas del Kari Kari" },
                { url:assetUrl( "/img/inicio10.jpg"), alt: "Foto 2 de la limpieza en las lagunas del Kari Kari" },
                { url:assetUrl( "/img/inicio11.jpg"), alt: "Foto 3 de la limpieza en las lagunas del Kari Kari" },
                { url:assetUrl( "/img/inicio12.jpg"), alt: "Foto 4 de la limpieza en las lagunas del Kari Kari" },
                { url: assetUrl("/img/inicio13.jpg"), alt: "Foto 5 de la limpieza en las lagunas del Kari Kari" },
                { url:assetUrl( "/img/inicio14.jpg"), alt: "Foto 6 de la limpieza en las lagunas del Kari Kari" },
                { url:assetUrl( "/img/inicio15.jpg"), alt: "Foto 7 de la limpieza en las lagunas del Kari Kari" },
                { url:assetUrl( "/img/inicio16.jpg"), alt: "Foto 8 de la limpieza en las lagunas del Kari Kari" },
              ],
            },
            { tipo: "video", src: "/video/video1.mp4", alt: "Video de la limpieza en las lagunas del Kari Kari" },
          ],
        },
      {
        id: 2,
        encabezado: "AAPOS POTOSÍ",
        subtitulo: "Denuncia las conexiones clandestinas",
        texto:
          "Te recuerda: las conexiones clandestinas son un delito que perjudica a todos, contaminan el agua potable y no permiten que más familias accedan al servicio. Si conoces algún vecino con conexión ilegal o clandestina, ¡denuncia!",
        medios: [
          { tipo: "video", src: "/video/video5.mp4", alt: "Video sobre conexiones clandestinas 1" },
          { tipo: "video", src: "/video/video2.mp4", alt: "Video sobre conexiones clandestinas 2" },
        ],
      },
      {
        id: 3,
        encabezado: "AAPOS INFORMA",
        subtitulo: "Distribución de agua mediante cisternas",
        texto: "Estamos trabajando día a día para brindar un mejor servicio.",
        medios: [
          { tipo: "video", src: "/video/video3.mp4", alt: "Video de distribución de agua mediante cisternas 1" },
          { tipo: "video", src: "/video/video4.mp4", alt: "Video de distribución de agua mediante cisternas 2" },
        ],
      },
    ];
  }
}


export async function getRazones() {
  try {
    return await apiFetch("/institucion/razones");
  } catch {
    return [
      {
        id: 1,
        imagenLado: "izquierda",
        imagen: assetUrl("/img/inicio7.jpg"),
        titulo: "Trabajo profesional",
        texto:
          "Su objetivo es apoyar el fortalecimiento e incremento de la cobertura de los servicios de agua potable, alcantarillado y saneamiento que prestan los organismos operadores, de los municipios, a través de las entidades.",
      },
      {
        id: 2,
        imagenLado: "derecha",
        imagen: assetUrl("/img/inicio8.jpg"),
        titulo: "Calidad",
        texto: "Con la transparencia e inspecciones necesarias para el buen uso del agua potable.",
      },
    ];
  }
}