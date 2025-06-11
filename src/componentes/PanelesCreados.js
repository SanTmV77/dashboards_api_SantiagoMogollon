import React from 'react';
import './tarjeta.css';

function PanelesCreados() {
  return (
    <div className="tarjeta">
      <h2><i className="fas fa-chart-pie"></i> Paneles creados</h2>
      <p>Nombre del panel: ESTADO AL CORTE DE LOS PROYECTOS EN SEGUIMIENTO</p>
      <p>Descripción: No registra</p>
      <p>Creación: lunes, 25 de septiembre de 2023, 5:54 a. m.</p>
      <p>Última modificación: lunes, 25 de septiembre de 2023, 5:54 a. m.</p>
      <p>Autor: admin_creangel</p>
      <img
        src="https://quickchart.io/chart?c={type:'pie',data:{labels:['A','B','C'],datasets:[{data:[10,20,30]}]}}"
        alt="Vista previa del panel"
        style={{ width: '25%' }}
      />
    </div>
  );
}

export default PanelesCreados;
