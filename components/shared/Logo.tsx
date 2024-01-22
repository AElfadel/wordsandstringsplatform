import Image from "next/image";

function Logo() {
  return (
    <div className="flex">
      <Image
        src="/was_logo.png"
        width={38}
        height={38}
        alt="Words & Strings Logo"
      />
      <p className="flex text-sm mt-4 text-neutral-600">Words & Strings</p>
    </div>
  );
}

export default Logo;

export function LogoWithoutText() {
  return (
    <div className="flex">
      <Image
        src="/was_logo.png"
        width={38}
        height={38}
        alt="Words & Strings Logo"
      />
    </div>
  );
}
