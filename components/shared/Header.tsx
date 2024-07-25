import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex items-center py-5 px-2 md:px-6">
        <Link href="/" className="w-36">
          <Image
            src="/images/logo.svg"
            width={64}
            height={19}
            alt="Evently logo"
          />
        </Link>
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Header;
