import {LucideHome, UserIcon, StarsIcon, LayoutList, LucideContact } from "lucide-react";

import aws from "@/assets/tech/aws.png";
import css from "@/assets/tech/css.png";
import express from "@/assets/tech/express.png";
import html from "@/assets/tech/html.png";
import javascript from "@/assets/tech/javascript.png";
import firebase from "@/assets/tech/firebase.png";
import mongodb from "@/assets/tech/mongodb.png";
import node from "@/assets/tech/node.png";
import react from "@/assets/tech/react.png";
import spline from "@/assets/tech/spline.png";
import tailwind from "@/assets/tech/tailwind.png";
import vite from "@/assets/tech/vite.png";
import project1 from "@/assets/thumbnails/bidflare.png"
import project2 from "@/assets/thumbnails/amrutam.png"
import project3 from "@/assets/thumbnails/movie.png"
import github from "@/assets/socials/github.png"
import linkedin from "@/assets/socials/linkedin.png"
import whatsapp from "@/assets/socials/whatsapp.png"

export const links = [
  {
    href: "#",
    Icon:  LucideHome ,
    title: "Home",
  },
  {
    href: "#about",
    Icon: UserIcon ,
    title: "About",
  },
  {
    href: "#stack",
    Icon: StarsIcon ,
    title: "Certification",
  },
  {
    href: "#projects",
    Icon: LayoutList ,
    title: "Projects",
  },
  {
    href: "#contact",
    Icon: LucideContact,
    title: "Get in touch",
  },
];


export const stack = [
  { title: "AWS", logo: aws },
  { title: "CSS", logo: css },
  { title: "Express", logo: express },
  { title: "HTML", logo: html },
  { title: "JavaScript", logo: javascript },
  { title: "Firebase", logo: firebase },
  { title: "MongoDB", logo: mongodb },
  { title: "Node.js", logo: node },
  { title: "React", logo: react },
  { title: "Spline", logo: spline },
  { title: "Tailwind", logo: tailwind },
  { title: "Vite", logo: vite },
];



export const certifications = [
  {
    group: "Frontend & UI",
    items: [
      "React.js (Hooks, Components, State Management)",
      "Tailwind CSS & Responsive Design",
      "Clean UI Layouts & Micro Interactions",
      "Reusable Components & Design Systems",
      "Basic Framer Motion Animations"
    ],
    speed:0.5,
    direction:"forward"
  },
  {
    group: "Development & Logic",
    items: [
      "JavaScript (ES6+)",
      "REST API Integration",
      "Data Flow Understanding (Frontend ↔ Backend)",
      "Basic Node.js & Express",
      "Debugging & Performance Fixes"
    ],
    speed:0.8,
    direction:"backward"
  },
  {
    group: "Workflow & Mindset",
    items: [
      "Git & GitHub Version Control",
      "Problem-Solving First Approach",
      "Detail-Oriented UI Thinking",
      "Learning by Building Projects",
      "Comfortable with Breaking & Fixing Code"
    ],
    speed:1,
    direction:"forward"
  },
];


export const projects = [
  {
    title: "BidFlare",
    description:
      "A bidding-based web platform where users can explore listings, view details, and interact with a clean, responsive UI. Focused heavily on frontend structure, reusable components, and smooth user flow.",
    img: project1,
    stack: [
      { title: "React", img: react },
      { title: "Tailwind", img: tailwind },
      { title: "JavaScript", img: javascript },
    ],
    url:"https://final-year-project-rose-psi.vercel.app/",
  },

  {
    title: "Amrutam",
    description:
      "A modern healthcare-focused website redesign with emphasis on layout, spacing, and visual hierarchy. Built to improve readability, responsiveness, and overall user experience.",
    img: project2,
    stack: [
      { title: "React", img: react },
      { title: "Tailwind", img: tailwind },
      { title: "JavaScript", img: javascript },
    ],
     url:"https://amrutam-liard.vercel.app/",
  },

  {
    title: "Movie Explorer",
    description:
      "A movie discovery app that fetches and displays movie data dynamically. Includes reusable cards, API integration, and state-based rendering for a smooth browsing experience.",
    img: project3,
    stack: [
      { title: "html", img: html },
      { title: "css", img: css },
      { title: "JavaScript", img: javascript },
    ],
    url:"https://moviereviewshobh.netlify.app/",
  },
]

export const socials = [
  {
    title: "GitHub",
    icon: github,
    url: "https://github.com/ShobxVenkat",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/shobhittiwari108",
  },
  {
    title: "WhatsApp",
    icon: whatsapp,
    url: "https://wa.me/918081125652",
  },
]