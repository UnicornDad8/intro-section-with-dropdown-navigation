import Link from "next/link";
import Image from "next/image";

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
          <ul>
            <li>uno</li>
            <li>dos</li>
            <li>tres</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
