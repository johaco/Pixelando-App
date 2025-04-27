import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="pt-5 pb-3 bg-dark footer-tech flex-column">
      <div className="container d-flex flex-column align-items-center">
        <div className="mb-2">
          <NavLink className="center" to="/">
            <img
              className="d-inline-block img-fluid logo-tech"
              src="/assets/logo.webp"
              alt="Logo"
            />
          </NavLink>
        </div>
        <div>
        <p className="text-center text-secondary mb-0">
          © 2025 Pixelando. Todos los derechos reservados.
        </p>
        <p className="text-center text-secondary mb-0">
          Desarrollado por Johaco
        </p>
        </div>
      </div>

    </footer>
  );
};
