import React from "react";

import { NavbarS } from "../styles/Navbar";
import { Container } from "../styles/Utils";

import logo from "../../img/logo.png";
import banner from "../../img/icons/banner.svg";
import executioner from "../../img/icons/executioner.svg";
import key from "../../img/icons/key.svg";
import tower from "../../img/icons/tower.svg";

const Navbar = () => {
  return (
    <NavbarS>
      <Container>
        <div>
          <img src={logo} alt="Mavisgate Logo" />
          <ul>
            <li>
              <img src={banner} alt="Icon" />
              <a href="!#">Characters</a>
            </li>
            <li>
              <img src={executioner} alt="Icon" />
              <a href="!#">Monsters</a>
            </li>
            <li>
              <img src={key} alt="Icon" />
              <a href="!#">Register</a>
            </li>
            <li>
              <img src={tower} alt="Icon" />
              <a href="!#">Login</a>
            </li>
          </ul>
        </div>
      </Container>
    </NavbarS>
  );
};

export default Navbar;
