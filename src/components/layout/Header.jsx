import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Dumbbell, Trophy, Calendar } from 'lucide-react';
import '../../styles/Header.css';


const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Logo que enlaza a Home*/}
        <Link to="/" className="logo-link">
          <div className="logo">
            <Trophy className="logo-icon" />
            <span className="logo-text">USM Defider</span>
          </div>
        </Link>

        {/* Navegación principal */}
        <nav className="main-nav" role="navigation" aria-label="Navegación principal">
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                <Home className="nav-icon" />
                <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/talleres" 
                className={`nav-link ${isActive('/talleres') ? 'active' : ''}`}
                aria-current={isActive('/talleres') ? 'page' : undefined}
              >
                <Calendar className="nav-icon" />
                <span>Talleres</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/gimnasio" 
                className={`nav-link ${isActive('/gimnasio') ? 'active' : ''}`}
                aria-current={isActive('/gimnasio') ? 'page' : undefined}
              >
                <Dumbbell className="nav-icon" />
                <span>Gimnasio</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/selecciones" 
                className={`nav-link ${isActive('/selecciones') ? 'active' : ''}`}
                aria-current={isActive('/selecciones') ? 'page' : undefined}
              >
                <Trophy className="nav-icon" />
                <span>Selecciones</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;