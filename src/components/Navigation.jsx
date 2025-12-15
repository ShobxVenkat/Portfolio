import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/misc";
import clsx from "clsx";

const Navigation = ({ navAngle, setNavAngle, navOpen, setNavOpen, profileOpen }) => {


  useEffect(() => {
  if (profileOpen) {
    setNavOpen(false);
  }
}, [profileOpen]);


  useEffect(() => {
    const nav = document.querySelector("nav");
    nav.style.rotate = `${(360 / links.length) * navAngle}deg`;
  }, [navAngle]);

  function handleLink(index) {
    if (typeof setNavAngle === "function") setNavAngle(index);
  }

  const isActive = (i) =>
    i === navAngle || i === navAngle + 1 || i === navAngle - 1;

  return (
    <motion.nav
      className="hidden md:flex fixed top-0 translate-y-[-50%] size-20 bg-background rounded-full items-center justify-center
                 after:absolute after:content-[''] after:h-full after:w-full after:bg-inherit after:rounded-full after:scale-95
                 transition-transform duration-1000 z-50 border border-amber-100/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
   <motion.div
  role="button"
  tabIndex={0}
  onClick={() => setNavOpen((p) => !p)}
  onKeyDown={(e) =>
    (e.key === "Enter" || e.key === " ") && setNavOpen((p) => !p)
  }
  className="absolute aspect-square rounded-full border-2 border-black/50 z-50 cursor-grab active:cursor-grabbing flex items-center justify-center text-[10px] tracking-widest uppercase text-muted-foreground select-none"
  initial={{ height: "100%" }}
  animate={
    navOpen
      ? { height: "200%" }
      : { height: "100%", transition: { duration: 0.5 } }
  }
>
  <span className="translate-y-[8px] block">
     {navOpen ? "": "Click Me"}
  </span>
  
</motion.div>

{
  links.map((link, index) => (
    <button key={link.href} 
    style={{"--r": index}}
    className={clsx("nav-icons absolute size-14 sm:size-16 rounded-full flex items-center justify-center border border-muted-foreground bg-black/50 active:scale-95 opacity-25 overflow-hidden disabled:cursor-not-allowed", 
      navOpen && " reveal z-50",
      {
        "border-2 border-[#b700ff]!": index == navAngle
      },
      (index == navAngle || index == navAngle + 1 || index == navAngle -1) && "opacity-100 cursor-pointer pointer-events-auto"
    )}
    disabled ={
      !(index == navAngle || index == navAngle + 1 || index == navAngle -1)
    }
    >
     <a
  onClick={() => handleLink(index)}
  href={link.href}
  className="h-full w-full flex items-center justify-center"
  title={link.title}
>
  <link.Icon />
</a>

    </button>
  ))
}
      
    </motion.nav>
  );
};

export default Navigation;
