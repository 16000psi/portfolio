import React, { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <div id="section1" className="footer content-section" ref={ref}>
      <p>This website was coded by myself using NeoVim. It is hosted on a raspberry pi at a datacenter somewhere in Cambridge, UK which I rent from Mythic Beasts. I am humbly looking for a full time junior developer role - if you are looking to hire and think any of the above constitutes evidence that I know what I'm doing, you should <span className="animated-text">email me.</span></p>
    </div>
  );
});

export default Footer;
