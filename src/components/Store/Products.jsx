import { useState } from "react";

import Product from "./Product";
import Menu from "./Menu";
import Pagination from "./Pagination";
import Search from "./Search";

const Products = ({ products }) => {
  //states
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((product) => product.categorySlug === "vaisiai-ir-uogos")
  ); // default products filter, first we we filter/search then paginate
  const [currentProducts, setCurrentProducts] = useState([]); // products after filtering and pagination, we map over this and this is whats displayed on screen
  const [currentPage, setCurrentPage] = useState(1); // current page state, needs to be set to 1 when category is changed or search initiated
  const [search, setSearch] = useState(""); // search state, needs to bet set to empty string after category is changed

  return (
    <div className="min-h-[70vh] w-full px-3 xl:px-32">
      <Search
        search={search}
        setSearch={setSearch}
        setFilteredProducts={setFilteredProducts}
        products={products}
        setCurrentPage={setCurrentPage}
      />

      <Menu
        products={products}
        setFilteredProducts={setFilteredProducts}
        setCurrentPage={setCurrentPage}
        setSearch={setSearch}
      />
      <div className="space-y-3 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-6">
        {currentProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            quantity={product.quantity}
            price={product.price}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filteredProducts={filteredProducts}
        currentProducts={currentProducts}
        setCurrentProducts={setCurrentProducts}
      />
    </div>
  );
};

export default Products;
