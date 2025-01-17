import './SearchBar.css'
function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="checkbox-container">
        <input type="checkbox" id="in-stock" />
        <label htmlFor="in-stock">Show only products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
