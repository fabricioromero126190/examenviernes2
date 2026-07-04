import React, { useEffect, useState } from "react";
import { Facebook, Mail, Clock } from "lucide-react";
import { getContactoResumen } from "../api/contactosApi";
import "../styles/Footer.css";

export default function Footer() {
  const [contacto, setContacto] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getContactoResumen()
      .then((data) => {
        if (!cancelled) setContacto(data);
      })
      .catch(() => {
        if (!cancelled) setContacto(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!contacto) return null;

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <h3 className="footer__title">AAPOS POTOSÍ</h3>
          <p className="footer__line">
            <Clock size={16} />
            Horarios de atención: {contacto.horario}
          </p>
          <p className="footer__line">
            <Mail size={16} />
            {contacto.email}
          </p>
          <p className="footer__line">
            <Facebook size={16} />
            {contacto.facebook}
          </p>
        </div>
        <div className="footer__copyright">
          © 2022{" "}
          <a
            href="https://aapospotosi.sitio.serviciostigobusiness.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            aapospotosi.sitio.serviciostigobusiness.com
          </a>
        </div>
      </div>
    </footer>
  );
}
