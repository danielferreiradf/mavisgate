import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { ShowcaseS } from "../styles/Showcase";
import { DarkButton, LightButton } from "../styles/Utils";

const Showcase = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <ShowcaseS>
      <div>
        <h1>Welcome to Mavisgate</h1>
        <h4>
          Create your character, defeat the monsters <br />
          and save the Mavis' World
        </h4>
        <Link to="/register">
          <DarkButton className="m-1">Sign Up</DarkButton>
        </Link>
        <Link to="/login">
          <LightButton className="m-1">Login</LightButton>
        </Link>
      </div>
    </ShowcaseS>
  );
};

Showcase.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Showcase);
