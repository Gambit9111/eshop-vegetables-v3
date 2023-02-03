import useCart from "@/zu/cart";
import Image from "next/image";
import { useState, useEffect } from "react";

import AmountControls from "./AmountControls";

const Product = ({ id, image, name, quantity, price }) => {
  const { items, addItem, removeItem } = useCart(); // we use cart hook here to sync the state with cart menu
  const item = items.find((item) => item.id === id);
  const [amount, setAmount] = useState(item ? item.amount : 1);

  // handle amount change, here we cant go bellow 1
  const handleAmountChange = (operation) => {
    if (operation === "plus") {
      setAmount(amount + 1);
    } else if (operation === "minus") {
      if (amount > 1) {
        setAmount(amount - 1);
      }
    }
  };

  // whenever item changes, rerender component to change the amount and recalculate the price
  useEffect(() => {
    setAmount(item ? item.amount : 1);
  }, [item]);

  return (
    <div className="flex h-full w-full font-Poppins">
      <Image
        src={image}
        alt={name}
        priority
        sizes="33vw"
        className="w-1/3 pr-2 object-cover"
        width={160}
        height={200}
      />
      <div className="flex justify-between w-2/3">
        <h1 className="font-Poppins text-lg leading-snug w-full pt-1">{name}</h1>
        <div className="text-right w-28 flex flex-col items-end">
          <h1 className="text-myBlack/80 text-sm w-12">{quantity}</h1>
          <h1 className="text-lg pt-1 xl:pt-2">{(price * amount).toFixed(2)}€</h1>
          {item ? (
            <p className="text-lg mr-8 font-medium pt-1">{amount} x</p>
          ) : (
            // if not we display the amount controls
            <AmountControls
              handleAmountChange={handleAmountChange}
              amount={amount}
            />
          )}
          {item ? (
            <button className="h-[32px] w-24 rounded border border-myBlack mt-4 xl:mt-8 bg-myGreen text-myWhite" onClick={() => removeItem(id)}>
              Pašalinti
            </button>
          ) : (
            // if not we display the add to cart button
            <button
              className="h-[32px] w-24 rounded border border-myBlack mt-4 xl:mt-8"
              onClick={() => addItem({ id, name, quantity, price, amount })}
            >
              Į karutį
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;