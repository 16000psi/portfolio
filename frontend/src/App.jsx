import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Socials from "./components/Socials";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="app">
      <div className="left-column">
        <Menu
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Socials className="menu__socials" />
      </div>
      <div className="right-column">
        <Content setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}

export default App;
