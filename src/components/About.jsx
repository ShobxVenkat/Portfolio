import { AccordionItem } from "@radix-ui/react-accordion";
import Captions from "./Captions";
import CaptionSplit from "./CaptionSplit";
import { Accordion, AccordionContent, AccordionTrigger } from "@/components/ui/Accordion";
import { Carousel , CarouselContent , CarouselItem} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll";
import { stack } from "@/lib/misc";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      data-index={1}
      className="page layout px-0 xl:py-12 min-h-screen flex-col overflow-x-hidden"
      id="about"
    >
      <div className="flex gap-12 flex-col xl:flex-row layout-padding ">
        <div>
           < CaptionSplit txt1="About" txt2={"Me"} className={"justify-start"} />
           <AboutAccordion />
        </div>
        <div className=" hidden md:flex flex-col flex-1"> 
            <Captions txt="FAQ" />
        <FAQ />
        </div>
         <div className="flex flex-col flex-1"> 
            <Captions txt="Education" />
        <Education />
        </div>
      </div>
      <div className="relative fade-edges mt-auto -skew-4 border-t border-b py-8 px-4 border-muted overflow-auto flex gap-12 xl:gap-20 justify-start ">
    <Carousel opts={{
        align:"start",
        loop:true,
    }}
    plugins={[
        AutoScroll({
            speed:1,
            stopOnInteraction:false,
            stopOnMouseEnter:true,
        })
    ]}
    > 
    <CarouselContent> 
        {
            stack.map(it => (
                <CarouselItem key={it.title} className="flex gap-2 items-center justify-center basis-auto px-4 md:px-12" >
                 <motion.img className="h-10 md:h-14 xl:h-16 scale-[1.4]" src={it.logo}
                 initial={{
                    opacity:0,
                    translateX:-10,
                 }} 
                 animate={{
                    opacity:1,
                    translateX:0,
                    transition:{
                        duration:1,
                        delay:1.3,
                    }
                 }}
                 />
                 <Captions txt={it.title} />
                </CarouselItem>
            ))
        }
    </CarouselContent>
    
    </Carousel>
      </div>




      <div className="backdrop-blur-2xl border-t border-b border-muted grid grid-cols-2 md:grid-cols-4 xl:gap-0 layout-padding skew-4">
    <Card>
        <Captions txt={"99+"} classname={"text-6xl"} />
        <p>open source Contribution</p>
    </Card>

     <Card>
        <Captions txt={"99+"} classname={"text-6xl"} />
        <p>Certifications</p>
    </Card>

     <Card>
        <Captions txt={"99+"} classname={"text-6xl"} />
        <p>Complted coding challanges</p>
    </Card>
     <Card>
        <Captions txt={"99+"} classname={"text-6xl"} />
        <p>Technical blog</p>
    </Card>
      </div>
    </div>
  );
};

export default About;


function AboutAccordion() {
    return (
        <div className="relative z-10 flex flex-col flex-1 ">
           <Accordion type="multiple"> 

       <AccordionItem value="item-1">
  <AccordionTrigger>The Plot Twist</AccordionTrigger>
  <AccordionContent>
    I didn’t start coding because it was “trendy.” I started because I liked fixing things that felt off. 
    One small layout bug led to another, and before I knew it, I was deep into React, breaking stuff and rebuilding it better. 
    That curiosity stuck.
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-2">
  <AccordionTrigger>My Superpower</AccordionTrigger>
  <AccordionContent>
    I notice details most people skip — spacing, flow, tiny interactions. 
    If something feels slightly annoying, I’ll find it and fix it. 
    Not magic, just patience and an unhealthy obsession with clean UI.
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-3">
  <AccordionTrigger>Why I code</AccordionTrigger>
  <AccordionContent>
    Coding gives me control. Ideas in my head don’t stay stuck there — they become real screens people can use. 
    Frontend lets me mix logic with creativity, and that balance keeps me hooked.
  </AccordionContent>
</AccordionItem>

        

           </Accordion>


             
        </div>
    )
}


function FAQ() {
  return (
    <div className="relative z-10 flex flex-col flex-1">
      <Accordion type="multiple">

        <AccordionItem value="faq-1">
          <AccordionTrigger>What tech stack do you use?</AccordionTrigger>
          <AccordionContent>
            Mostly React, Tailwind CSS, and JavaScript. I’m comfortable with REST APIs and Git.
            Backend-wise, I know Node and Express enough to not panic when things break.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-2">
          <AccordionTrigger>Are you frontend-only?</AccordionTrigger>
          <AccordionContent>
            Frontend is my strength, not my limitation.
            I can work with backend APIs, understand data flow, and build full features end to end.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-3">
          <AccordionTrigger>Do you prefer design or logic?</AccordionTrigger>
          <AccordionContent>
            Both. Design pulls users in, logic keeps them there.
            I care about how things look, but I care more about how they feel when used.
          </AccordionContent>
        </AccordionItem>

       

      </Accordion>
    </div>
  );
}

function Education() {
  return (
    <div className="flex flex-col flex-1">
      <Accordion type="multiple">

        <AccordionItem value="item-1">
          <AccordionTrigger>B.Tech in Computer Science</AccordionTrigger>
          <AccordionContent>
            Graduated with a focus on core computer science fundamentals.
            Spent more time building real projects and understanding how things work
            than mugging up theory.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Frontend Development</AccordionTrigger>
          <AccordionContent>
            Strong hands-on experience with React, JavaScript, and Tailwind CSS.
            Learned by shipping UIs, fixing broken layouts, and refining user experience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Continuous Learning</AccordionTrigger>
          <AccordionContent>
            Regularly upskilling through documentation, projects, and real debugging.
            Comfortable picking up new tools when the problem demands it.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
}


function Card({ children }){
    return(
        <div className="flex flex-col flex-1"> {children}</div>
    )
}


