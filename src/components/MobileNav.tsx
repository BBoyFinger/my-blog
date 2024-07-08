"use client";
import { IoMenuSharp } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/lib/feature/category/categorySlice";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";

type Props = {};

const MobileNav = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const getAllCategory = () => {
    dispatch(getCategories());
  };

  useEffect(() => {
    getAllCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const category = useSelector(
    (state: RootState) => state.categories.categories
  );
  const pathname = usePathname();
  return (
    <div className="flex">
      <Sheet>
        <SheetTrigger>
          <IoMenuSharp className="w-10 h-10" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          {/* Logo */}
          <Link href="/">
            <h1 className="text-4xl mt-32 mb-32 text-center">
              Vu Tu<span className="text-accent text-xl">.Blog</span>
            </h1>
          </Link>
          {/* Nav */}
          <nav className="m-[20px_20px_20px_20px] font-normal text-[17px] ">
            {/* {links.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  key={index}
                  className={` ${
                    link.href === pathname &&
                    "text-accent border-b-2 border-accent"
                  }  text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              );
            })} */}
            <ul className="border-b-[1px] border-solid border-[rgba(0,0,0,0.1)]">
              <li className="block p-0 text-left border-t-[1px] border-solid border-[rgba(0,0,0,0.1)]">
                <Link href="/" className="leading-[60px]">
                  Home
                </Link>
              </li>
              <li className="block p-0 text-left border-t-[1px] border-solid border-[rgba(0,0,0,0.1)]">
                <Accordion type="single" collapsible className="">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                      <ul className="">
                        {category.map((item, index) => (
                          <li key={index}>
                            <Link href="#" className="">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className="block p-0 text-left border-t-[1px] border-solid border-[rgba(0,0,0,0.1)]">
                <Accordion type="single" collapsible className="">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Blog</AccordionTrigger>
                    <AccordionContent>
                      <ul className="">
                        {category.map((item, index) => (
                          <li key={index}>
                            <Link href="#" className="">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className="block p-0 text-left border-t-[1px] border-solid border-[rgba(0,0,0,0.1)]">
                <Link href="/about" className="leading-[60px]">
                  About
                </Link>
              </li>
              <li className="block p-0 text-left border-t-[1px] border-solid border-[rgba(0,0,0,0.1)]">
                <Link href="/contact" className="leading-[60px]">
                  Contact
                </Link>
              </li>
              <li className="block p-0 text-left border-t-[1px] border-solid border-[rgba(0,0,0,0.1)]">
                <Link href="/login" className="leading-[60px]">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
