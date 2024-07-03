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
    trigger: false,
  },
  {
    name: "Categories",
    href: "/category",
    trigger: true,
    children: [
      { name: "Category 1", href: "/category/1" },
      { name: "Category 2", href: "/category/2" },
      { name: "Category 3", href: "/category/3" },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
    trigger: true,
    children: [
      { name: "Blog Post 1", href: "/blog/1" },
      { name: "Blog Post 2", href: "/blog/2" },
      { name: "Blog Post 3", href: "/blog/3" },
    ],
  },
  {
    name: "About",
    href: "/about",
    trigger: false,
  },
  {
    name: "Contact",
    href: "/contact",
    trigger: false,
  },
  {
    name: "Login",
    href: "/login",
    trigger: false,
  },
];

const NavBar = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
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
      <NavigationMenu>
        {links.map((link, index) => (
          <NavigationMenuItem key={index}>
            {link.trigger ? (
              <>
                <NavigationMenuTrigger> {link.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {link.children?.map((item, index) => {
                    return (
                      <ul
                        key={index}
                        className="text-[15px] font-normal m-0 py-[18px] bg-[#151515] rounded-[0_0_3px_3px] text-white w-40"
                      >
                        <li className="block text-left p-0 m-0 min-h-[33px] w-full">
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="py-[7.5px] px-[20px] text-[rgba(255,255,255,0.5)] hover:text-white "
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    );
                  })}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={link.href}
                className={`${
                  link.href === pathName && "border-b-2 border-accent"
                } capitalize transition-all flex items-center text-[rgba(0,0,0,0.6)] hover:text-accent-hover`}
              >
                {link.name}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
