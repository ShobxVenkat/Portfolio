import { motion } from "framer-motion";
import clsx from "clsx";
const HeroBG = ({hideContent}) => {
    const orbs = [1,2,3,4,5];
  return   <motion.div className="absolute w-full h-full top-0 left-0 flex items-center justify-center -z-20 opacity-5"
  initial={{
    scale: .7,
    rotate: 80,
  }}
  animate={{
    scale:1,
    opacity:0.5,
    rotate:0,
    transition:{
        duration:1.8,
    },
  }} >

    <motion.div 
    className="absolute h-75 sm:h-80 md:h-135 aspect-square border-b-2 border-t-2 border-white/15 rounded-full"
    initial={{
        scale:0.6,
        opacity:0,
    }}

    animate={{
        scale:1,
        opacity:1,
        transition:{
            duration: .6
        }
    }}>

    </motion.div>
            {
                orbs.map((orb, index) => (
                    <div key={index} className={clsx("orb reaveal rotate-180 sm:rotate-0 absolute bg-black/45 border border-white/10 size-24 sm:size-32 md:size-36 2xl:size-40 rounded-full transition-opacity duration-500",
                        hideContent && "opacity-0"
                    )}
                    style={{"--r" :index}}
                    
                    ></div>
                ))
            }
    
    </motion.div>
   
  
}

export default HeroBG