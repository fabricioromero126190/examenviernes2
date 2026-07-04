import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getRequisitosOdeco, getObjetivos } from "../api/servicioApi";
import "../styles/Servicio.css";

function ImagePlaceholder({ src, alt, className }) {
  if (src) {
    return <img src={src} alt={alt} className={className} />;
  }
  return <div className={`media-placeholder ${className || ""}`}>Imagen: {alt}</div>;
}

export default function ServiciosPage() {
  const [requisitos, setRequisitos] = useState(null);
  const [objetivos, setObjetivos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function cargarDatos() {
      try {
        const [requisitosData, objetivosData] = await Promise.all([
          getRequisitosOdeco(),
          getObjetivos(),
        ]);
        if (!cancelled) {
          setRequisitos(requisitosData);
          setObjetivos(objetivosData);
        }
      } catch {
        if (!cancelled) setError("No se pudieron cargar los servicios.");
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

      <div className="page-banner">
        <h1 className="page-banner__title">NUESTROS SERVICIOS</h1>
      </div>

      {loading && <p className="container" style={{ padding: 24 }}>Cargando servicios...</p>}
      {error && <p className="container" style={{ padding: 24, color: "crimson" }}>{error}</p>}

      {requisitos && (
        <section className="odeco">
          {requisitos.fondoMascota && (
            <img src={requisitos.fondoMascota} alt="" className="odeco__watermark" />
          )}
          <div className="odeco__content">
            <h2 className="odeco__main-title">ODECO{"\n"}REQUISITOS</h2>
            {requisitos.secciones.map((seccion) => (
              <div key={seccion.id} className="odeco__section">
                <h3 className="odeco__section-title">{seccion.titulo}</h3>
                <ul className="odeco__list">
                  {seccion.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {objetivos.length > 0 && (
        <section className="objetivos">
          <div className="objetivos__grid">
            {objetivos.map((obj) => (
              <div
                key={obj.id}
                className={`objetivos__item ${obj.tipo === "texto" ? "objetivos__item--texto" : ""}`}
              >
                {obj.tipo === "foto" && (
                  <div className="objetivos__media">
                    <ImagePlaceholder src={obj.imagen} alt={obj.texto} />
                  </div>
                )}
                <p className="objetivos__text">{obj.texto}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}