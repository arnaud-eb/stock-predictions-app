import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="flex justify-center p-4 bg-black my-0 mx-auto">
      <Image
        src="/logo-dave-text.png"
        alt="Dodgy Dave's Stock Predictions"
        width={340}
        height={340}
        priority
      />
    </header>
  );
};

export default Header;
