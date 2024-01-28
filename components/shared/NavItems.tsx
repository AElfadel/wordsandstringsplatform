"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Icons } from "../ui/Icons";
import Image from "next/image";
import { Separator } from "../ui/Seperator";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItems() {
  const pathname = usePathname();

  return (
    <ul className="flex w-full flex-col items-start gap-5 md:flex-row  md:justify-center">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`
            ${isActive && "text-primary-500"} 
          flex justify-center whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavItems;

export function NavItemsMobile() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Icons.menu className="h-5 w-5 mx-2 mt-2" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden ">
          <Image
            src="/was_logo.png"
            width={38}
            height={38}
            alt="Words & Strings Logo"
          />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}
