import { useState } from "react";

export const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value);
    }

  return (
    <form className="d-flex" role="search">
    <input
      className="form-control me-2 form-control-tech"
      type="search"
      placeholder="Search"
      aria-label="Search"
      onChange={handleInputChange}
    />
    <button className="search-tech btn btn-outline-success" type="submit">
      Search
    </button>
  </form>
  )
}
