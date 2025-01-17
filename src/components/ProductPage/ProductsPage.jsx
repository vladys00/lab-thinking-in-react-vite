import { useState } from "react";
import jsonData from "../../data.json";
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [originalProducts] = useState(jsonData);
  
  function searchProduct(value) {
    const searchTerm = value.toLowerCase();
    const filteredProducts =  originalProducts.filter(item => 
      item.name.toLowerCase().startsWith(searchTerm)
    );
    setProducts(filteredProducts)
  }
  
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchProduct={searchProduct} />
      <ProductTable products={products}/>
    </div>
  );
}

export default ProductsPage;