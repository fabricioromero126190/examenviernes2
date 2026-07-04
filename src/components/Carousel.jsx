import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/Carousel.css";

export default function Carousel({ images = [] }) {
  const [slide, setSlide] = useState(0);

  if (images.length === 0) return null;

  const next = () => setSlide((s) => (s + 1) % images.length);
  const prev = () => setSlide((s) => (s - 1 + images.length) % images.length);
  const current = images[slide];

  return (
    <div>
      <div className="carousel">
        {current.url ? (
          <img className="carousel__image" src={current.url} alt={current.alt} />
        ) : (
          <div className="carousel__caption">{current.alt}</div>
        )}

        <button className="carousel__arrow carousel__arrow--left" onClick={prev} aria-label="Anterior">
          <ChevronLeft size={20} />
        </button>
        <button className="carousel__arrow carousel__arrow--right" onClick={next} aria-label="Siguiente">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="carousel__dots">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={"carousel__dot" + (i === slide ? " carousel__dot--active" : "")}
          />
        ))}
      </div>
    </div>
  );
}
