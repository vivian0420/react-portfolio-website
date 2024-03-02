"use client"
import React, { useEffect } from "react";
import SectionHeader from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInview } from "@/app/lib/hooks";

export default function About() {
  const ref = useSectionInview("About", 1);
 
  return (
    <motion.section  ref={ref} className="mb-24 max-w-[45rem] text-center leading-7 scroll-mt-28"
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.175}}
    id='about'>
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        After obtaining a degree in{" "}
        <span className="font-medium">Pharmacy</span> in China, I decided to
        pursue my passion for programming. I enrolled in the University of San
        Francisco&apos;s Master&apos;s program and learned{" "}
        <span className="font-medium">Computer Science</span>.{" "}
        <span className="italic">My most favorite part of programming</span> is
        the problem-solving process. I <span className="underline">enjoy</span>{" "}
        the feeling of finally figuring out a solution to a problem. I also love{" "}
        <span className="font-medium">Web Development. </span> Skills that I
        applied in my development include{" "}
        <span className="font-medium">
          HTML/CSS, JavaScript, Node.js, Next.js, React, TypeScript
        </span>
        ,and more. I am eager to continually expand my knowledge. I am currently
        looking for a <span className="font-medium">full-time position</span> as
        a <span className="underline">software developer/web developer.</span>
      </p>
      <p>
        <span className="italic">In my free time</span>, I enjoy hiking and
        cooking. I also like{" "}
        <span className="font-medium">learning new things</span>, and currently,
        I am learning about how to plant roses.
      </p>
    </motion.section>
  );
}
