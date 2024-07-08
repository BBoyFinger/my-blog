"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/lib/feature/category/categorySlice";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";

const NavBar = () => {
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

  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      <NavigationMenu>
        <NavigationMenuItem>
          <Link href="/home" legacyBehavior passHref>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="text-[15px] font-normal m-0 py-[18px] bg-[#151515] rounded-[0_0_3px_3px] text-white w-40">
              {category.map((item, index) => {
                return (
                  <li
                    className="block text-left p-0 m-0 min-h-[33px]"
                    key={index}
                  >
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="py-[7.5px] px-[20px] text-[rgba(255,255,255,0.5)] hover:text-white "
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="text-[15px] font-normal m-0 py-[18px] bg-[#151515] rounded-[0_0_3px_3px] text-white w-40">
              {category.map((item, index) => {
                return (
                  <li
                    className="block text-left p-0 m-0 min-h-[33px]"
                    key={index}
                  >
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="py-[7.5px] px-[20px] text-[rgba(255,255,255,0.5)] hover:text-white "
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink>About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink>Contact</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink>Login</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
