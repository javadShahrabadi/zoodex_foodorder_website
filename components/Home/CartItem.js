import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/solid";
const CartItem = (props) => {
  return (
    <div className="cartItem animate__delay_300 ">
      <div className="w-[56px] h-[56px]">
        <Image src={props.thumbnail} width={56} height={56} alt={props.title} />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <h3 className="font-semibold text-sm text-gray-600 mt-4">
          {props.title}
        </h3>
        <p>
          <ChevronLeftIcon className="w-6 h-6 fill-white bg-[#FBC10D] p-1 flex items-center rounded-full" />
        </p>
      </div>
    </div>
  );
};

export default CartItem;
