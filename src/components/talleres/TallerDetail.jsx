import React from 'react';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';


const TallerDetail = ({ 
  taller, 
  onInscripcion 
}) => {
  if (!taller) return null;

  return (
    <div className="taller-detail">
      <div className="detail-header">
        <h2>{taller.nombre}</h2>
        <span className="detail-level">{taller.nivel}</span>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <h4>Información General</h4>
          <div className="detail-info">
            <div className="detail-item">
              <Clock className="detail-icon" />
              <div>
                <strong>Horario:</strong>
                <span>{taller.horario}</span>
              </div>
            </div>
            <div className="detail-item">
              <MapPin className="detail-icon" />
              <div>
                <strong>Ubicación:</strong>
                <span>{taller.ubicacion}</span>
              </div>
            </div>
            <div className="detail-item">
              <Users className="detail-icon" />
              <div>
                <strong>Instructor:</strong>
                <span>{taller.instructor}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h4>Descripción</h4>
          <p>{taller.descripcion}</p>
        </div>

        <div className="detail-section">
          <h4>Disponibilidad</h4>
          <div className="availability-info">
            <div className="availability-bar">
              <div
                className="availability-fill"
                style={{
                  width: `${(taller.ocupados / taller.cupos) * 100}%`
                }}
              />
            </div>
            <p>
              {taller.ocupados} de {taller.cupos} cupos ocupados
              ({taller.cupos - taller.ocupados} disponibles)
            </p>
          </div>
        </div>

        {/* Botón de inscripción - Affordance clara */}
        <div className="inscription-section">
          <button
            className={`inscription-button ${
              taller.ocupados >= taller.cupos ? 'disabled' : ''
            }`}
            onClick={() => onInscripcion(taller.id)}
            disabled={taller.ocupados >= taller.cupos}
          >
            <Calendar className="button-icon" />
            {taller.ocupados >= taller.cupos
              ? 'Sin cupos disponibles'
              : 'Inscribirse al taller'
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default TallerDetail; 