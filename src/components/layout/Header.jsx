import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Dumbbell, Trophy, Calendar, User, LogOut } from 'lucide-react';
import '../../styles/Header.css';


const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="app-header">
      <div className="header-container">
          <Link to="/" className="logo-link" aria-label="Página de inicio de USM Defider">
            <img 
              src="https://defider.usm.cl/wp-content/uploads/2021/11/defider.svg" 
              alt="Logo USM Defider" 
              className="logo-image" 
              style={{ height: '50px' }}
            />
          </Link>


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

        <div className="user-session-controls">
          <div className="user-info">
            <User className="user-icon" />
            <span>Tomás</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;