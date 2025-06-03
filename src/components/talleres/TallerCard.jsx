import React from 'react';
import { Clock, MapPin, Users } from 'lucide-react';

const TallerCard = ({ 
  taller, 
  isSelected, 
  onClick 
}) => {
  return (
    <div
      className={`taller-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles del taller ${taller.nombre}`}
    >
      <div className="taller-card-content">
        {/* Imagen del taller */}
        <div className="taller-image">
          <img 
            src={taller.imagen || '/images/default-taller.jpg'} 
            alt={`Imagen del taller ${taller.nombre}`}
            className="taller-img"
          />
        </div>

        {/* Contenido de texto */}
        <div className="taller-text-content">
          <div className="taller-header">
            <h3 className="taller-name">{taller.nombre}</h3>
            <span className="taller-level">{taller.nivel}</span>
          </div>

          <div className="taller-info">
            <div className="info-item">
              <Clock className="info-icon" />
              <span>{taller.dia[0]} y {taller.dia[1]} en bloque {taller.bloque}</span>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <span>{taller.ubicacion}</span>
            </div>
            <div className="info-item">
              <Users className="info-icon" />
              <span>{taller.ocupados}/{taller.cupos} inscritos</span>
            </div>
          </div>

          {/* Indicador visual de disponibilidad */}
          <div className="cupos-indicator">
            <div className="cupos-bar">
              <div
                className="cupos-fill"
                style={{
                  width: `${(taller.ocupados / taller.cupos) * 100}%`,
                  backgroundColor: taller.ocupados >= taller.cupos ? '#ef4444' : '#10b981'
                }}
              />
            </div>
            <span className="cupos-text">
              {taller.cupos - taller.ocupados} cupos disponibles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TallerCard;