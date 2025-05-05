import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Collapse } from "bootstrap";

export const Navbar = () => {
  const categories = ["Parlantes", "Auriculares", "Smartwatchs", "Cables", "Cámaras de Seguridad"];

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");

    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse =
        Collapse.getInstance(navbarCollapse) ||
        new Collapse(navbarCollapse, { toggle: false });

      bsCollapse.hide();
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
          aria-label="Toggle navigation"
          onClick={() => {
            const navbarCollapse = document.getElementById(
              "navbarSupportedContent"
            );
            const bsCollapse =
              Collapse.getInstance(navbarCollapse) ||
              new Collapse(navbarCollapse, { toggle: false });

            if (navbarCollapse.classList.contains("show")) {
              bsCollapse.hide(); // Si ya está abierto, cerralo
            } else {
              bsCollapse.show(); // Si está cerrado, abrilo
            }
          }}
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
