import React, { useEffect } from 'react';
import contentSections from '../contentData';

function Content({ setActiveSection }) {
  const handleScroll = () => {
    const sections = document.querySelectorAll('.content-section');
    let currentSection = '';
    sections.forEach(section => {
      console.log(section.getBoundingClientRect())
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="content">
      {contentSections.map(section => (
        <div id={section.id} key={section.id} className="content-section">
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Content;
