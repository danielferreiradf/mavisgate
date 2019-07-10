import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Routes from "./components/routing/Routes";
import Navbar from "./components/layout/Navbar";
import Showcase from "./components/layout/Showcase";
import Footer from "./components/layout/Footer";

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
        <Switch>
          <Route exact path="/" component={Showcase} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
