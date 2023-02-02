import Image from "next/image";
import searchIcon from "../../../public/icons/search.svg";

const Search = ({
  search,
  setSearch,
  setFilteredProducts,
  products,
  setCurrentPage,
}) => {
  const searchProducts = (e) => {
    // whenever a search is made, set the page to 1
    setSearch(e.target.value);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    setCurrentPage(1);
  };

  return (
    <label className="relative mb-3 block px-1 pt-3 xl:mx-auto xl:mt-8 xl:w-[39.5rem]">
      <span className="sr-only">Search</span>
      <span className="pl:pr-3 absolute inset-y-0 left-0 flex items-center pl-2 pt-3 xl:pl-3">
        <Image src={searchIcon} alt="searchIcon" className="xl:w-7" />
      </span>
      <input
        className="mt-[1px] h-[32px] w-full rounded bg-myWhite pl-9 pr-3 font-Poppins text-sm placeholder:font-Poppins placeholder:text-sm placeholder:text-myBlack focus:border-myBlack focus:outline-none focus:ring-1 focus:ring-myBlack xl:pl-12 xl:text-lg placeholder:xl:text-lg"
        placeholder="Ieškoti prekės, pvz.: obuoliai"
        type="text"
        value={search}
        onChange={searchProducts}
      />
    </label>
  );
};

export default Search;
