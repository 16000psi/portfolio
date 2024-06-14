import React, { useEffect, useRef } from "react";
import MainHeader from "./MainHeader";
import AboutMe from "./AboutMe";
import WorkExperienceList from "./WorkExperienceList";
import ProjectList from "./ProjectList";
import Footer from "./Footer";
import Socials from "./Socials";

function Content({ setActiveSection, theme, toggleTheme }) {
  const sectionRefs = useRef([]);
  let previousSection = useRef("");
  let newSection = useRef("");

  const handleScroll = () => {
    const thirtyPercentViewPortHeight = window.innerHeight * 0.3;

    if (sectionRefs.current) {
      let sectionRelativeY = sectionRefs.current.map((section) =>
        section
          ? section.getBoundingClientRect().top - thirtyPercentViewPortHeight
          : null,
      );

      if (sectionRelativeY[0] !== null && sectionRelativeY[0] > 0) {
        // If window top is above any section
        return sectionUpdateHandler(1);
      }

      for (let i in sectionRelativeY) {
        // iterate through secton ys and find first positive -
        // we are in the section before that
        if (sectionRelativeY[i] !== null && sectionRelativeY[i] > 0) {
          return sectionUpdateHandler(parseInt(i));
        }
      }
      return sectionUpdateHandler(sectionRelativeY.length);
      // if all sections are negative we are past the last section
    }
  };

  const sectionUpdateHandler = (section) => {
    newSection.current = section;

    if (newSection.current != previousSection.current) {
      setActiveSection(section);
    }
    previousSection.current = section;
  };

  useEffect(() => {
    handleScroll(); // initialise section counter
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="content">
      <MainHeader className="content__main-header" />
      <Socials
        className="content__socials"
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <AboutMe ref={(el) => (sectionRefs.current[0] = el)} />
      <WorkExperienceList ref={(el) => (sectionRefs.current[1] = el)} />
      <ProjectList ref={(el) => (sectionRefs.current[2] = el)} />
      <Footer />
    </div>
  );
}

export default Content;
