import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const categories = [
    "Parlantes",
    "Auriculares",
    "Smartwatchs",
    "Cables",
    "Accesorios",
  ];

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarCollapse);
    if (bsCollapse) {
      bsCollapse.hide(); // Oculta el collapse si ya está inicializado
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-tech fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
          <img
            className="d-inline-block img-fluid logo-tech"
            src="/assets/logo.webp"
            alt="Logo"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to="/"
                onClick={closeNavbar}
              >
                Inicio
              </NavLink>
            </li>
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <NavLink
                  className="nav-link"
                  to={`/categoria/${cat.toLowerCase()}`}
                  onClick={closeNavbar}
                >
                  {cat}
                </NavLink>
              </li>
            ))}
          </ul>
          <SearchBar onSearch={closeNavbar} />
        </div>
      </div>
    </nav>
  );
};
