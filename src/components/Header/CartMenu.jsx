import Image from "next/image";
import { useState, useEffect } from "react";
import cartIcon from "../../../public/icons/cart.svg";
import closeIcon from "../../../public/icons/close.svg";

import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const CartMenu = ({
  cartMenuOpen,
  setCartMenuOpen,
  items,
  removeItem,
  updateItem,
  getTotal,
}) => {
  // we have to create a state for cartLenght, because we can't use items.length directly in the cart icon
  const [cartLenght, setCartLenght] = useState(0);

  // whenever number of items in cart changes, rerender component
  useEffect(() => {
    setCartLenght(items.length);
  }, [items]);

  return (
    <>
      {/* cart icon displaying how many items we have in the cart, opens the cart panel on click */}
      <span onClick={() => setCartMenuOpen(true)} className="relative mr-3">
        <Image src={cartIcon} alt="menu icon" className="xl:w-7" />
        {/* only displays cart bubble if we have any items */}
        {cartLenght > 0 && (
          <div className=" absolute top-[-0.7rem] right-[-0.8rem] flex h-5 w-7 items-center justify-center rounded-full bg-myGreen font-Poppins text-sm font-medium text-myWhite xl:top-[-0.5rem]">
            {cartLenght}
          </div>
        )}
      </span>

      {/* cart menu */}
      {cartMenuOpen && (
        <div className="fixed top-0 left-0 z-10 h-screen w-full overflow-y-scroll bg-myWhite text-myBlack scrollbar-none">
          <div className="flex h-20 w-full items-center justify-center xl:mb-6 xl:h-24">
            <Image
              src={closeIcon}
              alt="close icon"
              onClick={() => setCartMenuOpen(false)}
              className="absolute top-7 right-6 xl:top-10 xl:right-[9rem]"
            />
            <h1 className="font-Cinzel text-3xl font-bold xl:text-4xl">
              Karutis
            </h1>
          </div>
          <div className="mb-12 flex flex-col gap-6 px-3 font-Poppins xl:mx-32 xl:gap-9 xl:px-96">
            {/* map over items */}
            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                amount={item.amount}
                removeItem={removeItem}
                updateItem={updateItem}
              />
            ))}
          </div>
          <CartTotal getTotal={getTotal} />
        </div>
      )}
    </>
  );
};

export default CartMenu;
