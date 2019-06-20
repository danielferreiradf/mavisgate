import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Showcase from "./components/layout/Showcase";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Classes from "./components/layout/Classes";
import CreateCharater from "./components/account-forms/CreateCharacter";
import Monsters from "./components/Monsters/Monsters";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Showcase} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Classes" component={Classes} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/create-character"
            component={CreateCharater}
          />
          <Route exact path="/monsters" component={Monsters} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
