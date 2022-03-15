import CartList from "./CartList";
import { ChevronDownIcon } from "@heroicons/react/solid";
const SearchFor = () => {
  return (
    <section className=" mt-10 mb-20">
      <h2 className="text-sm md:text-xl font-semibold text-center">
        دنبال چی میگردی ؟ بهمون بگو تا توی پیدا کردنش بهت کمک کنیم
      </h2>
      <div className="mt-14 max-w-4xl mx-auto">
        <CartList />
      </div>
      <p className="flex items-center justify-center  font-semibold mt-8">
        <span className="text-gray-500 text-sm cursor-pointer">
          نمایش بیشتر
        </span>
        <span>
          <ChevronDownIcon className="w-5 h-5 fill-gray-500" />
        </span>
      </p>
    </section>
  );
};

export default SearchFor;
