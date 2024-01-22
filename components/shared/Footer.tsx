import Link from "next/link";
import { LogoWithoutText } from "./Logo";
import { Icons } from "../ui/Icons";

function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex gap-4 p-5 text-center flex-row">
        <Link href="/">
          <LogoWithoutText />
        </Link>
        <p className="text-sm">2024 Words & Strings. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
