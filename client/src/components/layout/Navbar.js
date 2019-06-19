import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import { NavbarS } from "../styles/Navbar";
import { Container } from "../styles/Utils";

import logo from "../../img/logo.png";
import banner from "../../img/icons/banner.svg";
import executioner from "../../img/icons/executioner.svg";
import key from "../../img/icons/key.svg";
import tower from "../../img/icons/tower.svg";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <img src={banner} alt="Icon" />
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <img src={banner} alt="Icon" />
        <Link to="/mycharacters">My Characters</Link>
      </li>
      <li>
        <img src={executioner} alt="Icon" />
        <Link to="/monsters"> Monsters</Link>
      </li>
      <li>
        <img src={tower} alt="Icon" />
        <Link to="/login" onClick={logout}>
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
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
  );

  const renderNavbarLinks = () => {
    if (!loading) {
      if (isAuthenticated) {
        return authLinks;
      } else {
        return guestLinks;
      }
    }
  };

  return (
    <NavbarS>
      <Container>
        <div>
          <Link to="/">
            <img src={logo} alt="Mavisgate Logo" />
          </Link>
          {renderNavbarLinks()}
        </div>
      </Container>
    </NavbarS>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
