import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './componentes/Barra';
import ProyectoDetalle from './componentes/ProyectoDetalle';
import FuentesDatos from './componentes/FuentesDatos';
import PanelesCreados from './componentes/PanelesCreados';
import TablerosCreados from './componentes/TablerosCreados';

function OverviewPage() {
  const [busqueda, setBusqueda] = useState('');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const proyectos = [
    {
      id: 1,
      titulo: 'AGUA POTABLE Y SANEAMIENTO BÁSICO',
      descripcion: 'No registra',
      fuentes: 'e2628c4-7295...',
      creacion: 'viernes, 22 de septiembre de 2023, 5:03 a. m.',
      modificacion: '',
      autor: 'adminAguaMinvivienda',
      grupo: 'AguaMinvivienda'
    },
    {
      id: 2,
      titulo: 'INFRAESTRUCTURA EDUCATIVA RURAL',
      descripcion: 'Mejorar condiciones escolares',
      fuentes: 'd1414c2-98fe...',
      creacion: 'lunes, 10 de julio de 2023, 10:45 a. m.',
      modificacion: 'martes, 12 de marzo de 2024, 9:00 a. m.',
      autor: 'adminEducacion',
      grupo: 'EducacionRural'
    }
    // Puedes añadir más proyectos aquí
  ];

  const proyectosFiltrados = proyectos.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="main-content">
      <div className="perfil-icono">
        <i className="fa-solid fa-user-circle"></i>
      </div>

      <div className="top-bar">
        <div className="buscador-proyectos">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="contador-proyectos">
          Total de proyectos: {proyectosFiltrados.length}
        </div>
      </div>

      <h1>Proyectos</h1>

      <div className="grid-principal">
        <div className="grid-secundaria">
          {proyectosFiltrados.map((p) => (
            <div
              key={p.id}
              className="tarjeta"
              onClick={() => setProyectoSeleccionado(p)}
              style={{ cursor: 'pointer' }}
            >
              <h2><i className="fas fa-folder-open"></i> {p.titulo}</h2>
              <p>{p.descripcion}</p>
            </div>
          ))}
        </div>

        {proyectoSeleccionado && (
          <ProyectoDetalle proyecto={proyectoSeleccionado} />
        )}

        <FuentesDatos />

        {/* Agrupamos Paneles y Tableros en una sola línea */}
        <div className="contenedor-paneles-tableros">
          <PanelesCreados />
          <TablerosCreados />
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <Routes>
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="*" element={<Navigate to="/overview" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
