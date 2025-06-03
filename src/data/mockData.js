// Datos de talleres deportivos
export const mockTalleres = [
  {
    id: 1,
    nombre: "Fútbol Principiantes",
    deporte: "futbol",
    dia: ["Lunes", "Miércoles"],
    bloque: "13-14",
    ubicacion: "Concepción",
    cupos: 25,
    ocupados: 18,
    instructor: "Carlos Mendoza",
    descripcion: "Taller enfocado en fundamentos básicos del fútbol",
    nivel: "Principiante",
    imagen: "/src/images/futbol-usm.jpg"
  },
  {
    id: 2,
    nombre: "Básquetbol Intermedio",
    deporte: "basquetbol",
    dia: ["Martes", "Jueves"],
    bloque: "11-12",
    ubicacion: "Viña del Mar",
    cupos: 20,
    ocupados: 15,
    instructor: "Ana Silva",
    descripcion: "Desarrollo de técnicas intermedias y juego en equipo",
    nivel: "Intermedio",
    imagen: "/src/images/basquetbol-usm.jpg"
  },
  {
    id: 3,
    nombre: "Yoga y Mindfulness",
    deporte: "yoga",
    dia: ["Lunes", "Miércoles"],
    bloque: "1-2",
    ubicacion: "San Joaquín",
    cupos: 15,
    ocupados: 12,
    instructor: "María González",
    descripcion: "Práctica de yoga con enfoque en bienestar mental",
    nivel: "Todos los niveles",
    imagen: "/src/images/Yoga-intermedio.jpg"
  },
  {
    id: 4,
    nombre: "Tenis de Mesa",
    deporte: "tenis-mesa",
    dia: ["Martes", "Jueves"],
    bloque: "15-16",
    ubicacion: "Vitacura",
    cupos: 12,
    ocupados: 8,
    instructor: "Roberto Chen",
    descripcion: "Técnicas básicas e intermedias de tenis de mesa",
    nivel: "Principiante/Intermedio",
    imagen: "/src/images/tenis-de-mesa-usm.jpg"
  },
  {
    id: 5,
    nombre: "Natación Libre",
    deporte: "natacion",
    dia: ["Miércoles", "Jueves"],
    bloque: "7-8",
    ubicacion: "Casa Central",
    cupos: 30,
    ocupados: 22,
    instructor: "Laura Pérez",
    descripcion: "Práctica libre de natación con supervisión",
    nivel: "Todos los niveles",
    imagen: "/src/images/natacion-usm.jpg"
  }
];

// Datos de ubicaciones para filtros
export const ubicacionOptions = [
  { value: "", label: "Todas las ubicaciones" },
  { value: "Concepción", label: "Concepción" },
  { value: "Viña del Mar", label: "Viña del Mar" },
  { value: "San Joaquín", label: "San Joaquín" },
  { value: "Vitacura", label: "Vitacura" },
  { value: "Casa Central", label: "Casa Central" }
];

// Datos de bloques horarios para filtros
export const bloqueOptions = [
  { value: "", label: "Todos los bloques" },
  { value: "1-2", label: "Bloque 1-2" },
  { value: "3-4", label: "Bloque 3-4" },
  { value: "5-6", label: "Bloque 5-6" },
  { value: "7-8", label: "Bloque 7-8" },
  { value: "9-10", label: "Bloque 9-10" },
  { value: "11-12", label: "Bloque 11-12" },
  { value: "13-14", label: "Bloque 13-14" },
  { value: "15-16", label: "Bloque 15-16" },
  { value: "16-17", label: "Bloque 16-17" },
  { value: "17-18", label: "Bloque 17-18" }
];

// Dias de la semana para filtros
export const diaOptions = [
  { value: "", label: "Todos los días" },
  { value: "Lunes", label: "Lunes" },
  { value: "Martes", label: "Martes" },
  { value: "Miércoles", label: "Miércoles" },
  { value: "Jueves", label: "Jueves" },
  { value: "Viernes", label: "Viernes" },
  { value: "Sábado", label: "Sábado" }
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
  { id: 'cancha-multiuso', nombre: 'Cancha Multiuso', capacidad: 2 }
];

// Horarios disponibles del gimnasio
export const horariosDisponibles = [
  'Bloque 1-2','Bloque 2-3','Bloque 3-4','Bloque 4-5',
  'Bloque 5-6','Bloque 6-7','Bloque 7-8','Bloque 8-9',
  'Bloque 9-10','Bloque 10-11','Bloque 11-12',
  'Bloque 12-13','Bloque 13-14','Bloque 14-15',
  'Bloque 15-16','Bloque 16-17','Bloque 17-18',
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
      "Lunes Bloque 15-16",
      "Miércoles Bloque 15-16", 
      "Viernes Bloque 13-14"
    ],
    ubicacion: "Campus San Joaquín - Cancha Principal",
    descripcion: "Selección universitaria Campus San Joaquín.",
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
      "Martes Bloque 15-16",
      "Jueves Bloque 16-17",
      "Sábado Bloque 5-6"
    ],
    ubicacion: "Campus San Joaquín - Gimnasio Principal",
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
      "Lunes Bloque 1-2",
      "Miércoles Bloque 1-2",
      "Viernes Bloque 1-2",
      "Sábado Bloque 3-4"
    ],
    ubicacion: "Piscina Olímpica Campus San Joaquín",
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
      "Martes Blouq 7-8",
      "Jueves Bloque 9-10"
    ],
    ubicacion: "Campus San Joaquín - Gimnasio",
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