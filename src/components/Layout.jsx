// src/components/Layout.jsx
import React from 'react';
import UserTopBar from './UserTopBar';

const Layout = ({ children, onSelectSection }) => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <button className="sidebar-link" onClick={() => onSelectSection('inicio')}>🏠 Inicio</button>
          <button className="sidebar-link" onClick={() => onSelectSection('seguridad')}>🔒 Seguridad</button>
          <button className="sidebar-link" onClick={() => onSelectSection('proyectos')}>📁 Proyectos</button>
          <button className="sidebar-link" onClick={() => onSelectSection('asistente')}>🤖 Asistente</button>
          <button className="sidebar-link" onClick={() => onSelectSection('fuentes')}>💧 Fuentes</button>
          <button className="sidebar-link" onClick={() => onSelectSection('paneles')}>📊 Paneles</button>
          <button className="sidebar-link" onClick={() => onSelectSection('tableros')}>📋 Tableros</button>
        </nav>
      </aside>

      {/* Contenedor de barra superior + contenido */}
      <div className="content-area">
        <UserTopBar username="admin_UserLuisa" />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
