import React from 'react';
import { Filter } from 'lucide-react';
import SearchBox from '../ui/SearchBox';

const SearchControls = ({ 
  searchTerm, 
  onSearchChange, 
  showFilters, 
  onToggleFilters 
}) => {
  return (
    <div className="search-controls">
      {/* Buscador principal */}
      <SearchBox
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Buscar talleres por nombre o instructor..."
        ariaLabel="Buscar talleres"
      />

      {/* Botón para mostrar/ocultar filtros - Revelación progresiva */}
      <button
        className="filter-toggle"
        onClick={onToggleFilters}
        aria-expanded={showFilters}
        aria-controls="filters-panel"
      >
        <Filter className="filter-icon" />
        Filtros
      </button>
    </div>
  );
};

export default SearchControls; 