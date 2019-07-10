import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "../routing/PrivateRoute";

import Login from "../auth/Login";
import Register from "../auth/Register";
import Classes from "../layout/Classes";
import CreateCharater from "../account-forms/CreateCharacter";
import Monsters from "../Monsters/Monsters";
import NotFound from "../layout/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/Classes" component={Classes} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/create-character" component={CreateCharater} />
      <Route exact path="/monsters" component={Monsters} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
