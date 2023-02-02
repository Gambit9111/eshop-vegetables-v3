import { useCart } from "@/zu/cart";
import { useState, useEffect } from "react";
import Image from "next/image";
import plus from "../../../public/icons/plus.svg";
import minus from "../../../public/icons/minus.svg";

const Product = ({ id, image, name, quantity, price }) => {
  const { items, addItem, removeItem } = useCart();
  const item = items.find((item) => item.id === id);
  const [amount, setAmount] = useState(item ? item.amount : 1);

  console.log(items);

  const handleAmountChange = (operation) => {
    if (operation === "plus") {
      setAmount(amount + 1);
    } else if (operation === "minus") {
      if (amount > 1) {
        setAmount(amount - 1);
      }
    }
  };

  // whenever item changes, rerender component
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
      {item ? (
        <p className="text-xl">{amount}</p>
      ) : (
        <div className="flex gap-2">
          <button onClick={() => handleAmountChange("minus")}>
            <Image src={minus} alt="minus" />
          </button>
          <p className="text-xl">{amount}</p>
          <button onClick={() => handleAmountChange("plus")}>
            <Image src={plus} alt="plus" />
          </button>
        </div>
      )}
      {item ? (
        <button className="bg-red-600" onClick={() => removeItem(id)}>
          Remove from cart
        </button>
      ) : (
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
