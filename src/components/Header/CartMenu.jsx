import Image from "next/image";
import { useState, useEffect } from "react";
import cartIcon from "../../../public/icons/cart.svg";
import closeIcon from "../../../public/icons/close.svg";

import CartItem from "./CartItem";

const CartMenu = ({
  cartMenuOpen,
  setCartMenuOpen,
  items,
  removeItem,
  updateItem,
}) => {
  // we have to create a state for cartLenght, because we can't use items.length directly in the cart icon
  const [cartLenght, setCartLenght] = useState(0);
  // whenever number of items in cart changes, rerender component
  useEffect(() => {
    setCartLenght(items.length);
  }, [items]);

  return (
    <>
      <span className="relative">
        <Image
          src={cartIcon}
          alt="menu icon"
          onClick={() => setCartMenuOpen(true)}
          className="w-8"
        />
        {cartLenght > 0 && (
          <div className=" absolute top-[-0.3rem] right-[-0.3rem] flex h-5 w-5 items-center justify-center rounded-full bg-myGreen text-sm">
            {cartLenght}
          </div>
        )}
      </span>
      {cartMenuOpen && (
        <div className="fixed top-0 left-0 z-10 h-screen w-full bg-myYellow">
          <Image
            src={closeIcon}
            alt="close icon"
            onClick={() => setCartMenuOpen(false)}
            className="w-8"
          />
          <h1 className="text-center">Cart</h1>
          <div>
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
        </div>
      )}
    </>
  );
};

export default CartMenu;