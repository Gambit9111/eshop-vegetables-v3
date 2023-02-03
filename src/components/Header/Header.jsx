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
    <header className="fixed top-0 z-20 flex h-20 w-full items-center justify-between bg-myWhite px-3 text-myBlack xl:h-24 xl:px-32">
      <div className="flex gap-3 xl:hidden">
        <BurgerMenu
          burgerMenuOpen={burgerMenuOpen}
          setBurgerMenuOpen={setBurgerMenuOpen}
        />
        <h1 className="font-Cinzel text-3xl font-bold">Logo</h1>
      </div>
      <div className="hidden gap-12 xl:flex">
        <h1 className="font-Cinzel text-4xl font-bold">Logo</h1>
        <nav className="flex items-center gap-6 pt-3 font-Poppins text-lg">
          <h2>Pagrindinis</h2>
          <h2>Parduotuvė</h2>
          <h2>Kontaktai</h2>
          <h2>Užsakymai</h2>
          <h2>Pagalba</h2>
        </nav>
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
