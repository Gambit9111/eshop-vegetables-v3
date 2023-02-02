import AmountControls from "../Store/AmountControls";

const CartItem = ({
  id,
  name,
  quantity,
  price,
  amount,
  removeItem,
  updateItem,
}) => {
  // changes the amount of item in cart
  const handleAmountChange = (operation) => {
    if (operation === "plus") {
      updateItem(id, { amount: amount + 1 });
    } else if (operation === "minus") {
      // in case we have only one item, remove it from cart
      if (amount > 1) {
        updateItem(id, { amount: amount - 1 });
      } else {
        removeItem(id);
      }
    }
  };

  return (
    <div className="flex h-32 w-full justify-between bg-white p-2 px-6 text-black">
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{quantity}</p>
      </div>
      <p>{(price * amount).toFixed(2)}€</p>
      <div>
        <p>{amount}</p>
        <button onClick={() => removeItem(id)} className="bg-blue-300 text-xs">
          remove
        </button>
        <AmountControls
          handleAmountChange={handleAmountChange}
          amount={amount}
        />
      </div>
    </div>
  );
};

export default CartItem;
