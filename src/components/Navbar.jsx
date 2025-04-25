import { useState } from "react";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {

    const [categories, setcategories] = useState(['Parlantes', 'Auriculares', 'Smartwatchs','Cables','Accesorios']);
    const [show, setShow] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav-tech fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="d-inline-block img-fluid logo-tech" src="/src/assets/logo.webp" alt="Logo" />
          </a>
          
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
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              {
                categories.map((categories) => (
                    <li className="nav-item" key={categories}>
                        <a className="nav-link" href="#">{categories}</a>
                    </li>
                ))
              }
              
            </ul>
           <SearchBar/>
          </div>
        </div>
      </nav>
    </>
  );
};
