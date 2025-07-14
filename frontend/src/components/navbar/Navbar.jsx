import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar-tallerView">
      <div className="navbar-container-tallerView">
        <Link to="/" className="navbar-logo-tallerView">
          Blog de Aprendizaje Orientado a Informatica
        </Link>
        
        <ul className="navbar-menu-tallerView">
          <li className="navbar-item-tallerView">
            <Link to="/" className="navbar-links-tallerView">
              Cursos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};