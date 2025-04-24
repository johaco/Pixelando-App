import React from "react";
import { Navbar } from "./components/Navbar";
import "./styles/custom.css";
import { Home } from "./pages/home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
