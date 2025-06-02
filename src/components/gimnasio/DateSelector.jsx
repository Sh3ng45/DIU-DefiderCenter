import React from 'react';
import { Calendar } from 'lucide-react';

/**
 * DateSelector Component - Selector de fecha para reservas
 * Implementa principios de React: componente controlado
 */
const DateSelector = ({ 
  selectedDate, 
  onDateChange, 
  weekDays 
}) => {
  return (
    <div className="date-selector">
      <h3 className="selector-title">
        <Calendar className="title-icon" />
        Selecciona una fecha
      </h3>
      <div className="date-grid">
        {weekDays.map(day => (
          <button
            key={day.date}
            className={`date-button ${selectedDate === day.date ? 'selected' : ''} ${day.isToday ? 'today' : ''}`}
            onClick={() => onDateChange(day.date)}
          >
            <span className="date-display">{day.display}</span>
            {day.isToday && <span className="today-label">Hoy</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateSelector; 