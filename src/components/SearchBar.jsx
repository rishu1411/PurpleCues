'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SearchIcon from '../Assests/Icons/search 1.svg'


export default function SearchBar() {
    const [value, setValue] = useState()
    
  return (
      <div className='larger:flex  hidden'>
          <input type="text" placeholder='Search here...' value={value} onChange={(e) => { setValue(e.target.value) }} className='w-[240px] max-w-[240px] bg-Grey-Hover outline-none h-[35px] px-3 border border-Grey-Light rounded-tl-[8px] rounded-bl-[8px] text-[12px] leading-4 text-Text-Grey border-r-none ' />
          <button className='bg-Purple flex items-center w-[40px] justify-center rounded-tr-[8px] rounded-br-[8px] border border-Purple'><Image src={SearchIcon } alt='search-icon'/></button>
          
    </div>
  )
}
