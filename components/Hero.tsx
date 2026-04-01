import React from 'react';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton  from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';


const Hero = () => {
  return (
    <div className='pb-16 pt-32'>
        <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
          <Spotlight className='-top-10 -left-full h-[80] w-[50vw]' fill='purple'/>
          <Spotlight className='-top-28 -left-80 h-[80vh] w-[50vw]' fill='blue'/>
            </div>;
    
            <div className="h-screen w-full dark:bg-black-100 bg-white  
            dark:bg-grid-white/[0.05] bg-grid-black/[0.2]
             flex items-center justify-center absolute top-0 left-0">

        <div className="absolute pointer-events-none inset-0 flex 
        items-center justify-center dark:bg-black-100 bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
       </div>

        <div className='flex justify-center relative my-16 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-4'>

            <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Frontend Engineer focused on building clean, scalable, and user-friendly applications using React and TypeScript.'
            />

          <p className='text-center text-bold md:tracking-wider text-sm'>
            Hi, I&apos;m Oluwapelumi, a Frontend Engineer and I&apos;ve worked on real product features including subscription systems, payment integration, and user-focused platforms.
             I care about building products that are not just functional, but actually useful.
          </p>
          <a href="#about">
            <MagicButton 
              title="View Projects" 
              icon={<FaLocationArrow />}
              position='right'
              />
          </a>

          </div>

        </div>
      
              </div>
        
  )
}

export default Hero
