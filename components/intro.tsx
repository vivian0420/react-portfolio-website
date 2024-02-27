"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInview } from "@/app/lib/hooks";

const Intro = () => {
  const ref = useSectionInview("Home", 0.5);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[46rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/portrait.png"
            alt="portrait"
            width="130"
            height="130"
            property="true"
            className="rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          />
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-lg sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Vivian.</span> I'm a new graduate
        in <span className="font-bold">Computer Science</span> with a Master's
        degree. I enjoy building <span className="italic">web applications</span> and
        aspire to become a{" "}
        <span className="underline">Full-Stack Web Developer.</span>
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-2 px-4 items-center justify-center font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
        border border-black/10"
        >
          Contact me here
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group flex bg-white px-6 py-3 gap-2 items-center rounded-full justify-center
        outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
        border border-black/10"
          href="/Jiayun-Zhang-Resume.pdf"
          download={true}
        >
          Download DV
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
        <a
          className="px-2 items-center text-[1.25rem] text-gray-700 cursor-pointer hover:scale-125
          hover:text-gray-950"
          href="https://www.linkedin.com/in/jiayun-zhang-b248391a2/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="px-2 items-center text-[1.5rem]  text-gray-700 cursor-pointer hover:scale-125
          hover:text-gray-950"
          href="https://github.com/vivian0420"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
