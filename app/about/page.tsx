"use client";

import Experience from "@/components/Experience";
import { alltechs } from "../contents/all-techs";
import { techs } from "../contents/main-tech";
import { motion } from "framer-motion";
import { GrLocationPin } from "react-icons/gr";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 max-w-5xl ">
      <h1 className="text-4xl font-bold mb-4 md:px-0 px-4 md:text-left text-center ">
        About Me
      </h1>

      {/* <div className="flex gap-2 text-lg">
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
      </div> */}

      <section className="mb-16 md:px-0 px-4">
        <h2 className=" flex gap-2 mb-2 items-center text-gray-400 md:justify-start justify-center   ">
          <GrLocationPin className="size-5" /> Legazpi City, Philippines
        </h2>

        <div className="text-center md:text-left">
          <p className="text-lg text-secondary max-w-4xl text-gray-300 mb-2 ">
            I’m currently studying at{" "}
            <span className="text-gray-100 font-medium">
              Divine Word College of Legazpi
            </span>
            . I’m someone who loves to learn and explore new technologies. I’m
            not the type of person who picks things up overnight, so I like to
            stick with something for a very long time studying, practicing, and
            getting better little by little.
          </p>

          <p className="text-lg text-secondary max-w-3xl text-gray-300">
            I’m also pretty active and I like staying productive. I admire
            balance, my goal is to build a life where my work and personal time
            don’t compromise each other. I just want to grow and move at my own
            steady pace.
          </p>
        </div>
      </section>

      <section className="md:px-0 px-4">
        <h1 className="text-3xl md:text-2xl font-semibold mb-4 text-center md:text-left  ">
          Tools I've used before
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4  mx-auto">
          {alltechs.map((tech, index) => (
            <motion.div
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              key={index}
              className="flex items-center gap-3  bg-[#303030] py-2 px-2 rounded-xl transition cursor-pointer"
            >
              <div
                className="bg-gray-50/50 rounded-lg p-1"
                style={{ backgroundColor: tech.color }}
              >
                <img
                  src={tech.icon}
                  alt={tech.title}
                  className="md:w-8 md:h-8 h-6 w-6"
                />
              </div>
              <div>
                <p className="font-semibold text-white">{tech.title}</p>
                <p className="text-xs text-gray-400">{tech.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Experience />

      <section className="md:px-0 px-4">
        <h1 className="text-2xl font-semibold mb-4  ">Education</h1>
      </section>

      <Footer />
    </div>
  );
}
