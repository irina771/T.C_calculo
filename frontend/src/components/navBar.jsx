import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Susanita – Tu tablero de ventas en tiempo real</h1>
      <div className="navbar-links">
        <a href="#login">Registrarse</a>
        <a href="#login">Iniciar sesión</a>
        <a href="#perfil">Perfil</a>
        <a href="#calcular" className="btn-calcular">Calcular</a>
      </div>
    </nav>
  );
}

export default NavBar;
