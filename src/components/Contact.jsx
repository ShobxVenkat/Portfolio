import { easeInOut, motion } from "framer-motion";
import CaptionSplit from "./CaptionSplit";
import { socials } from "@/lib/misc";
import { Send } from "lucide-react";
import { useState, useRef } from "react";
const Contact = () => {
  const form = useRef();
  const [loading , setLoading] = useState(false);
  const [success , setSuccess] = useState(false);
  const sendEmail = () => {};  
  return (
    <div
      data-index={4}
      id="contact"
      className="page max-sm:pb-28 layout w-full min-h-screen items-center justify-center relative overflow-hidden border-2 border-b-0 border-violet rounded-tl-4xl rounded-tr-4xl z-10"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-grid-pattern opacity-100 rotate-12 scale-150"
          initial={{
            rotate: 180,
            opacity: 0,
          }}
          whileInView={{
            rotate: 0,
            opacity: 1,
            transition: {
              duration: 3,
              ease: "easeInOut",
            },
          }}
        >
          {" "}
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/60"></div>
      </div>
      <div className="relative my-auto w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8 p-4 lg:gap-0">
        <div className="space-y-12">
          <div>
            <CaptionSplit txt1={"Say"} txt2={"Hello"} />
            <motion.p
              className="mt-4 max-w-sm"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let&apos;s create something
              extraordinary togehter.
            </motion.p>
          </div>
          <motion.div
            className="flex gap-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
          >
            {socials.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                className="p-3 border border-muted rounded-xl hover:border-primary transition-all duration-300 bg-amber-100"
              >
                <img src={item.icon} alt={item.title} className="size-6" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.form
        ref={form}
          className="space-y-6"
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.5,
          }}
          onSubmit={sendEmail}
        >
          {
            ["name","email","message"].map((field) => (
              <div key={field} className="space-y-2">
                <label htmlFor={field} className="text-sm capitalize tracking-wider">{field}</label>
                {field === "message" ? (
                  <textarea required name="message" id="message" className="w-full bg-background border border-muted rounded-xl p-4 focus:border-primary outline-none transition-all duration-300 resize-none h-32"/>
                ) : ( 
                  <input type={field}
                  name={field}
                  placeholder={`Your ${field}`}
                  className="w-full bg-background border border-muted rounded-xl p-3 px-4 focus:border-primary outline-none transition-all duration-300"
                   />

                )}
              </div>
            ))
          }
          <motion.button type="submit" whileHover={{scale :1.02}}
          whileTap={{scale:0.98}}
          className="w-full bg-amber-100 text-primary-foreground py-3  md:py-4 rounded-xl font-medium flex justify-center gap-3"
          disabled={loading}
          > 
          {loading ? "Sending ..." : "Send Message"}
          <Send />
          </motion.button>

            {success && (
              <p className="text-green-500 text-center">
                Message sent Successfully!
              </p>
            )}


        </motion.form>
      </div>
      <div className="absolute bottom-0 left-0 flex items-center justify-center w-full border-t border-muted py-6 pb-4 px-8">
        <span>&copy; Shobhit Tiwari officials 2025</span>
      </div>
    </div>

    
  );
};

export default Contact;
