import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="flex justify-center p-4 bg-black my-0 mx-auto w-screen">
      <Link href="/">
        <Image
          src="/logo-dave-text.png"
          alt="Dodgy Dave's Stock Predictions"
          sizes="(max-width: 400px) 100vw, 50vw"
          width={340}
          height={95}
          priority
        />
      </Link>
    </header>
  );
};

export default Header;
