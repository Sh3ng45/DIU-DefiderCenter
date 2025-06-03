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
      <SearchBox
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Buscar talleres por nombre, instructor, dia, bloque o campus..."
        ariaLabel="Buscar talleres"
      />

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