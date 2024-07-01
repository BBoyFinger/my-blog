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
    name: "Styles",
    href: "/styles",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
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

const category = [
  {
    tille: "LifeStylle",
    href: "#",
  },
  {
    tille: "LifeStylle",
    href: "#",
  },
  {
    tille: "LifeStylle",
    href: "#",
  },
  {
    tille: "LifeStylle",
    href: "#",
  },
  {
    tille: "LifeStylle",
    href: "#",
  },
  {
    tille: "LifeStylle",
    href: "#",
  },
];

const NavBar = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      <NavigationMenu>
        {/* {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              className={`${
                link.href === pathName && "border-b-2 border-accent"
              } capitalize transition-all flex items-center text-[rgba(0,0,0,0.6)] hover:text-accent-hover`}
            >
              {link.name}
            </Link>
          );
        })} */}

        <NavigationMenuList>
          <NavigationMenuItem>
            
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
