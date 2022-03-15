import Image from "next/image";
import { Fragment } from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] px-16 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 place-items-stretch gap-x-10 gap-y-10">
        <div>
          <h2 className="text-gray-600 font-bold text-lg">درباره زودکس</h2>
          <p className="text-sm text-justify pt-2">
            قسمت فروشگاهی زودکس واسطی بین مشتریان و فروشگاه ها می باشد که به
            سفارش و ارسال خرید های شما مشتریان عزیز سرعت می بخشد. در حال حاضر
            زودکس با رستوران ها، فست فود ها، کافه ها، میوه فروشی ها، سوپر مارکت
            ها و... به صورت قراردادی کار میکند و این خدمات را با سرعت بیشتری درب
            منزل شما می آورد چرا که بجای تماس های تلفنی با فروشندگان آنها به
            صورت آنلاین از طریق سیستم متوجه سفارش شما خواهند شد و آماده سازی
            سفارش شما با سرعت بیشتری انجام خواهد گرفت.
          </p>
        </div>
        <div>
          <h2 className="text-gray-600 font-bold text-lg">ارتباط با زودکس</h2>
          <p className="text-sm text-justify pt-2">
            پیگیری سفارشات :
            <span className="font-bold text-black pr-1">۴۴۰۰ ۹۱۰۱ ۰۳۴</span>
          </p>
          <p className="text-sm text-justify pt-2">
            شماره دوم پشتیبانی کرمان :‌
            <span className="font-bold text-black pr-1">۱۲۲۱ ۵۴۳ ۰۹۳۵</span>
          </p>
          <p className="text-sm text-justify pt-2">
            رسیدگی به شکایات و پیشنهادات :
            <span className="font-bold text-black pr-1">۴۲۶۲ ۸۸۴ ۰۹۱۲</span>
          </p>
        </div>
        <div>
          <h2 className="text-gray-600 font-bold text-lg">بیشتر</h2>
          <ul className="flex flex-col space-y-2 pt-2">
            <li>
              <p className="text-sm cursor-pointer">نحوه ثبت نام در زودکس</p>
            </li>
            <li className="text-sm cursor-pointer">
              <p>رویه ارسال زودکس</p>
            </li>
            <li className="text-sm cursor-pointer">
              <p>شیوه های پرداخت در زودکس</p>
            </li>
            <li className="text-sm cursor-pointer">
              <p>قوانین و مقررات زودکس</p>
            </li>
            <li className="text-sm cursor-pointer">
              <p>سوالات متداول</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-between">
          {/* <h2 className="text-gray-600 font-bold text-lg">مجوز های زودکس</h2> */}
          <div>
            <Image
              src="https://zoodex.ir/_nuxt/img/enamad.0a350ff.png"
              alt="e-sign"
              width={122}
              height={132}
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/icons/instagram.png"
              width={40}
              height={40}
              alt="instagram-logo"
            />
            <p className="text-[13px] pr-1 cursor-pointer">
              زودکس را در اینستاگرام دنبال کنید
            </p>
          </div>
        </div>
      </div>
      <div className="border border-b-gray-300 my-6 w-full mx-auto" />
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <p className="text-sm text-justify">
          تمامی لوگو ها ، عکس ها و سایر محتوا های قرار داده شده با احترام متعلق
          به زودکس است و امتیاز استفاده از این اطلاعات تنها برای زودکس مجاز است
          .
        </p>
        <p className="text-sm pt-2 font-bold">محمدجواد شهرآبادی</p>
      </div>
    </footer>
  );
};

export default Footer;
