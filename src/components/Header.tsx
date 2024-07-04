import Link from "next/link";
import React from "react";
import NavBar from "./NavBar";
import { FaSearch } from "react-icons/fa";
import MobileNav from "./MobileNav";
import Search from "./Search";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-white h-[78px] flex items-center ">
      <div className="container flex justify-between">
        <div className="xl:hidden">
          <MobileNav />
        </div>

        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl">
            VuTu<span className="text-accent text-sm">Blog.</span>
          </h1>
        </Link>
        {/* Desktop navbar */}
        <div className="hidden xl:flex">
          <NavBar />
        </div>

        {/* Search */}
        <div className="flex items-center">
          {/* <a href="#" className="flex items-center gap-2">
            <span className="hidden xl:flex">Search</span>
            <FaSearch className="w-[18px] h-[18px]" />
          </a> */}
          <Search />
        </div>
        {/* Mobile nav */}
      </div>
    </header>
  );
};

export default Header;
