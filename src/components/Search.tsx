"use client";
import { IoMenuSharp } from "react-icons/io5";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { FaSearch } from "react-icons/fa";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="text-center flex justify-center items-center">
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center justify-center gap-2">
            <span className="hidden xl:flex">Search</span>
            <FaSearch className="w-[18px] h-[18px]" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <div className="text-center mt-[200px] mb-[200px] flex justify-center items-center">
            <form action="">
              <Label className="font-bold text-[14px] leading-[1.714 text-black]">
                Search for:
              </Label>
              <Input
                placeholder="Type Keywords"
                className="max-w-[680px] w-full h-full sm:text-[42px] py-[6px] placeholder:text-black text-[34px] xl:text-[60px] leading-[1.5] text-center m-[0_auto]"
              ></Input>
              <p className="mt-[30px] text-[rgba(0,0,0,0.5)] leading-[0.6px] text-center">
                Press Enter to begin your search
              </p>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Search;
