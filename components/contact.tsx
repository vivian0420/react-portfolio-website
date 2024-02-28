"use client"
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInview } from "@/app/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const ref = useSectionInview("Contact", 1);
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-32 mb-28 w-[min(100%, 38rem)] text-center"
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    viewport={{once: true}}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jzhang230@dons.usfca.edu">
          jzhang230@dons.usfca.edu
        </a>{" "}
        or through this form.
      </p>
      <form className="flex flex-col mt-10"
      action={async (formData) => {
        
        await sendEmail(formData);
      }}>
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          className="h-14 rounded-lg p-4 border border-black/10"
          required
          maxLength={500}
        />
        <textarea className="h-40 my-3 p-4 rounded-lg border border-black/10" 
          placeholder="Your message"
          name="message"
          required
          maxLength={5000} />
        <button
          type="submit"
          className="group flex items-center bg-gray-900 text-white h-[3rem] w-[8rem] rounded-full outline-none 
          justify-center transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
        
      </form>
    </motion.section>
  );
}
