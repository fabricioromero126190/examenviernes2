import Carousel from "../components/Carousel";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  getMosaico,
  getPresentacion,
  getEquipo,
  getPublicaciones,
  getRazones,
} from "../api/inicioApi";
import "../styles/Inicio.css";

function ImagePlaceholder({ src, alt, className }) {
  if (src) {
    return <img src={src} alt={alt} className={className} />;
  }
  return <div className={`media-placeholder ${className || ""}`}>Imagen: {alt}</div>;
}

function VideoPlaceholder({ src, alt, className }) {
  if (src) {
    return (
      <div className={className}>
        <video controls>
          <source src={src} />
        </video>
      </div>
    );
  }
  return <div className={`media-placeholder ${className || ""}`}>Video: {alt}</div>;
}

export default function InicioPage() {
  const [mosaico, setMosaico] = useState([]);
  const [presentacion, setPresentacion] = useState(null);
  const [equipo, setEquipo] = useState([]);
  const [publicaciones, setPublicaciones] = useState([]);
  const [razones, setRazones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function cargarDatos() {
      try {
        const [mosaicoData, presentacionData, equipoData, publicacionesData, razonesData] =
          await Promise.all([
            getMosaico(),
            getPresentacion(),
            getEquipo(),
            getPublicaciones(),
            getRazones(),
          ]);
        if (!cancelled) {
          setMosaico(mosaicoData);
          setPresentacion(presentacionData);
          setEquipo(equipoData);
          setPublicaciones(publicacionesData);
          setRazones(razonesData);
        }
      } catch {
        if (!cancelled) setError("No se pudo cargar el contenido de inicio.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    cargarDatos();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <Navbar />

      {loading && <p className="container" style={{ padding: 24 }}>Cargando...</p>}
      {error && <p className="container" style={{ padding: 24, color: "crimson" }}>{error}</p>}

      {mosaico.length > 0 && (
        <div className="mosaico">
          {mosaico.map((foto) => (
            <div key={foto.id} className="mosaico__item">
              <ImagePlaceholder src={foto.url} alt={foto.alt} />
            </div>
          ))}
        </div>
      )}

      {presentacion && (
        <section className="presentacion">
          <div className="presentacion__inner">
            <p className="presentacion__text">{presentacion.descripcion}</p>
            <ImagePlaceholder
              src={presentacion.imagenMascota}
              alt="mascota AAPOS"
              className="presentacion__mascota"
            />
          </div>
        </section>
      )}

      {equipo.length > 0 && (
        <section className="equipo">
          <h2 className="equipo__title">NUESTRO EQUIPO</h2>
          {equipo.map((persona) => (
            <div
              key={persona.id}
              className={`equipo__row ${persona.imagenLado === "derecha" ? "equipo__row--derecha" : ""}`}
            >
              <div className="equipo__media">
                <ImagePlaceholder src={persona.imagen} alt={persona.titulo} />
              </div>
              <div>
                <h3 className="equipo__title-item">{persona.titulo}</h3>
                <p className="equipo__text">{persona.texto}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      {publicaciones.length > 0 && (
        <section className="feed">
          {publicaciones.map((post) => (
            <article key={post.id} className="feed__post">
              <p className="feed__post-header">💧 {post.encabezado} 💧</p>
              <p className="feed__post-subtitle">{post.subtitulo}</p>
              <p className="feed__post-text">{post.texto}</p>
              <div className="feed__post-media">
              {post.medios.map((medio, i) => {
                if (medio.tipo === "galeria") {
                  return (
                    <div key={i} className="feed__media-item">
                      <Carousel images={medio.imagenes} />
                    </div>
                  );
                }
                return medio.tipo === "video" ? (
                  <VideoPlaceholder key={i} src={medio.src} alt={medio.alt} className="feed__media-item" />
                ) : (
                  <div key={i} className="feed__media-item">
                    <ImagePlaceholder src={medio.src} alt={medio.alt} />
                  </div>
                );
              })}
            </div>
            </article>
          ))}
        </section>
      )}

      {razones.length > 0 && (
        <section className="razones">
          <h2 className="razones__title">¡RAZONES PRINCIPALES PARA ELEGIRNOS!</h2>
          {razones.map((item) => (
            <div
              key={item.id}
              className={`razones__row ${item.imagenLado === "derecha" ? "razones__row--derecha" : ""}`}
            >
              <div className="razones__media">
                <ImagePlaceholder src={item.imagen} alt={item.titulo} />
              </div>
              <div>
                <h3 className="razones__title-item">{item.titulo.toUpperCase()}</h3>
                <p className="razones__text">{item.texto}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      <Footer />
    </div>
  );
}