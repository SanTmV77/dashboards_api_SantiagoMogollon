import React from 'react';
import './tarjeta.css';

function ProyectoDetalle({ proyecto }) {
  if (!proyecto) return null;

  return (
    <div className="tarjeta">
      <h2><i className="fas fa-folder"></i> Título del proyecto: {proyecto.titulo}</h2>
      <ul>
        <li>Descripción del proyecto: {proyecto.descripcion || 'No registra'}</li>
        <li>Fuentes de datos: {proyecto.fuentes}</li>
        <li>Fecha de creación: {proyecto.creacion}</li>
        <li>Fecha de última modificación: {proyecto.modificacion || 'No registra'}</li>
        <li>Autor: {proyecto.autor}</li>
        <li>Grupo del proyecto: {proyecto.grupo}</li>
      </ul>
    </div>
  );
}

export default ProyectoDetalle;
