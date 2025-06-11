import React, { useState } from 'react';

const UserTopBar = ({ username = 'admin_Luisa' }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="user-top-bar">
      <div className="user-info" onClick={toggleMenu}>
        <span className="user-icon">👤</span>
        <span className="user-name">{username}</span>
        <span className="dropdown-arrow">▼</span>
      </div>
      {open && (
        <div className="dropdown-menu" onMouseLeave={closeMenu}>
          <button>⚙️ Configuración</button>
          <button>❓ Ayuda</button>
          <button>🚪 Cerrar sesión</button>
        </div>
      )}
    </header>
  );
};

export default UserTopBar;
