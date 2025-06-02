import React, { useState } from 'react';
import { Trophy, Clock, MapPin, Users, Star, Calendar, FileText, Send } from 'lucide-react';
import '../styles/SeleccionesPage.css';



const mockSelecciones = [
  {
    id: 1,
    nombre: "Selección de Fútbol Femenino",
    deporte: "Fútbol",
    categoria: "Femenino",
    nivel: "Competitivo",
    entrenador: "Patricia Morales",
    horarios: [
      "Lunes 18:00-20:00",
      "Miércoles 18:00-20:00", 
      "Viernes 16:00-18:00"
    ],
    ubicacion: "Cancha Principal",
    descripcion: "Selección universitaria que participa en el campeonato nacional universitario. Buscamos jugadoras comprometidas con experiencia previa.",
    requisitos: [
      "Estudiante regular de la universidad",
      "Certificado médico vigente",
      "Experiencia previa en fútbol (mínimo 2 años)",
      "Disponibilidad para entrenamientos y competencias",
      "Compromiso con asistencia mínima del 80%"
    ],
    beneficios: [
      "Participación en torneos nacionales",
      "Equipamiento deportivo completo",
      "Preparación física profesional",
      "Reconocimiento académico por participación deportiva"
    ],
    temporada: "Marzo - Noviembre",
    postulacionesAbiertas: true,
    fechaLimite: "2025-02-28"
  },
  {
    id: 2,
    nombre: "Selección de Básquetbol Masculino",
    deporte: "Básquetbol",
    categoria: "Masculino",
    nivel: "Competitivo",
    entrenador: "Carlos Hernández",
    horarios: [
      "Martes 19:00-21:00",
      "Jueves 19:00-21:00",
      "Sábado 09:00-11:00"
    ],
    ubicacion: "Gimnasio Principal",
    descripcion: "Equipo competitivo que representa a la universidad en la liga nacional. Buscamos jugadores con alto nivel técnico y compromiso.",
    requisitos: [
      "Estudiante regular de la universidad",
      "Altura mínima: 1.75m",
      "Experiencia competitiva en básquetbol",
      "Excelente estado físico",
      "Disponibilidad para viajes y competencias"
    ],
    beneficios: [
      "Participación en liga nacional universitaria",
      "Equipamiento y uniformes oficiales",
      "Preparación técnica especializada",
      "Becas deportivas disponibles"
    ],
    temporada: "Abril - Octubre",
    postulacionesAbiertas: true,
    fechaLimite: "2025-03-15"
  },
  {
    id: 3,
    nombre: "Selección de Natación",
    deporte: "Natación",
    categoria: "Mixto",
    nivel: "Competitivo",
    entrenador: "Ana López",
    horarios: [
      "Lunes 06:00-08:00",
      "Miércoles 06:00-08:00",
      "Viernes 06:00-08:00",
      "Sábado 08:00-10:00"
    ],
    ubicacion: "Piscina Olímpica",
    descripcion: "Equipo de natación de alto rendimiento. Participamos en competencias regionales y nacionales. Ambiente de excelencia deportiva.",
    requisitos: [
      "Estudiante regular de la universidad",
      "Dominio de al menos 3 estilos de natación",
      "Tiempos competitivos en alguna distancia",
      "Disponibilidad horarios matutinos",
      "Compromiso de largo plazo (mínimo 1 año)"
    ],
    beneficios: [
      "Entrenamiento de alto rendimiento",
      "Participación en competencias nacionales",
      "Acceso a instalaciones especializadas",
      "Seguimiento nutricional y médico"
    ],
    temporada: "Todo el año",
    postulacionesAbiertas: false,
    fechaLimite: "2025-01-31"
  },
  {
    id: 4,
    nombre: "Selección de Tenis de Mesa",
    deporte: "Tenis de Mesa",
    categoria: "Mixto",
    nivel: "Intermedio-Avanzado",
    entrenador: "Roberto Chen",
    horarios: [
      "Martes 17:00-19:00",
      "Jueves 17:00-19:00"
    ],
    ubicacion: "Sala de Tenis de Mesa",
    descripcion: "Equipo en crecimiento que busca talentos para formar una selección competitiva. Ambiente de aprendizaje y mejora continua.",
    requisitos: [
      "Estudiante regular de la universidad",
      "Conocimientos básicos de tenis de mesa",
      "Actitud de aprendizaje y mejora",
      "Disponibilidad para entrenamientos regulares"
    ],
    beneficios: [
      "Entrenamiento técnico especializado",
      "Equipamiento oficial",
      "Participación en torneos universitarios",
      "Desarrollo de habilidades competitivas"
    ],
    temporada: "Marzo - Diciembre",
    postulacionesAbiertas: true,
    fechaLimite: "2025-02-20"
  }
];

