import React from "react";
import Navbar from "./components/layout/Navbar";
import Showcase from "./components/layout/Showcase";
import Footer from "./components/layout/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
