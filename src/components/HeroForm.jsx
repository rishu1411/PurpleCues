'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import FB from '../Assests/Icons/FbBlue.svg'
import Google from '../Assests/Icons/Google-Colour.svg'
import Eye1 from '../Assests/Icons/Password.svg'
import LockIcon from '@mui/icons-material/Lock';
import Eye2 from "../Assests/Icons/Vector.svg"

export default function HeroForm() {
    const [val, setVal] = useState('Sign')
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    let type 
    val === 'Sign'? type = 'password': type = 'text'
  

  return (
  <>
          <div className='space-x-4 '>
                <button className={`text-Purple active:underline text-[20px] font-semibold  ${val === 'Sign' && 'underline'} underline-offset-8 `} onClick={()=> setVal('Sign')}>Sign In</button>
              <button className={`text-Purple active:underline text-[20px] font-semibold   ${val === 'Join' && 'underline'} underline-offset-8 `} onClick={() => setVal('Join')}>Join In</button>      
          </div>
          
            <div className='space-y-3 text-xs sm:text-base'>
              <button className='w-[100%] sm:w-[90%] border-[1.5px] border-Purple py-2 px-4 flex items-center rounded-md font-semibold'> <Image src={Google} alt='Google icon ' className='mr-[28%] form:mr-[15%] lg:mr-[28%] '  /> Continue with Google</button>
              <button className='w-[100%] sm:w-[90%] border-[1.5px] border-Purple py-2 px-4 flex items-center rounded-md font-semibold'> <Image src={FB} alt='Google icon ' className='mr-[28%] form:mr-[15%] lg:mr-[28%] '  /> Continue with Google</button>
            </div>
          
          <div className='flex items-center gap-x-1'>
              <div className='lg:w-[30%] w-[20%] h-[2px] bg-Grey-Light'></div>
              <span className='font-medium text-sm'>Or Continue with</span>
              <div className='lg:w-[30%] w-[20%] h-[2px] bg-Grey-Light'></div>
          </div>

          <div className='space-y-3'>
              <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-[100%] sm:w-[90%] outline-none bg-white px-4 py-2 rounded-md border text-Text-Grey' />
              <div className='relative'>
                  <input type="email" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-[100%] sm:w-[90%] outline-none bg-white px-4 py-2 rounded-md border text-Text-Grey' />
                  {
                      val === 'Sign'? <Image src={Eye1} alt='Eye-icon' className='absolute top-[15px] right-8 sm:right-20'/> :<Image src={Eye2} alt='Eye-icon' className='absolute top-[18px] right-8 sm:right-20'/>
                  }
                  
              </div>
              
              
              {
                  val === 'Sign'? <div className='flex  gap-y-2 text-xs items-center justify-between sm:text-sm'>
                  <label htmlFor="remember">
                      <input type="checkbox" id='remember' className='cursor-pointer' /> Remember me
                      </label>
                  <p className='space-x-1 flex items-center text-sm '><LockIcon className='text-gray-500' /> <span className='text-xs'>Forgot password?</span></p>
                  </div> : 
                      <>
                      <div className='flex justify-between items-center'>
                          <div className='flex gap-x-1'>
                              <div className='h-2 w-6 sm:w-16 border bg-white'></div>
                              <div className='h-2 w-6 sm:w-16 border bg-white'></div>
                              <div className='h-2 w-6 sm:w-16 border bg-white'></div>
                          </div>
                          <p className='text-sm text-Text-Grey'>Password Strength</p>
                          </div>
                          <p className='text-xs  text-Text-Grey'>By continuing, you agree to our <span className='text-black'>Terms of Service</span> and <span className='text-black'>Privacy Policy</span> </p>
                          </>
              }
              {
                  val === 'Sign' ? <button className='w-[90%] border-2 border-black font-semibold text-black py-2 rounded-full '>Continue</button> :
                      <button className='bg-Purple text-white font-semibold w-[100%] sm:w-[90%] py-2 rounded-full'>Agree and Continue</button>
              }
          </div>
          </>
       

          
          

  )
}
