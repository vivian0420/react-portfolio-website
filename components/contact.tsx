"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInview } from "@/app/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const ref = useSectionInview("Contact", 1);
  const [emailAddress, setEmailAddress] = useState("");
  const [messageContent, setMessageContent] = useState("");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-32 mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jzhang230@dons.usfca.edu">
          jzhang230@dons.usfca.edu
        </a>{" "}
        or through this form.
      </p>
      <form
        className="flex flex-col mt-10"
        action={async (formData,) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          setEmailAddress("");
          setMessageContent("")
          toast.success("Email sent successfully!");
          
        }}
      >
        <input
          type="email"
          name="senderEmail"
          value={emailAddress}
          placeholder="Your email"
          className="h-14 rounded-lg p-4 border border-black/10"
          required
          maxLength={500}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <textarea
          className="h-40 my-3 p-4 rounded-lg border border-black/10"
          placeholder="Your message"
          name="message"
          value={messageContent}
          required
          maxLength={5000}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <SubmitBtn></SubmitBtn>
      </form>
    </motion.section>
  );
}
