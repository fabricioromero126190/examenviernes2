import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const NAV_ITEMS = [
  { label: "Inicio", to: "/" },
  { label: "Sobre nosotros", to: "/sobre-nosotros" },
  { label: "Servicios", to: "/servicios" },
  { label: "Contactos", to: "/contactos" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={
              "navbar__link" +
              (location.pathname === item.to ? " navbar__link--active" : "")
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
