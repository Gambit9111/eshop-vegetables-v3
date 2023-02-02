import useCart from "@/zu/cart";
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
    <div className="flex h-32 w-full items-center justify-between gap-3 border-2 border-black bg-white">
      <div className="flex flex-col">
        <h1>{name}</h1>
        <h1>{quantity}</h1>
        <h1>{(price * amount).toFixed(2)}€</h1>
      </div>
      {/* if this item is already in the cart we display the amount  */}
      {item ? (
        <p className="text-xl">{amount}</p>
      ) : (
        // if not we display the amount controls
        <AmountControls
          handleAmountChange={handleAmountChange}
          amount={amount}
        />
      )}
      {/* if this item is already in the cart we display the remove button  */}
      {item ? (
        <button className="bg-red-600" onClick={() => removeItem(id)}>
          Remove from cart
        </button>
      ) : (
        // if not we display the add to cart button
        <button
          className="bg-myYellow"
          onClick={() => addItem({ id, name, quantity, price, amount })}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Product;
