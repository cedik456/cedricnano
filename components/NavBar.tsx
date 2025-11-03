"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const theme = "dark";
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];
  return (
    <nav className="flex items-center justify-center mt-10">
      <div className="flex bg-[#303030]/60 backdrop-blur-md px-2 py-2 rounded-full shadow-md">
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
      <button onClick={() => {}}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
};

export default NavBar;
