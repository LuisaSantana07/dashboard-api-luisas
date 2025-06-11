// src/components/TopTabBar.jsx
import React from 'react';


const TopTabBar = ({ section, activeTab, setActiveTab }) => {
  const getTabs = () => {
    switch (section) {
      case 'inicio':
        return [
          { id: 'proyecto', label: '🗂 Proyecto' },
          { id: 'fuentes', label: '💧 Fuentes' },
          { id: 'paneles', label: '📊 Paneles' },
          { id: 'tableros', label: '📋 Tableros' },
        ];
      case 'proyectos':
        return [{ id: 'listado', label: '📁 Listado de Proyectos' }];
      case 'fuentes':
        return [{ id: 'fuentes', label: '💧 Fuentes Disponibles' }];
      case 'paneles':
        return [{ id: 'paneles', label: '📊 Paneles Disponibles' }];
      case 'tableros':
        return [{ id: 'tableros', label: '📋 Tableros Disponibles' }];
      case 'seguridad':
        return [{ id: 'noDisponible', label: '🔒 Gestión de Seguridad' }];
      case 'asistente':
        return [{ id: 'noDisponible', label: '🤖 Asistente' }];
      default:
        return [];
    }
  };

  const tabs = getTabs();

  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={activeTab === tab.id ? 'active' : ''}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TopTabBar;
