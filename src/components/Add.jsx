import React from 'react'
import AddIcon from '../Assests/Icons/Add.svg'
import Image from 'next/image'

export default function Add() {
  return (
      <div className='bg-Light-Blue h-[484px] p-7 md:p-14 flex justify-center items-center'>
          <div className='bg-white space-y-4 p-4 md:p-8 flex flex-col items-center md:items-start'>
              <div className='flex gap-x-2 items-center'>
                  <Image src={AddIcon} alt='' />
                  <h4 className='font-semibold text-2xl'>Add Your Own</h4>
              </div>
              <p className='text-base'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
              <button className='font-medium text-Purple border border-Purple w-28 rounded-md py-1'>Add New</button>
          </div>
          
      </div>
  )
}
