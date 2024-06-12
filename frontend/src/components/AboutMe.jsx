import React, { forwardRef } from "react";
import MainHeader from "./MainHeader";

const AboutMe = forwardRef((props, ref) => {
  return (
    <div id="section1" className="about-me content-section" ref={ref}>
      <p>This is going to be where loads of text goes.</p>
    </div>
  );
});

export default AboutMe;
