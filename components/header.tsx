"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/app/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from '@/context/active-section-context'
import clsx from "clsx";

const Header = () => {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  //const[activeSection, setActiveSection] = useState('Home');
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-11/12 rounded-full
         border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
         shadow-black/[0.33] backdrop-blur-[0.5rem]  sm:top-6 sm:h-[3.25rem] sm:w-[40rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem]
        sm:h-[initial] sm:py-0"
      >
        <ul className="flex flex-wrap w-[22rem] sm:gap-5 items-center justify-center gap-y-1
        text-[0.9rem] font-medium sm:flex-nowrap sm:w-[initial] text-gray-500">
          {links.map(link => (
            <motion.li className="h-3/4 flex items-center justify-center relative" key={link.hash}
            initial={{ y: -100,  opacity: 0 }}
            animate={{ y: 0,  opacity: 1 }}>
              <Link className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition", {"text-gray-950": activeSection === link.name,})} 
              href={link.hash} onClick={()=>{setActiveSection(link.name); setTimeOfLastClick(Date.now())}}>{link.name}
              {(link.name === activeSection) && (<span className="bg-gray-100 rounded-full absolute inset-0 -z-10"></span>)}
              
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
