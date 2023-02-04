import Link from "next/link";

const CartTotal = ({ getTotal, setCartMenuOpen }) => {
  return (
    <>
      {getTotal() === 0 ? (
        <div className="relative mx-auto mt-6 flex h-28 w-[90%] justify-center rounded bg-mySkin px-3 pt-3 font-Poppins text-xl font-medium xl:w-[40%]">
          <h1 className="pt-3">Jūsų karutis tuščias</h1>
          <button className="absolute top-20 left-6 w-48 rounded bg-myGreen py-3 font-Cinzel text-xl font-bold text-myWhite drop-shadow-2xl">
            Parduotuvė
          </button>
        </div>
      ) : (
        <div className="fixed bottom-0 flex h-28 w-full justify-between rounded bg-mySkin px-3 pt-3 font-Poppins text-xl font-medium xl:justify-center xl:gap-3">
          <h1>Bendra suma</h1>
          <h1>{getTotal()} €</h1>
          <Link
            href="/checkout"
            className="absolute top-12 w-48 rounded bg-myGreen py-3 text-center font-Cinzel text-xl font-bold text-myWhite drop-shadow-2xl"
            onClick={() => setCartMenuOpen(false)}
          >
            Apmokėjimas
          </Link>
        </div>
      )}
    </>
  );
};

export default CartTotal;
