import { easeOut, motion } from "framer-motion";
import clsx from "clsx";
import HeroBG from "./HeroBG";

const Hero = ({ hideContent }) => {
  return (
    <div className="layout py-20 pb-16 md:pb-12 lg:pb-12 xl:pb-4 2xl:pb-14 md:py-28 xl:py-20 flex-1 flex flex-col items-center justify-between overflow-hidden">
      <HeroBG hideContent={hideContent} />
      <div
        className={clsx(
          "w-full justify-end md:justify-start text-4xl md:text-6xl lg:text-7xl mr-auto font-cabinet italic flex items-center overflow-hidden transition-all duration-1000",
          hideContent &&
            "opacity-15 translate-x-[-60%] md:translate-x-[-25] lg:translate-x-[-25%] 2xl:translate-x-[-20%]"
        )}
      >
        <motion.span
          initial={{
            translateY: "100%",
          }}
          animate={{
            translateY: 0,
            transition: {
              duration: 1,
              delay: 0.8,
              ease: "easeOut",
            },
          }} >  Hello   </motion.span>

          <motion.hr initial={{
            width:0,
          }}
          animate={{
            width:100,
            transition : {
              duration : 0.8,
              delay: 2.1,
            }
          }} />

          
      <motion.span
      className="pr-3"
          initial={{
            translateY: "100%",
            opacity:0,
          }}
          animate={{
            translateY: 0,
            opacity:1,
            transition: {
              duration: 1.4,
              delay: 1,
              ease: "easeOut",
            },
          }} >  World!!   </motion.span>

      </div>

      <div className={clsx("relative w-full text-4xl md:text-6xl lg:text-7xl  font-cabinet italic flex flex-wrap justify-start md:justify-end items-center transition-all duration-1000 ",
        hideContent && "opacity-15 translate-x-[60%] md:translate-x-[45%] lg:translate-x-[40%] 2xl:translate-x-[20%]"
      )}>
        <motion.span initial={{
          translateY:"100%",
          opcaity:0,
        }}
        animate={{
          translateY:0,
          opacity:1,
          transition:{
            duration:1,
            delay:.8,
            ease:"easeOut"
          }
        }}
        >I&apos;m</motion.span>

           <motion.hr initial={{
            width:0,
          }}
          animate={{
            width:100,
            transition : {
              duration : 0.8,
              delay: 2.1,
            }
          }} />

                 
      <motion.h2
      className="pr-2"
          initial={{
            translateY: "100%",
            opacity:0,
          }}
          animate={{
            translateY: 0,
            opacity:1,
            transition: {
              duration: 1.4,
              delay: 1,
              ease: "easeOut",
            },
          }} >  Shobhit   </motion.h2>




            <motion.h2
      className=""
          initial={{
            translateY: "100%",
            opacity:0,
          }}
          animate={{
            translateY: 0,
            opacity:1,
            transition: {
              duration: 1.4,
              delay: 2.5,
              ease: "easeOut",
            },
          }} >  Tiwari
          
          <motion.div className="absolute max-sm:top-[calc(100%+15px)] sm:bottom-[calc(100%+20px)] items-center  text-xl max-xs:left-0 xs:right-0 whitespace-nowrap flex " 
          initial={{
            translateY:"60%",
            opacity:0,
          }}
          animate={{
            translateY:0,
            opacity:1,
            transition:{
              duration:1,
              delay:3,
              ease:"easeOut"
            }
          }}
          >
            Full-Stack &nbsp;
           <code className="text-sm text-amber-200 border tracking-tighter pt-1 px-2 rounded-md opacity-50"> Ctrl C</code> 
           <code className="text-sm text-amber-200 border border-r-0 tracking-tighter pt-1 px-2 rounded-tl-md rounded-bl-md ml-2 opacity-50"> Ctrl</code> 
           &nbsp; De
           <code className="text-sm text-amber-200 border tracking-tighter pt-1 pl-1 pr-2 border-l-0 rounded-tr-md rounded-br-md mx-1 opacity-80">V</code>
           eloper
          </motion.div>
          
             </motion.h2>

      </div>
    </div>
  );
};

export default Hero;
