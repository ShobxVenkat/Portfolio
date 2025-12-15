import React from "react";
import Captions from "./Captions";
import { certifications } from "@/lib/misc";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const Certifications = () => {
  return (
    <div
      data-index={2}
      id="stack"
      className="page relative flex flex-col justify-center w-full h-screen pb-4"
    >
      <Captions
        txt={"Certifications"}
        classname={"layout-padding flex justify-center mt-auto "}
      />
      <p className="text-white/50 px-2 text-center mx-auto">
        A showcase of Certifications acquired
      </p>

      {certifications.map((group) => (
        <div key={group.group} className="mb-auto">
          <div className="layout-padding">
            <span>~{group.group}</span>
          </div>
          <Carousel opts={{
            align:"start",
            loop:true,

          }}
          plugins={[
            AutoScroll({
                speed:group.speed,
                stopOnInteraction:false,
                direction:group.direction ? group.direction :"forward",
                startDelay:800,
            })

          ]} >
            <div className="fade-edges flex py-4 border-y border-muted justify-start whitespace-nowrap">
                <CarouselContent >
                    {
                        group.items.map(it =>(
                            <CarouselItem key={it} className="basis-auto px-4 md:px-12" >
                                <Captions txt={it} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </div>
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