const SeleccionesPage = () => {
  const [selectedSeleccion, setSelectedSeleccion] = useState(null);
  const [showPostulacionForm, setShowPostulacionForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    carrera: '',
    año: '',
    experiencia: '',
    motivacion: '',
    disponibilidad: true
  });

  // Función para manejar cambios en el formulario
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Función para enviar postulación
  const handleSubmitPostulacion = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.telefono) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    alert(`¡Postulación enviada exitosamente para ${selectedSeleccion.nombre}! Te contactaremos pronto.`);
    

    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      carrera: '',
      año: '',
      experiencia: '',
      motivacion: '',
      disponibilidad: true
    });
    setShowPostulacionForm(false);
  };

  return (
    <div className="selecciones-page">
      <div className="container">
        {/* Header de la página */}
        <div className="page-header">
          <h1 className="page-title">Selecciones Deportivas</h1>
          <p className="page-subtitle">
            Descubre los equipos deportivos universitarios, conoce sus requisitos y postula para formar parte de la excelencia deportiva USFA.
          </p>
        </div>

        {/* Grid de selecciones */}
        <div className="selecciones-layout">
          {/* Lista de selecciones */}
          <div className="selecciones-grid">
            {mockSelecciones.map(seleccion => (
              <div
                key={seleccion.id}
                className={`seleccion-card ${selectedSeleccion?.id === seleccion.id ? 'selected' : ''}`}
                onClick={() => setSelectedSeleccion(seleccion)}
                role="button"
                tabIndex={0}
                aria-label={`Ver detalles de ${seleccion.nombre}`}
              >
                <div className="card-header">
                  <div className="sport-badge">
                    <Trophy className="sport-icon" />
                    <span>{seleccion.deporte}</span>
                  </div>
                  <div className={`status-badge ${seleccion.postulacionesAbiertas ? 'open' : 'closed'}`}>
                    {seleccion.postulacionesAbiertas ? 'Postulaciones Abiertas' : 'Cerrado'}
                  </div>
                </div>

                <h3 className="seleccion-name">{seleccion.nombre}</h3>
                
                <div className="seleccion-info">
                  <div className="info-item">
                    <Users className="info-icon" />
                    <span>{seleccion.categoria} - {seleccion.nivel}</span>
                  </div>
                  <div className="info-item">
                    <Star className="info-icon" />
                    <span>Entrenador: {seleccion.entrenador}</span>
                  </div>
                  <div className="info-item">
                    <MapPin className="info-icon" />
                    <span>{seleccion.ubicacion}</span>
                  </div>
                  <div className="info-item">
                    <Calendar className="info-icon" />
                    <span>Temporada: {seleccion.temporada}</span>
                  </div>
                </div>

                {seleccion.postulacionesAbiertas && (
                  <div className="deadline-info">
                    <Clock className="deadline-icon" />
                    <span>Fecha límite: {new Date(seleccion.fechaLimite).toLocaleDateString('es-ES')}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Panel de detalles */}
          {selectedSeleccion && (
            <div className="seleccion-detail">
              <div className="detail-header">
                <h2>{selectedSeleccion.nombre}</h2>
                <div className="header-badges">
                  <span className="level-badge">{selectedSeleccion.nivel}</span>
                  <span className={`status-badge ${selectedSeleccion.postulacionesAbiertas ? 'open' : 'closed'}`}>
                    {selectedSeleccion.postulacionesAbiertas ? 'Postulaciones Abiertas' : 'Cerrado'}
                  </span>
                </div>
              </div>

              <div className="detail-content">
                {/* Descripción */}
                <div className="detail-section">
                  <h4>Descripción</h4>
                  <p>{selectedSeleccion.descripcion}</p>
                </div>

                {/* Información general */}
                <div className="detail-section">
                  <h4>Información General</h4>
                  <div className="detail-info">
                    <div className="detail-item">
                      <Users className="detail-icon" />
                      <div>
                        <strong>Entrenador:</strong>
                        <span>{selectedSeleccion.entrenador}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <MapPin className="detail-icon" />
                      <div>
                        <strong>Ubicación:</strong>
                        <span>{selectedSeleccion.ubicacion}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <Calendar className="detail-icon" />
                      <div>
                        <strong>Temporada:</strong>
                        <span>{selectedSeleccion.temporada}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horarios */}
                <div className="detail-section">
                  <h4>Horarios de Entrenamiento</h4>
                  <div className="horarios-list">
                    {selectedSeleccion.horarios.map((horario, index) => (
                      <div key={index} className="horario-item">
                        <Clock className="horario-icon" />
                        <span>{horario}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requisitos */}
                <div className="detail-section">
                  <h4>Requisitos</h4>
                  <ul className="requirements-list">
                    {selectedSeleccion.requisitos.map((requisito, index) => (
                      <li key={index}>{requisito}</li>
                    ))}
                  </ul>
                </div>

                {/* Beneficios */}
                <div className="detail-section">
                  <h4>Beneficios</h4>
                  <ul className="benefits-list">
                    {selectedSeleccion.beneficios.map((beneficio, index) => (
                      <li key={index}>{beneficio}</li>
                    ))}
                  </ul>
                </div>

                {/* Botón de postulación */}
                {selectedSeleccion.postulacionesAbiertas && (
                  <div className="postulacion-section">
                    <div className="deadline-reminder">
                      <Clock className="reminder-icon" />
                      <span>
                        Fecha límite: {new Date(selectedSeleccion.fechaLimite).toLocaleDateString('es-ES', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <button
                      className="postular-button"
                      onClick={() => setShowPostulacionForm(true)}
                    >
                      <Send className="button-icon" />
                      Postular a esta selección
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>


        {showPostulacionForm && selectedSeleccion && (
          <div className="modal-overlay" onClick={() => setShowPostulacionForm(false)}>
            <div className="postulacion-modal" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Postular a {selectedSeleccion.nombre}</h3>
                <button 
                  className="close-button"
                  onClick={() => setShowPostulacionForm(false)}
                  aria-label="Cerrar modal"
                >
                  ×
                </button>
              </div>
              
              <form className="postulacion-form" onSubmit={handleSubmitPostulacion}>
                <div className="form-section">
                  <h4>Información Personal</h4>
                  
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono *</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="carrera">Carrera</label>
                      <input
                        type="text"
                        id="carrera"
                        name="carrera"
                        value={formData.carrera}
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="año">Año de estudio</label>
                      <select
                        id="año"
                        name="año"
                        value={formData.año}
                        onChange={handleFormChange}
                      >
                        <option value="">Selecciona</option>
                        <option value="1">1er año</option>
                        <option value="2">2do año</option>
                        <option value="3">3er año</option>
                        <option value="4">4to año</option>
                        <option value="5">5to año</option>
                        <option value="postgrado">Postgrado</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Información Deportiva</h4>
                  
                  <div className="form-group">
                    <label htmlFor="experiencia">Experiencia Deportiva</label>
                    <textarea
                      id="experiencia"
                      name="experiencia"
                      value={formData.experiencia}
                      onChange={handleFormChange}
                      placeholder="Describe tu experiencia previa en este deporte..."
                      rows={4}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="motivacion">Motivación</label>
                    <textarea
                      id="motivacion"
                      name="motivacion"
                      value={formData.motivacion}
                      onChange={handleFormChange}
                      placeholder="¿Por qué quieres formar parte de esta selección?"
                      rows={4}
                    />
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="disponibilidad"
                        checked={formData.disponibilidad}
                        onChange={handleFormChange}
                      />
                      <span className="checkmark"></span>
                      Confirmo que tengo disponibilidad para asistir a todos los entrenamientos programados
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    type="button"
                    className="cancel-button"
                    onClick={() => setShowPostulacionForm(false)}
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    className="submit-button"
                  >
                    <Send className="button-icon" />
                    Enviar Postulación
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeleccionesPage;
