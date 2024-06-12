import React, { useEffect, useRef } from "react";
import contentSections from "../contentData";
import MainHeader from "./MainHeader";
import AboutMe from "./AboutMe";

function Content({ setActiveSection }) {
  const sectionRefs = useRef([]);
  let previousSection = useRef("");
  let newSection = useRef("");

  const handleScroll = () => {
    const fivePercentViewPortHeight = window.innerHeight * 0.05;

    if (sectionRefs.current) {
      let sectionRelativeY = sectionRefs.current.map((section) =>
        section
          ? section.getBoundingClientRect().top - fivePercentViewPortHeight
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
      <AboutMe ref={(el) => (sectionRefs.current[0] = el)} />
      {contentSections.map((section, index) => (
        <div
          id={section.id}
          key={section.id}
          className="content-section"
          ref={(el) => (sectionRefs.current[index + 1] = el)} // Adjust index for other sections
        >
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Content;
