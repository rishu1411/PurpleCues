import React from 'react'
import Image from 'next/image'
import Hero1 from '../Assests/HeroSVG1.svg'
import Hero2 from '../Assests/HeroSVG2.svg'
import HeroForm from './HeroForm'

export default function Hero() {
  return (
      <div className='bg-HeroBg flex flex-col form:flex-row  gap-x-10 px-6 items-center '>
          <div className='flex flex-col items-end form:w-[50vw] '>
              <div className='mt-8'>
              <h3 className='text-2xl sm:text-[36px] mb-8 italic font-semibold leading-7 tracking-wide'>Explore your <span className='text-Text-Blue'>hobby</span>  or <span className='text-Purple'>passion</span></h3>
              <p className='text-[14px]  mb-4'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
              </p>
              <p className='text-[14px] hidden sm:block mb-4'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
              </div>
              <div className='form:flex md:w-[50%] xl:w-full  self-start hidden '>
                  <Image src={ Hero1} height={186} alt='Hero1'/>
                  <Image src={Hero2 } height={186}  alt='Hero2'/>
                  
              </div>
          </div>
          <div className='self-center w-full form:w-[50vw] sm:px-12 space-y-6 py-8'>
              <HeroForm/>
          </div>
              <div className='form:hidden w-[50%] xl:w-full  flex justify-center'>
                  <Image src={ Hero1} height={186} alt='Hero1'/>
                  <Image src={Hero2 } height={186}  alt='Hero2'/>
                  
              </div>
          
    </div>
  )
}
