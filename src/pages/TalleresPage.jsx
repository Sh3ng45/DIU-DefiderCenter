import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { SearchControls, FilterPanel, TallerCard, TallerDetail } from '../components/talleres';
import { mockTalleres, deporteOptions, diaOptions, ubicacionOptions, bloqueOptions } from '../data/mockData';
import '../styles/TalleresPage.css';



const TalleresPage = () => {
  const [talleres, setTalleres] = useState(mockTalleres);
  const [filteredTalleres, setFilteredTalleres] = useState(mockTalleres);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeporte, setSelectedDeporte] = useState('');
  const [selectedDia, setSelectedDia] = useState('');
  const [selectedBloque, setSelectedBloque] = useState('');
  const [selectedUbicacion, setSelectedUbicacion] = useState('');
  const [selectedTaller, setSelectedTaller] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // useEffect para filtrar talleres
  useEffect(() => {
    let filtered = talleres;

    // Filtro por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(taller =>
        taller.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        taller.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        taller.dia.some(dia => dia.toLowerCase().includes(searchTerm.toLowerCase())) ||
        taller.bloque.toLowerCase().includes(searchTerm.toLowerCase()) ||
        taller.ubicacion.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por deporte
    if (selectedDeporte) {
      filtered = filtered.filter(taller => taller.deporte === selectedDeporte);
    }
    // Filtro por horario
    if (selectedDia) {
      filtered = filtered.filter(taller =>
        taller.dia.some(dia => dia.toLowerCase() === selectedDia.toLowerCase())
      );
    }
    // Filtro por bloque
    if (selectedBloque) {
      filtered = filtered.filter(taller => taller.bloque === selectedBloque);
    }
    //Filtro por ubicación
    if (selectedUbicacion) {
      filtered = filtered.filter(taller => taller.ubicacion.toLowerCase() === selectedUbicacion.toLowerCase());
    }
    setFilteredTalleres(filtered);
  }, [searchTerm, selectedDeporte, talleres, selectedDia, selectedBloque, selectedUbicacion]);  

  // Función para manejar inscripcion
  const handleInscripcion = (tallerId) => {
    
    const taller = talleres.find(t => t.id === tallerId);
    if (taller && taller.ocupados < taller.cupos) {
      alert(`¡Te has inscrito exitosamente al taller "${taller.nombre}"!`);
      // Actualizar el estado local
      setTalleres(prev => prev.map(t => 
        t.id === tallerId ? { ...t, ocupados: t.ocupados + 1 } : t
      ));
    } else {
      alert('No hay cupos disponibles para este taller.');
    }
  };

  // Handlers para los componentes
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleToggleFilters = () => setShowFilters(!showFilters);
  const handleDeporteChange = (e) => setSelectedDeporte(e.target.value);
  const handleDiaChange = (e) => setSelectedDia(e.target.value);
  const handleBloqueChange = (e) => setSelectedBloque(e.target.value);
  const handleUbicacionChange = (e) => setSelectedUbicacion(e.target.value);
  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedDeporte('');
    setShowFilters(false);
  };

  return (
    <div className="talleres-page">
      <div className="container">
        {/* Header de la página */}
        <div className="page-header">
          <h1 className="page-title">Talleres Deportivos</h1>
          <p className="page-subtitle">
            Encuentra el taller deportivo perfecto para ti. Filtra por deporte, horario o busca por nombre.
          </p>
        </div>

        {/* Controles de búsqueda y filtros */}
        <SearchControls
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          showFilters={showFilters}
          onToggleFilters={handleToggleFilters}
        />

        {/* Panel de filtros */}
        <FilterPanel
          showFilters={showFilters}
          selectedDeporte={selectedDeporte}
          selectedDia={selectedDia}
          selectedBloque={selectedBloque}
          selectedUbicacion={selectedUbicacion}
          onDeporteChange={handleDeporteChange}
          onDiaChange={handleDiaChange}
          onBloqueChange={handleBloqueChange}
          onUbicacionChange={handleUbicacionChange}
          onClearFilters={handleClearFilters}
          deporteOptions={deporteOptions}
          ubicacionOptions={ubicacionOptions}
          diaOptions={diaOptions}
          bloqueOptions={bloqueOptions}
        />

        {/* Resultados */}
        <div className="results-section">
          <div className="results-header">
            <p className="results-count">
              {filteredTalleres.length} taller{filteredTalleres.length !== 1 ? 'es' : ''} encontrado{filteredTalleres.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Grid de talleres  */}
          <div className="talleres-layout">
            {/* Lista de talleres */}
            <div className="talleres-grid">
              {filteredTalleres.length > 0 ? (
                filteredTalleres.map(taller => (
                  <TallerCard
                    key={taller.id}
                    taller={taller}
                    isSelected={selectedTaller?.id === taller.id}
                    onClick={() => setSelectedTaller(taller)}
                  />
                ))
              ) : (
                <div className="no-results">
                  <Search className="no-results-icon" />
                  <h3>No se encontraron talleres</h3>
                  <p>Intenta ajustar tus filtros de búsqueda</p>
                </div>
              )}
            </div>

            {/* Panel de detalles */}
            <TallerDetail
              taller={selectedTaller}
              onInscripcion={handleInscripcion}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalleresPage;
