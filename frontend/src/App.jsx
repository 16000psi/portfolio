import React, { useState } from 'react';
import Menu from './components/Menu';
import Content from './components/Content';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="app">
      <div className="left-column">
        <div className="title">My App</div>
        <Menu activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <div className="right-column">
        <Content setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}

export default App;
