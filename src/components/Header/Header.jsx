import { useState } from "react";

import BurgerMenu from "./BurgerMenu";
import CartMenu from "./CartMenu";

const Header = ({
  items,
  addItem,
  removeItem,
  clearCart,
  getTotal,
  updateItem,
}) => {
  // states for toggling burger and cart menu
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-10 flex h-20 w-full items-center justify-between bg-myWhite px-3 text-myBlack">
      <div className="flex gap-3">
        <BurgerMenu
          burgerMenuOpen={burgerMenuOpen}
          setBurgerMenuOpen={setBurgerMenuOpen}
        />
        <h1 className="font-Cinzel text-3xl font-bold">Logo</h1>
      </div>
      <CartMenu
        cartMenuOpen={cartMenuOpen}
        setCartMenuOpen={setCartMenuOpen}
        items={items}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </header>
  );
};

export default Header;
