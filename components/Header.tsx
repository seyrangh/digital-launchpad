import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative">
      <div className="flex justify-center items-center py-6">
        <Link href="/">
          <Image
            src="/DLLogo.png"
            alt="Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[20px] overflow-hidden">
        <div className="h-full w-[200%] animate-slide flex items-center">
          <div className="h-[2px] bg-gradient-to-r from-[#f0a500] to-transparent flex-grow"></div>
          <div className="flex items-center">
            <Image
              src="/RocketLogo.svg"
              alt="Rocket Logo"
              width={20}
              height={20}
              className="mr-4 transform -rotate-90"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
