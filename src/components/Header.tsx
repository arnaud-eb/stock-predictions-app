import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="flex justify-center p-4 bg-black my-0 mx-auto w-screen">
      <Image
        src="/logo-dave-text.png"
        alt="Dodgy Dave's Stock Predictions"
        sizes="(max-width: 400px) 100vw, 50vw"
        width={340}
        height={95}
        priority
      />
    </header>
  );
};

export default Header;
