import { ArrowLeftIcon } from "@heroicons/react/solid";
const Button = (props) => {
  const { type, text } = props;

  return (
    <button
      type={type}
      className="text-white bg-[#394BA8] py-4 px-8 rounded-xl text-sm font-bold flex items-center hover:shadow-lg hover:scale-105 animate__delay_300"
    >
      {text}
      <span>
        <ArrowLeftIcon className="w-4 h-4 fill-white mr-2 " />
      </span>
    </button>
  );
};

export default Button;
