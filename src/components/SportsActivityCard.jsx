import React, { useState } from 'react';
import '../styles/SportsActivityCard.css'; // Archivo CSS para estilos

export const SportsActivityCard = ({ activity }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="sports-activity-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={activity.imageUrl} alt={activity.name} className="activity-image" />

      {isHovered && (
        <div className="activity-info-overlay">
          <h4>{activity.name}</h4>
          <p><strong>Profesor:</strong> {activity.professor}</p>
          <p><strong>Recinto:</strong> {activity.venue}</p>
          <p><strong>Horarios:</strong> {activity.schedule}</p>
          {activity.campus && <p className="campus-info">Campus: {activity.campus}</p>}
        </div>
      )}

      {!isHovered && (
        <div className="activity-teaser">
          <h4>{activity.name}</h4>
          <p className="campus-info">Campus: {activity.campus}</p>
        </div>
      )}
    </div>
  );
};

// export default SportsActivityCard;