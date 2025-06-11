// src/components/Dashboards.jsx
import React, { useState } from 'react';
import { dashboards, projects } from '../data/mockData';

const Dashboards = () => {
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [search, setSearch] = useState('');

  const filteredDashboards = dashboards
    .filter(d =>
      (!selectedProjectId || d.projectId === parseInt(selectedProjectId)) &&
      d.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="overview-container">
      <h3>📋 Tableros creados</h3>

      <div className="overview-grid">
        <div className="card-base">
          <label htmlFor="projectFilter">🔎 Filtrar por proyecto:</label>
          <select
            id="projectFilter"
            value={selectedProjectId}
            onChange={(e) => setSelectedProjectId(e.target.value)}
          >
            <option value="">Todos los proyectos</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Buscar tablero..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <p>Total encontrados: {filteredDashboards.length}</p>
        </div>

        {filteredDashboards.map((dashboard) => {
          const project = projects.find(p => p.id === dashboard.projectId);

          return (
            <div key={dashboard.id} className="card-base">
              <h4>{dashboard.name}</h4>
              <p><strong>Proyecto:</strong> {project?.name || 'Sin proyecto'}</p>
              <p>{dashboard.description}</p>
              <p><strong>Creado:</strong> {dashboard.createdAt}</p>
              <p><strong>Última modificación:</strong> {dashboard.updatedAt ?? 'No registra'}</p>
              <p><strong>Autor:</strong> {dashboard.author}</p>
              {dashboard.preview && (
                <img src={dashboard.preview} alt={`Vista previa de ${dashboard.name}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboards;
