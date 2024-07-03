"use client";
import { IoMenuSharp } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Categories",
    href: "/category",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Login",
    href: "/login",
  },
];

const MobileNav = (props: Props) => {
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
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
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
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
