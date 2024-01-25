import React from 'react'
import logo from '@/Assests/Icons/HobbyCue Logo v2 2.svg'
import Explore from '@/Assests/Icons/Explore.svg'
import Hobbies from '@/Assests/Icons/Hobbies.svg'
import arrow from '@/Assests/Icons/arrow 1.svg'
import BookMark from '@/Assests/Icons/bookmark.svg'
import Notification from '@/Assests/Icons/notifications.svg'
import Cart from '@/Assests/Icons/Product 3.svg'
import Image from 'next/image'
import SearchBar from './SearchBar'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

function DropDown({ className,display}) {
  return (
    <div className={className}>
      <ul className={`text-[#6D747A] text-[14px] font-normal leading-[18px]  tracking-[0.07px] ${display}`}>
        <li className='border-b border-Grey-Light p-2 hover:bg-gray-200'>People - Community</li>
        <li className='border-b border-Grey-Light p-2 hover:bg-gray-200'>Places - Venues</li>
        <li className='border-b border-Grey-Light p-2 hover:bg-gray-200'>Programs - Events</li>
        <li className='border-b border-Grey-Light p-2 hover:bg-gray-200'>Products - Store</li>
        <li className='border-b border-Grey-Light p-2 hover:bg-gray-200'>Blogs</li>
      </ul>
    </div>
  )
}



export default function NavBar() {
  return (
      <div className='sticky top-0 z-10'>
      <nav className=' bg-white navShadow px-4 md:px-10 lg:px-[80px] flex gap-x-16 justify-between shadow-lg '>
        <ul className='flex items-center justify-center gap-x-10 h-[60px] '>
          <li><Image src={logo} alt='logo' height={40} className='h-[40px]  w-[80px] md:w-[152px]' /></li>
          <li className=''><SearchBar/></li>
        </ul>

        <ul className='hidden semi-md:flex items-center justify-center gap-x-2 lg:gap-x-4 h-[60px] '>
          <li className='block larger:hidden'><SearchIcon className='text-Purple'/></li>
          
          <li className=' text-[14px] font-semibold cursor-pointer h-[60px] flex items-center  gap-x-1 relative group group-hover:flex'>
            <Image src={Explore} alt='explore-icon' />
            <span>Explore</span>
            <Image src={arrow} alt='arrow-down-icon' />
              <DropDown className='bg-HeroBg absolute group-hover:block hidden top-14 w-44 z-10 border shadow-md' />
          </li>
           

          <li className='flex relative text-[14px] font-semibold items-center cursor-pointer gap-x-1 group group-hover:flex h-[60px]'>
            <Image src={Hobbies} alt='explore-icon' />
            <span>Hobbies</span>
              <Image src={arrow} alt='arrow-down-icon' />
              <DropDown className='bg-HeroBg absolute group-hover:block hidden top-14 w-44 z-10 border shadow-md' />
            </li>
          <li className='cursor-pointer'><Image src={BookMark } alt='bookmark'/></li>
          <li className='cursor-pointer'><Image src={Notification } alt='bookmark'/></li>
          <li className='cursor-pointer'><Image src={Cart} alt='bookmark' /></li>
          <li className='cursor-pointer'><button className='text-Purple font-semibold border w-20 lg:w-28 rounded-md py-1 px-2 border-Purple'>Sign In</button></li>

        </ul>

        <ul className='flex items-center semi-md:hidden gap-x-3 pr-4'>
          <li className='cursor-pointer'><SearchIcon className='text-Purple'/></li>
          <li className='cursor-pointer'><NotificationsIcon className='text-Purple'/></li>
          <li className='cursor-pointer'><MenuIcon className='text-Purple'/></li>
        </ul>

       
      </nav>
      </div>
  )
}
