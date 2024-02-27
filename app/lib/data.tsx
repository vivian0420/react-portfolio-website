import React from "react";
//import { CgWorkAlt } from "react-icons/cg";
//import { FaReact } from "react-icons/fa";
//import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/ecommerce-website.png";
import sportWebsiteImg from "@/public/sport-website.png";
import dailyPlannerImg from "@/public/daily-planner.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Sports Association's Website",
    description:
      "I worked as a full-stack developer for this sports association from June 2023. Users can register for sports games and acquire relevant information.",
    tags: ["React", "Typescript", "Next.js", "Tailwind"],
    imageUrl: sportWebsiteImg,
  },
  {
    title: "E-Commerce Website",
    description:
      "I built this e-commerce web application from scratch and served as a full-stack developer for the project. It was deployed on AWS for public access(https://www.whoopee.store/).",
    tags: ["HTML/CSS", "Javascript", "Handlebars", "Bootstrap", "Node.js", "MongoDB"],
    imageUrl: ecommerceImg,
  },
  {
    title: "Daily Planner Power-up",
    description:
      "This is a Trello Power-Up for schedule management on a weekly basis. It also integrates with Google Calendar to achieve a unified collaboration platform.",
    tags: ["Javascript", "Python", "REST API", "SQLite", "Flask"],
    imageUrl: dailyPlannerImg,
  },
] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Express",
  "Python",
  "Handlebars",
  "Bootstrap",
  "JQuery",
  "AJAX",
  "Framer Motion",
  "REST API",
  "AWS",
  "GO",
  "C++",
  "HDFS",
  "MapReduce"
] as const;