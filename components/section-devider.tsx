"use client"

import { motion } from "framer-motion";
import React from "react";

export default function SectionDevider() {
  return (
    <motion.div className="bg-gray-200 my-12 h-12 w-0.5 rounded-full hidden sm:block"
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.125}}>
    </motion.div>
  );
}
