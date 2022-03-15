import { ChevronDownIcon } from "@heroicons/react/solid";
// -------------------------------
const SelectBox = (props) => {
  return (
    <div className="border-2 py-3 px-2 w-[200px] md:w-[300px] border-gray-300 ml-2 rounded-xl bg-white flex items-center justify-between cursor-pointer">
      <p className="font-semibold text-[#8D8D8D]">{props.selected}</p>
      <p>
        <ChevronDownIcon className="w-5 h-5 fill-[#8D8D8D]" />
      </p>
    </div>
  );
};

export default SelectBox;
