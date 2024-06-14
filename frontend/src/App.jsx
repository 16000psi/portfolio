import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Socials from "./components/Socials";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme
      : window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="app">
      <div className="left-column">
        <Menu
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Socials
          className="menu__socials"
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
      <div className="right-column">
        <Content
          setActiveSection={setActiveSection}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

export default App;
