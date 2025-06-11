import React from 'react';
import './Barra.css';

function Sidebar() {
  return (
    <div className="Barra">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="menu">
        <li><i className="fas fa-lock"></i><span>Seguridad</span></li>
        <li><i className="fas fa-folder"></i><span>Proyecto</span></li>
        <li className="activo"><i className="fas fa-home"></i><span>Inicio</span></li>
        <li><i className="fas fa-wrench"></i><span>Asistente</span></li>
        <li><i className="fas fa-database"></i><span>Fuentes</span></li>
        <li><i className="fas fa-chart-pie"></i><span>Paneles</span></li>
        <li><i className="fas fa-th-large"></i><span>Tableros</span></li>
      </ul>
    </div>
  );
}

export default Sidebar;
