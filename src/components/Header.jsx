import React from "react";
import { motion } from "framer-motion";
import { Menu, ArrowUpRight , X} from "lucide-react";
import clsx from "clsx";
import { links } from "@/lib/misc";

const Header = ({showMenu ,setShowMenu}) => {
  return (
    <motion.header className="flex fixed top-0 left-0 w-full h-14 justify-center items-center px-2 z-40 max-sm:bg-gradient-to-b from-black/50 to-transparent" 
    initial={{
        translateY: -10,
        opacity:0,
    }}  
    
    animate={{
        translateY:0,
        opacity:1,
    }}

    transition ={{
        delay:3,
        duration:.8,
        ease:"easeInOut", 
    }}>
       <div
  className={clsx(
    "inset-0 fixed z-20 backdrop-blur-2xl opacity-0 pointer-events-none transition-all duration-300",
    showMenu && "opacity-100 pointer-events-auto"
  )}
></div>




      {/* Mobile Navigation */}
      <div
  className={clsx(
    "fixed opacity-0 md:hidden flex flex-col inset-0 bg-black/50 transition-all duration-500 ease-in-out z-40",
    showMenu
      ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
      : "translate-y-1/4 scale-75 pointer-events-none"
  )}
>
 
        <div className="flex w-full justify-between items-center py-4 px-5">
            <div className="flex ">
                <a href="" className="border border-amber-100 px-2 py-0.5 pr-1 flex rounded-md items-center text-sm font-semibold text-amber-100 bg-black/50 backdrop:blur-md">
                    <span>v1</span>
                    <ArrowUpRight  size={20}/>
                </a>
            </div>
            <X onClick={() =>setShowMenu(false)} />
        </div>
            <ul className="flex flex-col gap-10 py-12 px-8 border-t border-b border-muted">
             {links.map((link,index)=>(
                <li key={link.href} className={clsx("text-4xl italic font-cabinet opcaity-60 flex items-center justify-between",
                    location.pathname.includes(link.href) && "opacity-100 text-purple-500 font-semibold"
                )}> 
                    <span className="text-sm">{`0${index +1}`}  </span>
                    <a href={link.href}>{link.title}</a>
                    </li>
             ))}
            </ul>
        
      </div>
    </motion.header>
    
  );
};

export default Header;
