import React from "react";
import { Link } from "react-router-dom";

import { ShowcaseS } from "../styles/Showcase";
import { DarkButton, LightButton } from "../styles/Utils";

const Showcase = () => {
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

export default Showcase;
