import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, CheckCircle, X } from 'lucide-react';
import { DateSelector, SpaceSelector } from '../components/gimnasio';
import { espaciosGimnasio, horariosDisponibles, generateMockReservas } from '../data/mockData';
import '../styles/GimnasioPage.css';

const GimnasioPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedEspacio, setSelectedEspacio] = useState('sala-pesas');
  const [selectedHorario, setSelectedHorario] = useState('');
  const [reservas, setReservas] = useState(generateMockReservas());
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservaDetails, setReservaDetails] = useState(null);

  const getNextWeekDays = () => {
    const days = [];
    const today = new Date();
    let daysAdded = 0;
    let i = 0;

    while (daysAdded < 6) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // 0 es Domingo, 1 es Lunes, ..., 6 es Sábado
      // Solo agregar si no es Domingo (getDay() !== 0)
      if (date.getDay() !== 0) {
        days.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('es-ES', { 
            weekday: 'short', 
            day: 'numeric',
            month: 'short'
          }),
          isToday: date.toDateString() === today.toDateString() && i === 0 // Ajustar isToday para la fecha actual real
        });
        daysAdded++;
      }
      i++;
    }
    
    // Asegurar que 'isToday' se marque correctamente si el primer día hábil es hoy
    if (days.length > 0) {
        const firstDayDate = new Date(days[0].date + 'T00:00:00'); // Asegurar que se compara solo la fecha
        const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        if (firstDayDate.getTime() === todayDateOnly.getTime()) {
            days[0].isToday = true;
        } else {
            // Si el primer día no es hoy, ningún día es 'isToday' en este contexto de "próximos 7 días hábiles"
            // o podrías buscar si 'today' está en la lista y marcarlo.
            // Por simplicidad, si el primer día hábil no es hoy, no marcamos ninguno como 'isToday'.
            // Opcionalmente, puedes iterar 'days' para encontrar si 'today' (si es hábil) está en la lista.
            days.forEach(day => {
                const currentDate = new Date(day.date + 'T00:00:00');
                if (currentDate.getTime() === todayDateOnly.getTime() && today.getDay() !== 0) {
                    day.isToday = true;
                } else {
                    day.isToday = false; // Asegurar que otros no se marquen incorrectamente
                }
            });
        }
    }


    return days;
  };

  // Función para manejar la reserva
  const handleReserva = () => {
    if (!selectedHorario) {
      alert('Por favor selecciona un horario');
      return;
    }

    const espacio = espaciosGimnasio.find(e => e.id === selectedEspacio);
    const horarioData = reservas[selectedDate]?.[selectedEspacio]?.[selectedHorario];

    if (horarioData && horarioData.disponibles > 0) {
      setReservaDetails({
        espacio: espacio.nombre,
        fecha: selectedDate,
        horario: selectedHorario,
        disponibles: horarioData.disponibles
      });
      setShowConfirmation(true);
    } else {
      alert('No hay cupos disponibles para este horario');
    }
  };

  // Confirmar reserva
  const confirmarReserva = () => {
    // Actualizar el estado local
    setReservas(prev => {
      const newReservas = { ...prev };
      const horarioData = newReservas[selectedDate][selectedEspacio][selectedHorario];
      
      newReservas[selectedDate][selectedEspacio][selectedHorario] = {
        ...horarioData,
        ocupados: horarioData.ocupados + 1,
        disponibles: horarioData.disponibles - 1
      };
      
      return newReservas;
    });

    setShowConfirmation(false);
    setSelectedHorario('');
    alert('¡Reserva confirmada exitosamente!');
  };

  const weekDays = getNextWeekDays();

  return (
    <div className="gimnasio-page">
      <div className="container">
        {/* Header de la página */}
        <div className="page-header">
          <h1 className="page-title">Reservas de Gimnasio</h1>
          <p className="page-subtitle">
            Consulta la disponibilidad y reserva tu bloque de entrenamiento en el gimnasio.
          </p>
        </div>


        <DateSelector
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          weekDays={weekDays}
        />


        <SpaceSelector
          selectedEspacio={selectedEspacio}
          onEspacioChange={setSelectedEspacio}
          espacios={espaciosGimnasio}
        />

        <div className="schedule-section">
          <h3 className="selector-title">
            <Clock className="title-icon" />
            Horarios disponibles para {selectedDate}
          </h3>
          
          <div className="schedule-grid">
            {horariosDisponibles.map(horario => {
              const horarioData = reservas[selectedDate]?.[selectedEspacio]?.[horario];
              const isAvailable = horarioData && horarioData.disponibles > 0;
              const occupancyRate = horarioData ? 
                (horarioData.ocupados / espaciosGimnasio.find(e => e.id === selectedEspacio).capacidad) * 100 : 0;

              return (
                <div
                  key={horario}
                  className={`schedule-slot ${!isAvailable ? 'unavailable' : ''} ${
                    selectedHorario === horario ? 'selected' : ''
                  }`}
                  onClick={() => isAvailable && setSelectedHorario(horario)}
                  role="button"
                  tabIndex={isAvailable ? 0 : -1}
                  aria-label={`${horario} - ${isAvailable ? 'Disponible' : 'No disponible'}`}
                >
                  <div className="slot-time">{horario}</div>
                  
                  {horarioData && (
                    <>
                      <div className="slot-availability">
                        <Users className="slot-icon" />
                        <span>{horarioData.disponibles} disponibles</span>
                      </div>
                      

                      <div className="occupancy-indicator">
                        <div 
                          className="occupancy-bar"
                          style={{
                            width: `${occupancyRate}%`,
                            backgroundColor: occupancyRate > 80 ? '#ef4444' : 
                                           occupancyRate > 60 ? '#f59e0b' : '#10b981'
                          }}
                        />
                      </div>
                      
                      <div className="slot-status">
                        {isAvailable ? (
                          <CheckCircle className="status-icon available" />
                        ) : (
                          <X className="status-icon unavailable" />
                        )}
                        <span className={isAvailable ? 'available-text' : 'unavailable-text'}>
                          {isAvailable ? 'Disponible' : 'Completo'}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Botón de reserva */}
        <div className={`reservation-section ${!selectedHorario ? 'hidden' : ''}`}>
        <button
            className={`reserve-button ${!selectedHorario ? 'disabled' : ''}`}
            onClick={handleReserva}
            disabled={!selectedHorario}
        >
            <Calendar className="button-icon" />
            {selectedHorario ? 
            `Reservar ${selectedHorario} en ${espaciosGimnasio.find(e => e.id === selectedEspacio)?.nombre}` :
            'Selecciona un horario para reservar'
            }
        </button>
        </div>

        {showConfirmation && reservaDetails && (
          <div className="modal-overlay" onClick={() => setShowConfirmation(false)}>
            <div className="confirmation-modal" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Confirmar Reserva</h3>
                <button 
                  className="close-button"
                  onClick={() => setShowConfirmation(false)}
                  aria-label="Cerrar modal"
                >
                  <X className="close-icon" />
                </button>
              </div>
              
              <div className="modal-content">
                <div className="reservation-summary">
                  <div className="summary-item">
                    <MapPin className="summary-icon" />
                    <div>
                      <strong>Espacio:</strong>
                      <span>{reservaDetails.espacio}</span>
                    </div>
                  </div>
                  
                  <div className="summary-item">
                    <Calendar className="summary-icon" />
                    <div>
                      <strong>Fecha:</strong>
                      <span>{new Date(reservaDetails.fecha).toLocaleDateString('es-ES', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                  </div>
                  
                  <div className="summary-item">
                    <Clock className="summary-icon" />
                    <div>
                      <strong>Horario:</strong>
                      <span>{reservaDetails.horario}</span>
                    </div>
                  </div>
                  
                  <div className="summary-item">
                    <Users className="summary-icon" />
                    <div>
                      <strong>Cupos disponibles:</strong>
                      <span>{reservaDetails.disponibles}</span>
                    </div>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button 
                    className="cancel-button"
                    onClick={() => setShowConfirmation(false)}
                  >
                    Cancelar
                  </button>
                  <button 
                    className="confirm-button"
                    onClick={confirmarReserva}
                  >
                    <CheckCircle className="button-icon" />
                    Confirmar Reserva
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GimnasioPage;
