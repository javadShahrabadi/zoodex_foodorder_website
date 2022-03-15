import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { Divide as Hamburger } from "hamburger-react";

// -----------------------

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <header className="bg-white w-full py-2 border-b border-gray-200 shadow-md fixed z-50 ">
      <nav className="flex items-center flex-row-reverse md:flex-row justify-between px-2 md:px-14">
        <div className="cursor-pointer pl-1 md:pl-0">
          <Image
            src="https://zoodex.ir/_nuxt/img/logo.177e5a9.svg"
            width={164}
            height={48}
            alt="zoodex-logo"
          />
        </div>
        <div
          className="md:hidden"
          onClick={() => setShowSubMenu((prevState) => !prevState)}
        >
          <Hamburger duration={0.4} size={25} />
        </div>
        <ul className=" items-center text-sm space-x-4 hidden md:flex">
          <li className="flex items-center cursor-pointer border-l-2 border-gray-300 pl-4">
            <span>
              <SearchIcon className="w-6 h-6 text-[#3A4BA8]" />
            </span>
            <span className="pr-1 font-semibold text-gray-500">جستجو</span>
          </li>
          <li className="flex items-center cursor-pointer pr-4 border-l-2 border-gray-300 pl-4">
            <span>
              <UserIcon className="w-6 h-6 text-[#3A4BA8]" />
            </span>
            <span className="pr-1 font-semibold text-gray-500">
              ورود / ثبت نام
            </span>
          </li>
          <li className="flex items-center cursor-pointer">
            <ShoppingBagIcon className="w-6 h-6 text-[#3A4BA8]" />
            <span className="pr-1 font-semibold text-gray-500">سبد خرید</span>
          </li>
        </ul>
      </nav>
      {/* submenu */}
      {showSubMenu && (
        <div className="pt-4 px-4 sm:px-8 block md:hidden submenu__animation">
          <ul className="flex flex-col space-y-6 text-sm">
            <li className="cursor-pointer border-b border-gray-100 pb-4 blue__title">
              جستجو
            </li>
            <li className="cursor-pointer border-b border-gray-100 pb-4 blue__title">
              ورود / ثبت نام
            </li>
            <li className="cursor-pointer pb-4 blue__title">سبد خرید</li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
