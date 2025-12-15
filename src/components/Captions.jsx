import clsx from "clsx"
import { motion } from "framer-motion"

const Captions = ({txt , classname}) => {
  return <div className={clsx(
    "flex text-4xl md:text-6xl lg:text-7xl font-cabinet italic items-center overflow-y-hidden min-w-fit pr-3 transition-all duration-1000",
    classname
  )}>
   
   <motion.span
   initial={{
    translateY: "100%",
   }}

   whileInView={{
    translateY:0,
    transition:{
        duration:1,
        delay:0.2,
        ease:"easeOut"
    },
   }}
   viewport={{
    once:true,
   }}
   
   >{txt}</motion.span>
    </div>
  
}

export default Captions