import useCart from "@/zu/cart";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AmountControls from "./AmountControls";

const Product = ({ id, image, name, quantity, price, i }) => {
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
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: 1 + i * 0.1, duration: 0.3, ease: "easeInOut" },
      }}
      exit={{
        opacity: 0,
        scale: 0.85,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="flex h-full w-full font-Poppins"
    >
      <Image
        src={image}
        alt={name}
        priority
        sizes="33vw"
        className="w-1/3 object-cover pr-2"
        width={160}
        height={200}
      />
      <div className="flex w-2/3 justify-between">
        <h1 className="w-full pt-1 font-Poppins text-lg leading-snug">
          {name}
        </h1>
        <div className="flex w-28 flex-col items-end text-right">
          <h1 className="w-12 text-sm text-myBlack/80">{quantity}</h1>
          <h1 className="pt-1 text-lg xl:pt-2">
            {(price * amount).toFixed(2)}€
          </h1>
          {item ? (
            <p className="mr-8 pt-1 text-lg font-medium">{amount} x</p>
          ) : (
            // if not we display the amount controls
            <AmountControls
              handleAmountChange={handleAmountChange}
              amount={amount}
            />
          )}
          {item ? (
            <button
              className="mt-4 h-[32px] w-24 rounded border border-myBlack bg-myGreen text-myWhite xl:mt-8"
              onClick={() => removeItem(id)}
            >
              Pašalinti
            </button>
          ) : (
            // if not we display the add to cart button
            <button
              className="mt-4 h-[32px] w-24 rounded border border-myBlack xl:mt-8"
              onClick={() => addItem({ id, name, quantity, price, amount })}
            >
              Į karutį
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
