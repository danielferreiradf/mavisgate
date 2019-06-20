import React from "react";
import { Link } from "react-router-dom";

import { DashboardActionsS } from "../styles/DashboardActions";
import { Container } from "../styles/Utils";

const DashboardActions = () => {
  return (
    <DashboardActionsS>
      <Container>
        {/* <Link to="/edit-account">Edit Account</Link> */}
        <h2>Menu</h2>
        <div>
          <Link to="/create-character ">Create Character</Link>
        </div>
      </Container>
    </DashboardActionsS>
  );
};

export default DashboardActions;
