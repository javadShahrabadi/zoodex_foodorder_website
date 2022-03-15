import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";
const SuggesstionCart = (props) => {
  return (
    <div className="rounded-xl shadow-lg bg-white overflow-hidden cursor-pointer animate__delay_300 hover:shadow-xl">
      <div className="relative">
        <div className="bg__white_backdrop" />
        {props.off && (
          <span className="absolute z-20 right-4 top-4 text-white bg-red-500 p-1 rounded-full">
            %{props.off}
          </span>
        )}
        <div className="absolute z-20 bg-white px-2 py-0.5 bottom-6 right-4 flex items-center rounded-xl">
          <Image
            src="/icons/order.png"
            width={25}
            height={25}
            alt="order-status"
          />
          <p className="text-gray-600 text-[12px] pr-1">پیش سفارش</p>
        </div>
        <Image
          width={354}
          height={190}
          alt={props.title}
          src={props.image}
          layout="responsive"
        />
      </div>
      <div className="px-4 pt-3 pb-4">
        <h3 className="text-sm font-semibold text-gray-600">{props.title}</h3>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm  text-gray-500">
            وضعیت:
            <spanc className="pr-1">
              {props.status === "close" ? "بسته / ثبت پیش سفارش" : "باز"}
            </spanc>
          </p>
          <p className="flex items-center">
            <span className="text-sm text-gray-500 pl-0.5 mt-0.5">
              {props.score ? props.score : "0"}
            </span>
            <StarIcon className="w-5 h-5 text-[#FBC10D]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuggesstionCart;
