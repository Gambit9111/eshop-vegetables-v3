import Image from "next/image";

import facebook from "../../public/icons/facebook.svg";
import twitch from "../../public/icons/twitch.svg";
import instagram from "../../public/icons/instagram.svg";
import pinterest from "../../public/icons/pinterest.svg";

const Footer = () => {
  return (
    <footer className="h-full bg-myGreen text-myWhite">
      <div className="px-3 pt-3 pb-3">
        <h1 className="font-Cinzel text-3xl font-bold text-myYellow">Logo</h1>
        <h2 className="font-Cinzel font-bold">Kokybė ir greitis™</h2>
      </div>

      <div className="px-3">
        <p className="pr-20 pb-1 font-Poppins text-xs text-myWhite/80">
          Iveskite savo el. paštą, kad gauti naujausius pasiūlymus
        </p>
        <div className="flex w-full items-center justify-center">
          <input
            className="h-9 w-full rounded-tl rounded-bl border border-myWhite/50 bg-myGreen"
            type="email"
          />
          <button className="rounded-tr rounded-br bg-myWhite py-2 px-6 font-Poppins text-sm font-semibold text-myBlack">
            Prisijungti
          </button>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-6 py-6">
        <Image src={facebook} alt={facebook} className="w-7" />
        <Image src={twitch} alt={twitch} className="w-7" />
        <Image src={instagram} alt={instagram} className="w-7" />
        <Image src={pinterest} alt={pinterest} className="w-7" />
      </div>

      <div className="flex justify-between px-3 font-Poppins text-sm text-myWhite/50">
        <div className="space-y-1">
          <h3 className="pb-1 uppercase text-myWhite">Informacija</h3>
          <h4>Dovanos</h4>
          <h4>Tapk partneriu</h4>
          <h4>Mūsų blogas</h4>
          <h4>Nuolaidos ir pasiūlymai</h4>
          <h4>2022 metų katalogas</h4>
        </div>
        <div className="space-y-1">
          <h3 className="pb-1 uppercase text-myWhite">Pagalba</h3>
          <h4>DUK</h4>
          <h4>Siuntimas</h4>
          <h4>Prekių gražinimas</h4>
          <h4>Susisiek su mumis</h4>
          <h4>Prenumeratos</h4>
        </div>
      </div>
      <div className="my-3 h-[1px] w-full bg-myWhite/50" />
      <h5 className="px-6 pb-3 font-Cinzel text-xs font-bold uppercase tracking-wider text-myYellow/30">
        2023Ⓡ Gucci Gang{" "}
      </h5>
    </footer>
  );
};

export default Footer;
