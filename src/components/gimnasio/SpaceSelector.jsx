import React from 'react';
import { MapPin, Users } from 'lucide-react';

/**
 * SpaceSelector Component - Selector de espacio del gimnasio
 * Implementa principios de React: componente controlado
 */
const SpaceSelector = ({ 
  selectedEspacio, 
  onEspacioChange, 
  espacios 
}) => {
  return (
    <div className="space-selector">
      <h3 className="selector-title">
        <MapPin className="title-icon" />
        Espacio del gimnasio
      </h3>
      <div className="space-grid">
        {espacios.map(espacio => (
          <button
            key={espacio.id}
            className={`space-button ${selectedEspacio === espacio.id ? 'selected' : ''}`}
            onClick={() => onEspacioChange(espacio.id)}
          >
            <div className="space-name">{espacio.nombre}</div>
            <div className="space-capacity">
              <Users className="capacity-icon" />
              Capacidad: {espacio.capacidad} personas
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpaceSelector; 