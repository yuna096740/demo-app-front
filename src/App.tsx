import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./settings/route.tsx";

import Navbar from "./components/navBar/navBar.tsx";
import Footer from "./components/footer/footer.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
