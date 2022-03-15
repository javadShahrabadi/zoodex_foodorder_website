import styles from "./HeaderBootom.module.css";
import Button from "../ui/Button";
import SelectBox from "../ui/SelectBox";
// ------------------------

const HeaderBottom = () => {
  return (
    <section>
      <div className={`${styles["bg__image"]} relative`}>
        <div className="relative z-20 grid place-items-center top-[50%]">
          <h2 className=" text-[#8d8d8d] font-semibold text-sm md:text-lg">
            انتخاب غذای مورد علاقتون با شما ثبت یک سفارش خوشایند با ما
          </h2>
          <div className="mt-5 flex items-center">
            <SelectBox selected="کرمان" />
            <Button type="button" text="بزن بریم" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeaderBottom;
