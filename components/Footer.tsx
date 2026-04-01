
import React from 'react'
import Image from 'next/image'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'


const Footer = () => {
  return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5'
        id='contact'>

                <div className='flex flex-col items-center'>
                    <h1 className='heading lg:max-w-[45vw]'>
                       Interested in <span className='text-purple'>working together</span>?
                    </h1>
                    <p className='text-white-200 md:mt-10 my-5 text-center'> I’m open to opportunities where I can build real products, solve meaningful problems, and grow as an engineer.
                    </p>
                    <a href='mailto:ogunbajoesther@gmail.com'>
                    < MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position='right' 
                    />
                    </a>
                </div>

                <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                    <p className='md:text-base text-small md:font-normal'>Copyright ©2026 Oluwapelumi</p>
                    </div>

                    <div className='flex eitems-center md:gap-3 gap-6'>
                        {socialMedia.map((profile) => (
                            <a
                              key={profile.id}
                              href={profile.url}
                              target="_blank"
                              rel="noreferrer"
                              className='w-10 h-10 
                            cursor-pointer flex justify-center items-center backdrop-filter 
                            backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border border-black-300'
                            >
                                <Image src={profile.img} alt={`Social icon ${profile.id}`} width={20} height={20} />
                            </a>

                        ))}
                    </div>
             
        </footer>
  )
}

export default Footer
