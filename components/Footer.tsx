import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto container max-w-5xl py-20  text-gray-400">
      {/* <hr className="border-gray-700/40 mb-10" /> */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">Ced</p>
          <p className="text-xs opacity-70">Full-Stack Developer</p>
        </div>

        <div className="flex gap-6 text-xs">
          <Link href="#home" className="hover:text-white transition">
            Home
          </Link>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <p className="text-[10px] text-center opacity-50 mt-8">
        © {new Date().getFullYear()} Ced. Built with Next.js & TailwindCSS
      </p>
    </footer>
  );
};

export default Footer;
