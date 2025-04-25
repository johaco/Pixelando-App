export const SearchBar = () => {
  return (
    <form className="d-flex" role="search">
    <input
      className="form-control me-2 form-control-tech"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button className="search-tech btn btn-outline-success" type="submit">
      Search
    </button>
  </form>
  )
}
