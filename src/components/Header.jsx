import React from "react";
import { motion } from "framer-motion";
import { Menu, ArrowUpRight, X } from "lucide-react";
import clsx from "clsx";
import { links } from "@/lib/misc";

const Header = ({ showMenu, setShowMenu }) => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full h-14 flex items-center justify-end px-4 z-40 max-sm:bg-gradient-to-b from-black/50 to-transparent"
      initial={{ translateY: -10, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
    >
      
     

      {/* Mobile Menu Button */}
      <Menu
        className="md:hidden cursor-pointer"
        onClick={() => setShowMenu(true)}
      />

      {/* Backdrop */}
      <div
        onClick={() => setShowMenu(false)}
        className={clsx(
          "fixed inset-0 z-20 backdrop-blur-2xl transition-all duration-300",
          showMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      />

      {/* Mobile Navigation */}
      <div
        className={clsx(
          "fixed md:hidden inset-0 z-40 flex flex-col bg-black/70 transition-all duration-500 ease-in-out",
          showMenu
            ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
            : "translate-y-1/4 scale-95 opacity-0 pointer-events-none"
        )}
      >
        {/* Top bar */}
        <div className="flex justify-end items-center py-4 px-5">
          <X
            className="cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-10 py-12 px-8 border-t border-b border-muted">
          {links.map((link, index) => (
            <li
              key={link.href}
              className={clsx(
                "text-4xl italic font-cabinet opacity-60 flex items-center justify-between",
                typeof window !== "undefined" &&
                  window.location.pathname.includes(link.href) &&
                  "opacity-100 text-purple-500 font-semibold"
              )}
            >
              <span className="text-sm">{`0${index + 1}`}</span>
              <a
                href={link.href}
                onClick={() => setShowMenu(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  );
};

export default Header;
