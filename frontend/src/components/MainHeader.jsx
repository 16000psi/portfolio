import React from 'react';

const MainHeader = ({ className }) => {
  return (
    <header className={`main-header ${className}`}>
      <h1 className="main-title">Dave Smith</h1>
      <h2 className="sub-title">Full Stack Developer</h2>
      <p className="main-paragraph">
        I create reliable, responsive websites using Python, Django, Javascript and React.
      </p>
    </header>
  );
}

export default MainHeader;
