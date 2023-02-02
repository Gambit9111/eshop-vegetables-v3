import Image from "next/image";

import menuIcon from "../../../public/icons/menu.svg";
import closeIcon from "../../../public/icons/close.svg";

const BurgerMenu = ({ burgerMenuOpen, setBurgerMenuOpen }) => {
  return (
    <>
      {/* burger menu icon on click opens the side navigation menu */}
      <Image
        src={menuIcon}
        alt="menu icon"
        onClick={() => setBurgerMenuOpen(true)}
        className="w-8"
      />
      {/* side navigation menu */}
      {burgerMenuOpen && (
        <div className="fixed top-0 left-0 z-10 h-screen w-full bg-myYellow">
          <Image
            src={closeIcon}
            alt="close icon"
            onClick={() => setBurgerMenuOpen(false)}
            className="w-8"
          />
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
