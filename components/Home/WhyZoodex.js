import WhyCart from "./WhyCart";

const WhyZoodex = () => {
  return (
    <section className="mt-16 mb-16">
      <h3 className="text-xl text-center font-semibold text-gray-600">
        چرا زودکس ؟
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-6xl mx-auto mt-10 gap-2 place-items-stretch px-4 lg:px-0">
        <WhyCart
          image="/icons/speed.png"
          title="سریع ترینه!"
          description="میتونی در کمترین زمان ممکن سفارشت رو تحویل بگیری ."
        />
        <WhyCart
          image="/icons/power.png"
          title="قوی ترینه!"
          description="هر مسئله و سوالی داشتی، کافیه با پشتیبانی تماس بگیری ."
        />
        <WhyCart
          image="/icons/easy.png"
          title="راحت ترینه!"
          description="میتونی انتخاب کنی پرداختت رو انلاین یا در محل با کارتخوان انجام بدی ."
        />
        <WhyCart
          image="/icons/useful.png"
          title="کاربردی ترینه!"
          description="میتونی با یک سفارش، همزمان از چند فروشگاه خریدت رو ثبت کنی ."
        />
      </div>
    </section>
  );
};

export default WhyZoodex;
