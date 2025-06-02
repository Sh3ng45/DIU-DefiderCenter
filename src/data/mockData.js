// Datos de talleres deportivos
export const mockTalleres = [
  {
    id: 1,
    nombre: "Fútbol Principiantes",
    deporte: "futbol",
    horario: "Lunes y Miércoles 18:00-19:30",
    ubicacion: "Cancha 1",
    cupos: 25,
    ocupados: 18,
    instructor: "Carlos Mendoza",
    descripcion: "Taller enfocado en fundamentos básicos del fútbol",
    precio: "Gratuito",
    nivel: "Principiante"
  },
  {
    id: 2,
    nombre: "Básquetbol Intermedio",
    deporte: "basquetbol",
    horario: "Martes y Jueves 17:00-18:30",
    ubicacion: "Gimnasio Principal",
    cupos: 20,
    ocupados: 15,
    instructor: "Ana Silva",
    descripcion: "Desarrollo de técnicas intermedias y juego en equipo",
    precio: "Gratuito",
    nivel: "Intermedio"
  },
  {
    id: 3,
    nombre: "Yoga y Mindfulness",
    deporte: "yoga",
    horario: "Lunes, Miércoles y Viernes 7:00-8:00",
    ubicacion: "Sala Multiuso",
    cupos: 15,
    ocupados: 12,
    instructor: "María González",
    descripcion: "Práctica de yoga con enfoque en bienestar mental",
    precio: "Gratuito",
    nivel: "Todos los niveles"
  },
  {
    id: 4,
    nombre: "Tenis de Mesa",
    deporte: "tenis-mesa",
    horario: "Martes y Jueves 19:00-20:30",
    ubicacion: "Sala de Tenis de Mesa",
    cupos: 12,
    ocupados: 8,
    instructor: "Roberto Chen",
    descripcion: "Técnicas básicas e intermedias de tenis de mesa",
    precio: "Gratuito",
    nivel: "Principiante/Intermedio"
  },
  {
    id: 5,
    nombre: "Natación Libre",
    deporte: "natacion",
    horario: "Lunes a Viernes 12:00-13:00",
    ubicacion: "Piscina",
    cupos: 30,
    ocupados: 22,
    instructor: "Laura Pérez",
    descripcion: "Práctica libre de natación con supervisión",
    precio: "Gratuito",
    nivel: "Todos los niveles"
  }
];

// Opciones de deportes para filtros
export const deporteOptions = [
  { value: "", label: "Todos los deportes" },
  { value: "futbol", label: "Fútbol" },
  { value: "basquetbol", label: "Básquetbol" },
  { value: "yoga", label: "Yoga" },
  { value: "tenis-mesa", label: "Tenis de Mesa" },
  { value: "natacion", label: "Natación" }
];

// Datos de espacios del gimnasio
export const espaciosGimnasio = [
  { id: 'sala-pesas', nombre: 'Sala de Pesas', capacidad: 25 },
  { id: 'cancha-multiuso', nombre: 'Cancha Multiuso', capacidad: 40 }
];

// Horarios disponibles del gimnasio
export const horariosDisponibles = [
  '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

// Función para generar reservas mock del gimnasio
export const generateMockReservas = () => {
  const reservas = {};
  const today = new Date();
  
  // Generar para los próximos 7 días
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateKey = date.toISOString().split('T')[0];
    
    reservas[dateKey] = {};
    
    espaciosGimnasio.forEach(espacio => {
      reservas[dateKey][espacio.id] = {};
      
      horariosDisponibles.forEach(horario => {
        // Simular algunas reservas existentes
        const ocupados = Math.floor(Math.random() * espacio.capacidad * 0.8);
        reservas[dateKey][espacio.id][horario] = {
          ocupados,
          disponibles: espacio.capacidad - ocupados
        };
      });
    });
  }
  
  return reservas;
};

// Datos de selecciones deportivas
export const mockSelecciones = [
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