import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <img src={logo} alt="Mavisgate Logo" />
          </Link>
          <ul>
            <li>
              <img src={banner} alt="Icon" />
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <img src={executioner} alt="Icon" />
              <Link to="/monsters">Monsters</Link>
            </li>
            <li>
              <img src={key} alt="Icon" />
              <Link to="/register">Register</Link>
            </li>
            <li>
              <img src={tower} alt="Icon" />
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </Container>
    </NavbarS>
  );
};

export default Navbar;
