import React from 'react'
import Image from 'next/image'
import pic1 from '../Assests/Icons/FooterSVG1.svg'
import pic2 from '../Assests/Icons/FooterSVG2.svg'

export default function Hobbies() {
  return (
      <div className='bg-Light-Blue px-7 md:px-14 py-10 '>
          <h4 className='text-2xl mb-6 font-medium'>Your <span className='text-Purple'>Hobby</span>, Your <span className='text-Text-Blue'>Community...</span></h4>
          <button className='w-28 rounded-md py-1 bg-Purple text-white font-semibold'>Get Started</button>
          <div className='flex items-center justify-start mt-16'>
              <Image src={pic1} alt='pic' className='w-[50%]' />
              <Image src={pic2} alt='pic' className='w-[50%]'/>
          </div>
    </div>
  )
}
