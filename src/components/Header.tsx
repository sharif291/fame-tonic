"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full md:px-[211px] py-[28px] flex justify-center md:justify-between items-center md:items-start shadow-md z-50 relative">
      {/* Logo */}
      <Link href="/" className="">
        <Image src={"/logo.png"} alt="logo" width={174} height={74} className="w-[107px] h-[46px] md:w-[174px] md:h-[74px]" />
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex font-[figtree] font-semibold text-[18px] text-[#A9A9A9]">
        <Link href="#" className="pr-[20px]">
          About us
        </Link>
        <Link href="#" className="pl-[20px]">
          Contact
        </Link>
      </nav>
      {/* mobile nav */}
      <nav className="md:hidden flex font-[figtree] font-semibold text-[18px] text-[#A9A9A9] absolute right-[20px]">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1.03597"
            x2="19"
            y2="1.03597"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="1"
            y1="7.03597"
            x2="19"
            y2="7.03597"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="1"
            y1="13.036"
            x2="19"
            y2="13.036"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Header;
