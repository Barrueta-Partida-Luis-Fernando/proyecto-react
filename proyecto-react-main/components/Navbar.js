import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/artists">Artistas</Link></li>
        <li><Link to="/albums">Álbumes</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 