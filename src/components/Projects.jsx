// src/components/Projects.jsx
import React from 'react';
import { projects } from '../data/mockData';

const Projects = ({ onSelectProject }) => {
  return (
    <div className="overview-card">
      <h3>Proyectos disponibles</h3>
      <select onChange={(e) => onSelectProject(e.target.value)}>
        {projects.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
      <p>Total: {projects.length}</p>
    </div>
  );
};

export default Projects;
