import React, { forwardRef } from "react";
import MainHeader from "./MainHeader";

const AboutMe = forwardRef((props, ref) => {
  return (
    <div id="section1" className="about-me content-section" ref={ref}>
      <p>This is going to be where loads of text goes. I make websites you see, and this is where I will talk about it. The tone needs to be endearing and professional, of course, because otherwise it will harm my livelihood.  I'll need to think carefully about what I put here, lest I rush the job and end up with a suboptimal about me description.</p>
      <p>First it would be wise to summarise in a sentance or two that I am a developer living in london with industry experience.  I could talk about how I started coding in biological sciences and then gradually learned more before deciding to retrain at the beginning of 2023.  I could talk about my experiences briefly.  I should also have a sentence about why I enjoy web developent and what I get out of it.</p>
      <p>I should then end with a short sentence talking about what I like to do in my free time, keeping it light and playful.</p>
    </div>
  );
});

export default AboutMe;
