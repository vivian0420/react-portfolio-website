import React from "react";
import { PiNotebookThin } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Remote, CA",
    description:
      "I work as a Web developer for a non-profit sports association. My stack includes React, Next.js, TypeScript, Tailwind.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Master's degree",
    location: "San Francisco, CA",
    description:
      "I graduated from the University of San Francisco with a Master's degree in Computer Science in December 2023.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Undergraduate Credit Transfer",
    location: "Pleasant Hill, CA",
    description:
      "I attended the Diablo Valley college to study computer science and transferred the earned units to apply for a master's program.",
    icon: React.createElement(PiNotebookThin),
    date: "2019 - 2020",
  },
] as const;

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