import { useState } from "react";

const Menu = ({ products, setFilteredProducts, setCurrentPage, setSearch }) => {
  const [activeButton, setActiveButton] = useState("vaisiai-ir-uogos"); // active button state

  const filterProducts = (category) => {
    // sets filteredProducts state to products that match the category
    setFilteredProducts(
      products.filter((product) => product.categorySlug === category)
    );
    // cleans up the search state and sets current page to 1
    setCurrentPage(1);
    setSearch("");
  };

  return (
    <div className="flex gap-3 font-Poppins text-sm xl:justify-center xl:gap-6 xl:px-6 xl:text-xl">
      <button
        onClick={() => {
          filterProducts("vaisiai-ir-uogos");
          setActiveButton("vaisiai-ir-uogos");
        }}
        className={`h-[32px] w-1/3 rounded border border-myBlack xl:w-48 ${
          activeButton === "vaisiai-ir-uogos"
            ? "bg-myGreen text-myWhite"
            : "bg-myWhite text-myBlack"
        }`}
      >
        Vaisiai
      </button>

      <button
        onClick={() => {
          filterProducts("sviezios-darzoves");
          setActiveButton("sviezios-darzoves");
        }}
        className={`h-[32px] w-1/3 rounded border border-myBlack xl:w-48 ${
          activeButton === "sviezios-darzoves"
            ? "bg-myGreen text-myWhite"
            : "bg-myWhite text-myBlack"
        }`}
      >
        Daržovės
      </button>

      <button
        onClick={() => {
          filterProducts("gerimai");
          setActiveButton("gerimai");
        }}
        className={`h-[32px] w-1/3 rounded border border-myBlack xl:w-48 ${
          activeButton === "gerimai"
            ? "bg-myGreen text-myWhite"
            : "bg-myWhite text-myBlack"
        }`}
      >
        Gėrimai
      </button>
    </div>
  );
};

export default Menu;
