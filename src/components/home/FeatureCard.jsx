import React from 'react';

///FeatureCard Component - Tarjeta de característica reutilizable

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  linkText, 
  linkHref 
}) => {
  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper">
        <Icon className="feature-icon" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">
        {description}
      </p>
      <a href={linkHref} className="feature-link">
        {linkText} →
      </a>
    </div>
  );
};

export default FeatureCard; 