import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Showcase from "./components/layout/Showcase";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/Dashboard/Dashboard";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Characters from "./components/layout/Characters";

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
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
