import React, { useState } from "react";
import { motion } from "framer-motion";

import profile from "@/assets/profile.jpg";

import clsx from "clsx";
import { stack } from "@/lib/misc";

const Profile = ({
  showMenu,
  setHideContent,
  profileOpen,
  setProfileOpen,
  navOpen,
  setNavOpen,
  restoreNav,
  setRestoreNav,
}) => {


  
function handleClick() {
  setProfileOpen((prev) => {
    if (!prev) {
      // profile OPEN ho raha hai
      setRestoreNav(navOpen); // nav pehle open tha ya nahi yaad rakho
      setNavOpen(false);      // nav band
    } else {
      // profile CLOSE ho raha hai
      if (restoreNav) {
        setNavOpen(true);     // nav wapas open
      }
    }
    return !prev;
  });

  setHideContent((p) => !p);
}

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      className="absolute flex items-center justify-center z-10 max-lg:w-full aspect-square max-lg:overflow-hidden"
    >
      <div
        className={clsx(
          "absolute flex items-center justify-center animate-spin paused w-full aspect-square",
          profileOpen
 && !showMenu  && "running"
        )}
      >
        {stack.slice(0, 8).map((stack, index) => (
          <div
            key={index}
            className={clsx(
              "orb absolute size-20 sm:size-32 md:size-36 2xl:size-40 bg-background/70 border border-theme rounded-full flex items-center justify-center overflow-hidden cursor-pointer active:scale-[1.09] transition-transform duration-1000",
              profileOpen
 && " reveal"
            )}
            style={{ "--r": `${index}` }}
            title={stack.title}
          > 
          <img className="stack_img h-full w-full rounded-full object-contain " src={stack.logo} alt="" /></div>
        ))}
      </div>

      <div className="relative size-40 sm:size-52 md:size-72 border-3 border-theme rounded-full overflow-hidden active:scale-[.96] transition-transform cursor-grab active:cursor-grabbing" onClick={handleClick}>
        <img src={profile} alt="" className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
};

export default Profile;
