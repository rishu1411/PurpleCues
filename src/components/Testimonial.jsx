import React from 'react'
import Image from 'next/image'
import quote from '../Assests/Icons/quote.svg'
import play from '../Assests/Icons/play_arrow_black.svg'
import profile from '../Assests/Icons/Profile1.svg'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Slider from '@mui/material/Slider';

export default function Testimonial() {
  return (
      <div className='sm:h-[572px] p-7  md:p-14 flex justify-center items-center'>
          <div className='flex flex-col items-center md:items-start p-4 md:p-8 bg-white gap-y-8 rounded-md'>
              <div className='flex items-center gap-x-4'>
                  <Image src={quote} alt='quote' />
                  <h4 className='font-semibold text-2xl'>Testimonials</h4>
              </div>
              <p className='text-base text-Text-Grey'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                  <div className='flex flex-col md:flex-row justify-center items-center gap-y-6 gap-x-4'>
              <div className='h-[100px] flex w-[300px] sm:w-[400px] form:w-[676px] lg:w-[776px]  gap-x-4 justify-center items-center p-4 bg-Purple order-2 md:order-1'>
                  <div className='bg-white p-3 rounded-full'><Image src={play} alt='play' /></div>
                  <Slider
        size="small"
        defaultValue={70}
        aria-label="Default"
                      valueLabelDisplay="auto"
                      color='primary'
                  /> <span className='text-white'>0:00</span>
                  <span className='text-white'><KeyboardVoiceIcon/></span>
                  <span className='text-white'><Image src={profile } height={80} alt=''/></span>
                  </div>
                  <div className='flex items-center gap-x-2 order-1 md:order-2'>
                      <Image src={profile} height={100} alt=''  />
                      <div className=''>
                          <h5 className='font-medium'>Shubha Nagarajan</h5>
                          <p className='text-Text-Blue text-xs'>Classical Dancer</p>
                      </div>
                  </div>
                 
                  </div>
          </div>
          
    </div>
  )
}
