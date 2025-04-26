import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import { Navbar } from "./components/Navbar";
import "./styles/custom.css";
import { Home } from "./pages/home";
import { Footer } from "./components/Footer";
import { CategoryPage } from "./pages/CategoryPage";
import { SearchPage } from "./pages/SearchPage";

const App = () => {
  return (

    <Router>
      <Navbar />
      <div className="main-content">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categoria/:nombre" element={<CategoryPage />} />
        <Route path="/buscar" element={<SearchPage />} />
        </Routes>
      </div>

        <Footer/>
    </Router>

  );
};

export default App;
