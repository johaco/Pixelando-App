import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/buscar?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");

      requestAnimationFrame(() => {
        onSearch?.(); // Esto ejecuta closeNavbar después de actualizar el DOM
      });
    }
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2 form-control-tech"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-tech btn btn-outline-success" type="submit">
        Buscar
      </button>
    </form>
  );
};
