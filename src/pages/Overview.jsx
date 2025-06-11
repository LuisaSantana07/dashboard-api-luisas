import React, { useState } from 'react';
import Projects from '../components/Projects';
import DataSources from '../components/DataSources';
import Panels from '../components/Panels';
import Dashboards from '../components/Dashboards';
import { projects } from '../data/mockData';
import Layout from '../components/Layout';
import TopTabBar from '../components/TopTabBar';

const Overview = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [activeSection, setActiveSection] = useState('inicio');
  const [activeTab, setActiveTab] = useState('proyecto');

  const selectedProject = projects.find(p => p.id === parseInt(selectedProjectId));

  return (
    <Layout onSelectSection={setActiveSection}>
      <TopTabBar section={activeSection} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Mostrar información de proyecto */}
      {activeTab === 'proyecto' && (
        <div className="overview-grid animated-fade-in">
          <Projects onSelectProject={setSelectedProjectId} />
          <div className="project-info card-base active">
            <h3>Título del proyecto: {selectedProject.name}</h3>
            <p>Descripción: {selectedProject.description}</p>
            <p>Fuentes de datos: {selectedProject.dataSources.join(', ')}</p>
            <p>Fecha de creación: {selectedProject.createdAt}</p>
            <p>Última modificación: {selectedProject.updatedAt ?? 'No registra'}</p>
            <p>Autor: {selectedProject.author}</p>
            <p>Grupo: {selectedProject.group}</p>
          </div>
        </div>
      )}

      {/* Mostrar fuentes asociadas al proyecto */}
      {activeTab === 'fuentes' && (
        <div className="overview-grid animated-fade-in">
          <DataSources projectId={selectedProjectId} />
        </div>
      )}

      {/* Mostrar paneles asociados al proyecto */}
      {activeTab === 'paneles' && (
        <div className="overview-grid animated-fade-in">
          <Panels projectId={selectedProjectId} />
        </div>
      )}

      {/* Mostrar tableros asociados al proyecto */}
      {activeTab === 'tableros' && (
        <div className="overview-grid animated-fade-in">
          <Dashboards projectId={selectedProjectId} />
        </div>
      )}

      {activeTab === 'listado' && (
        <div className="overview-grid animated-fade-in">
          <Projects onSelectProject={setSelectedProjectId} />
        </div>
      )}

      {activeTab === 'noDisponible' && (
        <div className="overview-grid animated-fade-in">
          <p>⚠️ Esta funcionalidad estará disponible próximamente.</p>
        </div>
      )}
    </Layout>
  );
};

export default Overview;
