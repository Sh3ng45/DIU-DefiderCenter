import React from 'react';
import { X } from 'lucide-react';
const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className = '',
  size = 'medium'
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    small: 'modal-small',
    medium: 'modal-medium',
    large: 'modal-large'
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-content ${sizeClasses[size]} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          {title && <h2 className="modal-title">{title}</h2>}
          <button 
            className="modal-close"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <X />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 