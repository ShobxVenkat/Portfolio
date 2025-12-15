import clsx from "clsx";
import { delay, motion } from "framer-motion";

const CaptionSplit = ({txt1, txt2, classname}) => {
    return(
        <div className={clsx("flex text-5xl md:text-6xl lg:text-7xl font-cabinet italic items-center overflow-y-hidden transition-all duration-1000", classname)}>
            <motion.span
            initial={{
                translateY:"100%",
            }} 
            whileInView={{
                translateY:0,
                transition:{
                    duration:1,
                    delay:0.2,
                    ease: "easeOut",
                }
            }}

            viewport={{
                once:true,
            }
            } >     {txt1}
            </motion.span>

            <motion.hr 
               initial={{
                width:0,
            }} 
            whileInView={{
                width:100,
                transition:{
                    duration:0.8,
                    delay:1.8,
                }
            }}

            viewport={{
                once:true,
            }
            }/>

            <motion.span
            className="pr-3"
              initial={{
                translateY:"100%",
                opacity:0,
            }} 
            whileInView={{
                translateY:0,
                opacity:1,
                transition:{
                    duration:1.4,
                    delay:0.5,
                    ease: "easeOut",
                }
            }}

            viewport={{
                once:true,
            }
            } 
            
            >{txt2}</motion.span>
        </div>
    )
}

export default CaptionSplit;