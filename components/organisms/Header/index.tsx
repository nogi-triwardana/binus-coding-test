import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex flex-col w-full">
      <div className="flex justify-end text-white w-full bg-black p-4">
        <FaSearch />
      </div>
      <div className={'flex'}>
        <Image
          src={'/assets/icons/pita-univ-pendek.svg'}
          width={40}
          height={75}
          alt={''}
        />
        <Image
          src={'/assets/icons/main-logo.svg'}
          width={306}
          height={84}
          alt={'logo-binus'}
        />
      </div>
    </header>
  );
};

export default Header;