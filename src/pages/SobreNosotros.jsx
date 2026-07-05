import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { getResenaHistorica, getVisionMisionValores, getGaleriaHistoria } from "../api/sobreNosotros";
import "../styles/SobreNosotros.css";

export default function SobreNosotrosPage() {
  const [resena, setResena] = useState(null);
  const [vmv, setVmv] = useState(null);
  const [galeria, setGaleria] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function cargarDatos() {
      try {
       const [resenaData, vmvData, galeriaData] = await Promise.all([
        getResenaHistorica(),
        getVisionMisionValores(),
        getGaleriaHistoria(),
      ]);
      if (!cancelled) {
        setResena(resenaData);
        setVmv(vmvData);
        setGaleria(galeriaData);
      }
      } catch {
        if (!cancelled) setError("No se pudo cargar la información institucional.");
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
        <h1 className="page-banner__title">SOBRE NOSOTROS</h1>
      </div>

      {loading && <p className="container" style={{ padding: 24 }}>Cargando información...</p>}
      {error && <p className="container" style={{ padding: 24, color: "crimson" }}>{error}</p>}

      {resena && (
  <section className="history">
    <div className="history__grid">
      <div className="history__text">
        <p className="history__brand">"{resena.titulo}"</p>
        <p className="history__brand">{resena.subtitulo}</p>
        <p className="history__label">RESEÑA HISTÓRICA</p>
        <p className="history__tagline">
          Empresa Prestadora de Servicios de Agua Potable y Alcantarillado
        </p>
        {resena.parrafos.map((texto, i) => (
          <p key={i} className="history__paragraph">{texto}</p>
        ))}
      </div>

      <Carousel images={galeria} />
    </div>
  </section>
)}

      {vmv && (
        <section className="vmv">
          <div className="vmv__inner">
            <div className="vmv__row vmv__row--vision">
              <div>
                <h2 className="vmv__title">NUESTRA VISIÓN</h2>
                <p className="vmv__text">{vmv.vision}</p>
              </div>
              <img
                src={vmv.imagenVision}
                alt="Visión y misión AAPOS"
                className="vmv__mascot-img"
                style={{ width: 140 }}
              />
            </div>

           <div className="vmv__row vmv__row--mision">
              <img
                src={vmv.imagenMisionGrupo}
                alt="Familia de mascotas AAPOS"
                className="vmv__mascot-img"
                style={{ width: 220 }}
              />
              <div>
                <h2 className="vmv__title">NUESTRA MISIÓN</h2>
                <p className="vmv__text">{vmv.mision}</p>
              </div>
            </div>

            <div className="vmv__row vmv__row--valores">
              <div>
                <h2 className="vmv__title">VALORES</h2>
                <p className="vmv__text">{vmv.valores}</p>
              </div>
              <div className="vmv__media">
                <img src={vmv.imagenValores} alt="Cuadrilla de AAPOS en obra" />
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}