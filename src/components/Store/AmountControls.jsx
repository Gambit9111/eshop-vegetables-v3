import Image from "next/image";
import plus from "../../../public/icons/plus.svg";
import minus from "../../../public/icons/minus.svg";

const AmountControls = ({ handleAmountChange, amount }) => {
  return (
    <div className="flex gap-2">
      <button onClick={() => handleAmountChange("minus")}>
        <Image src={minus} alt="minus" />
      </button>
      <p className="text-xl">{amount}</p>
      <button onClick={() => handleAmountChange("plus")}>
        <Image src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default AmountControls;
