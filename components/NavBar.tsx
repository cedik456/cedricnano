"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";

const NavBar = () => {
  const theme = "dark";
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];
  return (
    <nav className="flex items-center md:justify-between mt-10 px-6 justify-center   ">
      <div className=" items-center gap-2 text-gray-400 flex ">
        <FaGithub className="md:size-7 size-6 cursor-pointer hover:text-white transition-colors" />
        <FaLinkedin className="size-6 cursor-pointer  hover:text-white transition-colors" />
        <BiLogoGmail className="size-6 cursor-pointer  hover:text-white transition-colors" />
      </div>

      <div className="flex bg-[#303030]/60 backdrop-blur-md px-1 py-1 rounded-full shadow-md mx-1.5 md:mx-0 ">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={` text-sm text-gray-400 transition-all duration-300 px-3 py-1   ${
                isActive ? "bg-[#424242] rounded-full text-white " : ""
              }  `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* <div className="md:bg-white bg-none md:py-1 py-0 md:px-2 px-0 rounded-md cursor-pointer">
        <Image
          src={"/ph.svg"}
          alt="ph flag"
          width={100}
          height={100}
          className="w-6 h-6"
        />
      </div> */}
      <button onClick={() => {}} className="cursor-pointer ">
        {theme === "dark" ? (
          <SunIcon className="w-6 h-6 " />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
