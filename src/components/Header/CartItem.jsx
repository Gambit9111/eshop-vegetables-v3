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
    <div className="flex justify-between w-full h-full">
      <div className="flex flex-col items-start justify-between">
        <h1 className="text-lg leading-snug w-full xl:text-xl">{name}</h1>
        <AmountControls
          handleAmountChange={handleAmountChange}
          amount={amount}
        />
      </div>
      <div className="flex flex-col text-right">
        <h1 className="text-myBlack/80 text-sm xl:text-base">{quantity}</h1>
        <h1 className="text-lg pt-1 xl:text-xl">{(price * amount).toFixed(2)} €</h1>
        <button className="h-[32px] w-24 rounded border border-myBlack bg-myGreen text-myWhite mt-4 xl:text-lg" onClick={() => removeItem(id)}>
          Pašalinti
        </button>
      </div>

    </div>
  );
};

export default CartItem;


