import React, { useEffect } from "react";
import MainHeader from "./MainHeader";
import Socials from "./Socials";

const menuItems = [
  { id: "1", label: "About" },
  { id: "2", label: "Work" },
  { id: "3", label: "Projects" },
];

function Menu({ activeSection, setActiveSection }) {
  const handleMenuClick = (id) => {
    if (id === "1") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document
        .getElementById("section" + id)
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="menu">
      <MainHeader className="menu__main-header" />
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`menu-item ${
            String(activeSection) === item.id ? "active" : ""
          }`}
          onClick={() => handleMenuClick(item.id)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default Menu;
