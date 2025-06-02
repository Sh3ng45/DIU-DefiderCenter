import React from 'react';
import { Search } from 'lucide-react';

const SearchBox = ({ 
  value, 
  onChange, 
  placeholder = "Buscar...", 
  className = '',
  ariaLabel = "Buscar"
}) => {
  return (
    <div className={`search-box ${className}`}>
      <Search className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="search-input"
        aria-label={ariaLabel}
      />
    </div>
  );
};

export default SearchBox; 