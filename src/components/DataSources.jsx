// src/components/DataSources.jsx
import React, { useState } from 'react';
import { dataSources, projects } from '../data/mockData';

const DataSources = () => {
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [search, setSearch] = useState('');

  let filteredSources = dataSources;

  if (selectedProjectId) {
    const project = projects.find(p => p.id === parseInt(selectedProjectId));
    if (project) {
      filteredSources = dataSources.filter(ds =>
        project.dataSources.includes(ds.id)
      );
    }
  }

  const finalFiltered = filteredSources
    .filter(source =>
      source.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="overview-container">
      <h3>💧 Fuentes de datos</h3>

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
            placeholder="Buscar fuente..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <p>Total encontradas: {finalFiltered.length}</p>
        </div>

        {finalFiltered.map((source) => (
          <div key={source.id} className="card-base">
            <h4>{source.name}</h4>
            <p><strong>Tipo:</strong> {source.type}</p>
            <p><strong>Última actualización:</strong> {source.lastUpdate}</p>
            <p><strong>Total de registros:</strong> {source.totalRecords}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSources;
