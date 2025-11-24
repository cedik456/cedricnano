"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const theme = "dark";
  const pathname = usePathname();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShow(false); // scroll down → hide
    } else {
      setShow(true); // scroll up → show
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];
  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center md:justify-between px-6 justify-center py-4 "
    >
      <div className=" items-center gap-2 text-gray-400 flex ">
        <a
          href="https://github.com/cedik456"
          target="_blank"
          className="cursor-pointer hover:text-white transition-colors"
        >
          <FaGithub className=" size-6 " />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="cursor-pointer  hover:text-white transition-colors"
        >
          <FaLinkedin className="  size-6 " />
        </a>

        <a
          href="mailto:lawrenzuio@gmail.com"
          target="_blank"
          className="cursor-pointer  hover:text-white transition-colors"
        >
          <BiLogoGmail className=" size-6 " />
        </a>
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
    </motion.nav>
  );
};

export default NavBar;
