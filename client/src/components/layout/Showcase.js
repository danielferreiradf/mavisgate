import React from "react";

import { ShowcaseS } from "../styles/Showcase";
import { Container, DarkButton, LightButton } from "../styles/Utils";

const Showcase = () => {
  return (
    <ShowcaseS>
      <div>
        <h1>Welcome to Mavisgate</h1>
        <h4>
          Create your character, defeat the monsters <br />
          and save the Mavis' World
        </h4>
        <DarkButton className="m-1">Sign Up</DarkButton>
        <LightButton className="m-1">Login</LightButton>
      </div>
    </ShowcaseS>
  );
};

export default Showcase;
