import './SearchBar.css'
import { useState } from 'react';
function SearchBar({searchProduct}) {
    const [iniValue, setValue] = useState("")
    const updateValue = (event)=> {
        const newValue = event.target.value
        setValue(newValue)
        searchProduct(newValue)

    }

    console.log("Values:",iniValue)
  return (
    <div className="search-container">
      <input  value={iniValue} type="text" className="search-bar" placeholder="Search..." onChange={updateValue} />
      <div className="checkbox-container">
        <input type="checkbox" id="in-stock" />
        <label htmlFor="in-stock">Show only products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
