import React from 'react';

const menuItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'blog', label: 'Blog' },
];

function Menu({ activeSection, setActiveSection }) {
  return (
    <div className="menu">
      <h2>Active Section: {activeSection}</h2>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() =>
            document
              .getElementById(item.id)
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default Menu;
