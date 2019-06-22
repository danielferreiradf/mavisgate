import React from "react";

import { FooterS } from "../styles/Footer";
import { Container } from "../styles/Utils";

import github from "../../img/icons/github.svg";
import linkedin from "../../img/icons/linkedin.svg";
import twitter from "../../img/icons/twitter.svg";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <FooterS>
      <Container>
        <h1>Mavisgate - {date}</h1>
        <p>Developed by Daniel Ferreira</p>

        <div>
          <a
            href="https://github.com/danielferreiradf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/danielferreiradf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://twitter.com/danferreiradfs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </Container>
    </FooterS>
  );
};

export default Footer;
