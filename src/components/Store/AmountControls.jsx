// Reusing this component in Product and CartItem components
import Image from "next/image";
import plus from "../../../public/icons/plus.svg";
import minus from "../../../public/icons/minus.svg";

const AmountControls = ({ handleAmountChange, amount }) => {
  return (
    <div className="flex items-center mt-1 gap-1">
      <button onClick={() => handleAmountChange("minus")}>
        <Image src={minus} alt="minus" />
      </button>
      <p className="font-medium text-lg">{amount}</p>
      <button onClick={() => handleAmountChange("plus")}>
        <Image src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default AmountControls;
