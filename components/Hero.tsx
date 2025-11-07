"use client";

import Image from "next/image";
import SkillsSection from "./SkillsSection";
import { motion } from "framer-motion";
import { fadeInUp, heroText } from "@/app/utils/animation";

const Hero = () => {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-10 md:px-0">
      <div className="flex items-center gap-10 flex-col-reverse md:flex-row md:items-start  md:gap-15 ">
        <div className="flex flex-col md:w-[580px] w-full text-center md:text-left mt-6 md:mt-0">
          <motion.h1
            variants={heroText}
            initial="initial"
            animate="animate"
            className="text-3xl md:text-4xl mb-2 font-semibold"
          >
            Hello, my name is{" "}
            <motion.span
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Cedric Naño
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.25 }}
            className="mb-4 md:text-md  text-gray-400"
          >
            {" "}
            I'm a working student with almost 3 years of experience as a{" "}
            <span className="text-lg text-gray-200 ">
              Full-Stack Developer.
            </span>{" "}
            I like to explore new frameworks and emerging technologies.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.35 }}
          >
            <SkillsSection />
          </motion.div>
        </div>

        <div>
          <Image
            src={"/profilepic.jpg"}
            alt="profile picture"
            width={200}
            height={200}
            className=" w-auto h-auto object-cover rounded-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
