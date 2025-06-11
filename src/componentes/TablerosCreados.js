import React from 'react';
import './tarjeta.css';

function TablerosCreados() {
  return (
    <div className="tarjeta">
      <h2><i className="fas fa-th-large"></i> Tableros creados</h2>
      <p>Nombre del tablero: INDICADORES EN MATERIA DE AGUA POTABLE Y SANEAMIENTO BÁSICO V1</p>
      <p>Descripción: No registra</p>
      <p>Creación: martes, 26 de septiembre de 2023, 3:57 a. m.</p>
      <p>Última modificación: martes, 26 de septiembre de 2023, 3:57 a. m.</p>
      <p>Autor: admin_creangel</p>
      <img
        src="https://quickchart.io/chart?c={type:'bar',data:{labels:['X','Y','Z'],datasets:[{label:'Tablero',data:[5,15,25]}]}}"
        alt="Vista previa del tablero"
        style={{ width: '25%' }}
      />
    </div>
  );
}

export default TablerosCreados;
