import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';


const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Talleres Deportivos",
      description: "Encuentra talleres por tipo de deporte y horario. Inscríbete fácilmente y accede a toda la información necesaria.",
      linkText: "Ver talleres disponibles",
      linkHref: "/talleres"
    },
    {
      icon: MapPin,
      title: "Reservas de Gimnasio",
      description: "Consulta horarios disponibles y reserva tu bloque de uso del gimnasio.",
      linkText: "Hacer una reserva",
      linkHref: "/gimnasio"
    },
    {
      icon: Users,
      title: "Selecciones Deportivas",
      description: "Conoce los equipos deportivos universitarios, sus horarios y requisitos. Postula para formar parte.",
      linkText: "Explorar selecciones",
      linkHref: "/selecciones"
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">¿Qué puedes hacer?</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              linkHref={feature.linkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 