import React, { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <div id="section1" className="footer content-section" ref={ref}>
      <p>
        This website was coded by myself using{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://neovim.io/"
          className="inline-link"
        >
          NeoVim
        </a>
        . It is hosted on a Raspberry Pi at a datacenter somewhere in Cambridge,
        UK, which I rent from{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mythic-beasts.com"
          className="inline-link"
        >
          Mythic Beasts
        </a>
        . If you need to contact me, the best way to do so is to{" "}
        <a
          href="mailto:davidjhnsmith@gmail.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-text"
        >
          email me.
        </a>
      </p>
    </div>
  );
});

export default Footer;
