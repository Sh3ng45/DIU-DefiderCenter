import React from 'react';

const FilterPanel = ({ 
  showFilters, 
  selectedDeporte, 
  onDeporteChange, 
  onClearFilters,
  deporteOptions 
}) => {
  if (!showFilters) return null;

  return (
    <div id="filters-panel" className="filters-panel">
      <div className="filter-group">
        <label htmlFor="deporte-select" className="filter-label">
          Tipo de Deporte:
        </label>
        <select
          id="deporte-select"
          value={selectedDeporte}
          onChange={onDeporteChange}
          className="filter-select"
        >
          {deporteOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Botón para limpiar filtros - Control y libertad del usuario */}
      <button
        className="clear-filters"
        onClick={onClearFilters}
      >
        Limpiar filtros
      </button>
    </div>
  );
};

export default FilterPanel; 