import { useState, useEffect } from "react";
import Image from "next/image";

import back from "../../../public/icons/back.svg";
import forward from "../../../public/icons/forward.svg";

const Pagination = ({
  currentPage,
  setCurrentPage,
  filteredProducts,
  setCurrentProducts,
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [pages, setPages] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // slice filtered array of products to display current page with 9 items
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // whenever filtered products change, set pages to the amount of pages needed to display all products
  useEffect(() => {
    setPages(Math.ceil(filteredProducts.length / itemsPerPage));
    setCurrentProducts(currentProducts);
  }, [filteredProducts, itemsPerPage]);

  // since pagination are at the bottom of the page, we need to scroll to top when page is changed
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentProducts(currentProducts);
  }, [currentPage]);

  return (
    <div className="flex h-[72px] items-center justify-center gap-1 pt-3 xl:h-[60px] xl:pt-0">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image src={back} alt={back} className="mr-2 w-3 xl:w-4" />
      </button>
      <div>
        {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
          <button
            className={`h-[35px] w-[35px] font-semibold xl:text-lg ${
              currentPage === page ? "rounded bg-myGreen text-myWhite" : ""
            }`}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === pages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <Image src={forward} alt={forward} className="ml-2 w-3 xl:w-4" />
      </button>
    </div>
  );
};

export default Pagination;
