import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getContactoCompleto } from "../api/contactosApi";
import "../styles/Contactos.css";
import { assetUrl } from "../utils/assetUrl";

export default function ContactosPage() {
  const [contacto, setContacto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getContactoCompleto()
      .then((data) => {
        if (!cancelled) setContacto(data);
      })
      .catch(() => {
        if (!cancelled) setError("No se pudo cargar la información de contacto.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <Navbar />

      <div className="page-banner">
        <h1 className="page-banner__title">CONTÁCTANOS</h1>
      </div>

      {loading && <p className="container" style={{ padding: 24 }}>Cargando contactos...</p>}
      {error && <p className="container" style={{ padding: 24, color: "crimson" }}>{error}</p>}

      {contacto && (
        <section className="contactos">
          <div className="contactos__grid">
            <div className="contactos__block">
              <img src={assetUrl("/img/icono-telefono.png")} alt="Teléfono" className="contactos__icon" />
              <div className="contactos__info">
                <h2 className="contactos__title">NÚMEROS DE CONTACTO</h2>
                <p className="contactos__subtitle">EMERGENCIAS</p>
                {contacto.emergencias.map((num, i) => (
                  <p key={i} className="contactos__line">{num}</p>
                ))}
                <p className="contactos__subtitle">OFICINAS ODECO</p>
                {contacto.oficinasOdeco.map((num, i) => (
                  <p key={i} className="contactos__line">{num}</p>
                ))}
              </div>
            </div>

            <div className="contactos__block">
              <img src={assetUrl("/img/icono-ubicacion.png")} alt="Ubicación" className="contactos__icon" />
              <div className="contactos__info">
                <h2 className="contactos__title">DIRECCIÓN CENTRAL</h2>
                <p className="contactos__line">{contacto.direccionCentral}</p>
                <h2 className="contactos__title" style={{ marginTop: 20 }}>DIRECCIÓN TÉCNICA</h2>
                <p className="contactos__line">{contacto.direccionTecnica}</p>
                <h2 className="contactos__title" style={{ marginTop: 20 }}>CORREO ELECTRÓNICO</h2>
                <p className="contactos__email">{contacto.correo}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}