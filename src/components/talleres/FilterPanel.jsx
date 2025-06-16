import React from 'react';

const FilterPanel = ({ 
  showFilters, 
  selectedDeporte, 
  selectedDia,
  selectedBloque,
  selectedUbicacion,
  onDeporteChange,
  onDiaChange,
  onBloqueChange,
  onUbicacionChange, 
  onClearFilters,
  deporteOptions,
  diaOptions,
  bloqueOptions,
  ubicacionOptions
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
      <div className="filter-group">
        <label htmlFor="dia-select" className="filter-label">
          Día:
        </label>
        <select
          id="dia-select"
          value={selectedDia}
          onChange={onDiaChange}
          className="filter-select"
        >
          {diaOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="bloque-select" className="filter-label">
          Bloque Horario:
        </label>
        <select
          id="bloque-select"
          value={selectedBloque}
          onChange={onBloqueChange}
          className="filter-select"
        >
          {bloqueOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="ubicacion-select" className="filter-label">
          Ubicación:
        </label>
        <select
          id="ubicacion-select"
          value={selectedUbicacion}
          onChange={onUbicacionChange}
          className="filter-select"
        >
          {ubicacionOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

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