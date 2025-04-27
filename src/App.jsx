import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import { Navbar } from "./components/Navbar";
import "./styles/custom.css";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { CategoryPage } from "./pages/CategoryPage";
import { SearchPage } from "./pages/SearchPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";


const App = () => {
  return (

    <Router>
      <Navbar />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/categoria/:nombre" element={<CategoryPage />} />
        <Route path="/buscar" element={<SearchPage />} />
        <Route path="/producto/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
        <Footer/>
    </Router>

  );
};

export default App;
