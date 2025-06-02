import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';


///HeroSection Component - Sección hero de la página principal

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Deportes USFA
        </h1>
        <p className="hero-subtitle">
          Tu plataforma integral para talleres deportivos, reservas de gimnasio y selecciones universitarias
        </p>
        
        <div className="hero-actions">
          <a href="/talleres" className="cta-button primary">
            <Calendar className="cta-icon" />
            Explorar Talleres
          </a>
          <a href="/gimnasio" className="cta-button secondary">
            <MapPin className="cta-icon" />
            Reservar Gimnasio
          </a>
        </div>
      </div>
      
      <div className="hero-image">
        <div className="hero-placeholder">
          <Users className="hero-icon" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 