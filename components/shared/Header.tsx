import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex items-center py-5 px-2 md:px-6 justify-between">
        <div className="flex">
          <Link href="/" className="md:mr-12 mt-1">
            <Image src="/images/logo.svg" width={64} height={19} alt="snap" />
          </Link>
          <nav className="hidden md:flex md:flex-start max-w-xs">
            <NavItems />
          </nav>
        </div>
        <div className="flex justify-end gap-3">
          <nav className="hidden md:flex">
            <ul className="flex flex-center gap-12">
              <li className="cursor-pointer text-gray-500 hover:text-gray-800 focus:text-gray-800 font-medium">
                Login
              </li>
              <li className="cursor-pointer">
                <Button className="text-gray-800 h-[36px] px-6 bg-transparent outline outline-offset-2 outline-2 outline-gray-800 hover:bg-transparent">
                  Register
                </Button>
              </li>
            </ul>
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
