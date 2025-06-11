// src/components/Panels.jsx
import React, { useState } from 'react';
import { panels, projects } from '../data/mockData';

const Panels = () => {
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [search, setSearch] = useState('');

  const filteredPanels = panels
    .filter(panel =>
      (!selectedProjectId || panel.projectId === parseInt(selectedProjectId)) &&
      panel.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="overview-container">
      <h3>📊 Paneles creados</h3>

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
            placeholder="Buscar panel..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <p>Total encontrados: {filteredPanels.length}</p>
        </div>

        {filteredPanels.map((panel) => {
          const project = projects.find(p => p.id === panel.projectId);

          return (
            <div key={panel.id} className="card-base">
              <h4>{panel.name}</h4>
              <p><strong>Proyecto:</strong> {project?.name || 'Sin proyecto'}</p>
              <p>{panel.description}</p>
              <p><strong>Creado:</strong> {panel.createdAt}</p>
              <p><strong>Última modificación:</strong> {panel.updatedAt ?? 'No registra'}</p>
              <p><strong>Autor:</strong> {panel.author}</p>
              {panel.preview && (
                <img src={panel.preview} alt={`Vista previa de ${panel.name}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Panels;
