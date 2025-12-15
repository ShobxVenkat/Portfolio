import React from 'react'
import Captions from './Captions'
import CaptionSplit from './CaptionSplit'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { projects } from '@/lib/misc'

import { SquareArrowOutUpRight } from 'lucide-react';
const Projects = () => {
  return(
    <div 
      data-index={3}
      id='projects'
      className='page relative z-10 flex h-screen flex-col py-12 pb-4'
    >

    <div className="layout-x-padding pb-3 border-b border-muted">
      <Captions txt={"collection of "} classname={"lg:text-6xl"} />
      <CaptionSplit txt1={"recent"} txt2={"Project"} />
    </div>
      <Carousel className="flex flex-1">
        <CarouselContent className="flex h-full gap-8 xl:gap-10 p-2 py-3 2xl:px-24 mx-2">
          {
            projects.map(project => (
              <CarouselItem key={project.title} className="basis-full md:basis-[95%] lg:basis-[60%] border border-muted-foreground/20 relative h-full flex flex-col bg-accent rounded-2xl lg:rounded-3xl overflow-hidden p-1 xl:p-2 hover:scale-[1.009] transition-transform cursor-grab active:cursor-grabbing">
                <div className='relative w-full h-full after:absolute after:-inset-0 after:block after:bg-gradient-to-tr after:from-black after:to-transparent after:rounded-2xl'>
                  <img src={project.img} alt="" className='relative w-full h-full rounded-xl object-cover border border-muted-foreground/20' />
                </div> 

                <div className='absolute bottom-0 left-0 flex flex-col xl:gap-3 p-5 md:p-8 '>
                  <h3 className='text-4xl xl:text-6xl font-semibold bg-gradient-to-tr from-white/80 to-gray-800 bg-clip-text text-transparent'>
                    {project.title}
                  </h3>
                  <span>{project.description}</span>
                  <div className='flex flex-wrap gap-2 mt-3'>
                    {
                      project.stack.map((tech, index) =>(
                        <div key={index} className='p-2 pr-3 backdrop-blur-2xl border border-muted-foreground/30 rounded-md flex items-center gap-1 '>
                          <img src={tech.img} alt="" className='size-6 object-contain rounded-full' />
                          {tech.title}  </div>
                      ) )
                      
                    }
                    <a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 pr-3 backdrop-blur-2xl border border-muted-foreground/30 rounded-md flex items-center gap-1 cursor-pointer"
>
  <SquareArrowOutUpRight className="size-6 object-contain rounded-full" />
  <span>Live Link</span>
</a>

                  </div>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>


      <div className='layout-x-padding flex justify-around md:justify-end gap-2 md:gap-16 border-muted max-sm:px-2 '>
          <div className='flex flex-col items-center'>
            <Captions txt={"99+"} classname={"font-semibold"} />
            <span className='text-sm'>Github Repo</span>
          </div>
          <div className='flex flex-col items-center'>
            <Captions txt={"99+"} classname={"font-semibold"} />
            <span className='text-sm'>Deployments</span>
          </div>
          <div className='flex flex-col items-center'>
            <Captions txt={"99+"} classname={"font-semibold"} />
            <span className='text-sm'>API Integration</span>
          </div>
      </div>
    </div>
  )

}

export default Projects


// 2hour 25 min se dekho