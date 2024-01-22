import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import NavItems, { NavItemsMobile } from "./NavItems";
import Image from "next/image";
import Logo from "./Logo";

function Header() {
  return (
    <header className="w-full   border-b">
      <div className="wrapper flex items-center justify-between  ">
        <Link href="/" className=" md:w-64 md:-mr-6 ">
          <Logo />
        </Link>

        <SignedIn>
          <nav className="md:flex wrapper   hidden w-full max-w-xs mt-3">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <div className="flex mt-1">
              <UserButton afterSignOutUrl="/" />

              <NavItemsMobile />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

export default Header;
