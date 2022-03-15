import Button from "../ui/Button";
import SuggestionCartContainer from "./SuggestionCartContainer";
const SuggestionList = () => {
  return (
    <section className="bg-[#F5F5F5] flex flex-col lg:flex-row items-center py-4 px-8">
      <div className="grid place-items-center h-full w-full lg:w-1/3 my-auto">
        <h2 className="text-gray-600 font-bold text-lg text-center mt-6 lg:mt-0">
          زودکسی ها این محل ها رو توصیه کردن
        </h2>
        <p className="text-sm text-gray-400 mt-6 w-1/2 text-center">
          جاهایی که سفارش از اون ها زودکسی های زیادی رو خوشحال و راضی کرده .
        </p>
        <p className="text-sm text-gray-400 mt-6 w-1/2 mb-6 text-center">
          می تونی دکمه پایین رو بزنی و یکی از این مجموعه ها برات شانسی انتخاب
          بشه .
        </p>
        <div className="">
          <Button type="button" text="یا بخت یا اقبال" />
        </div>
      </div>
      <div className="w-full mt-8 lg:mt-0 lg:w-2/3">
        <SuggestionCartContainer />
      </div>
    </section>
  );
};

export default SuggestionList;
