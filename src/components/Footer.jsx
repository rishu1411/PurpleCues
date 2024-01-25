import React from 'react'
import Image from 'next/image'
import fb from '../Assests/Icons/facebook_icon 1.svg'
import twitter from '../Assests/Icons/twitter logo_icon 3.svg'
import Ig from '../Assests/Icons/instagram logo_icon 1.svg'
import Pin from '../Assests/Icons/pinterest logo_icon 1.svg'
import Gplus from '../Assests/Icons/google.svg'
import Yt from '../Assests/Icons/logo_youtube_icon 1.svg'
import telegram from '../Assests/Icons/logo_telegram_icon 1.svg'
import mail from '../Assests/Icons/mail.svg'

export default function Footer() {
    const lis = [fb,twitter,Ig,Pin,Gplus,Yt,telegram,mail]
    return (
      <>
      <div className='flex flex-col form:flex-row -items-start py-16 bg-white px-7 gap-y-6 gap-x-12 justify-between'>
          <ul>
              <li className='font-semibold mb-2'>Hobbycue</li>
              <li>About us</li>
              <li>Our Services</li>
              <li>Work With us</li>
              <li>FAQ</li>
              <li>Contact us</li>
          </ul>
          <ul>
              <li className='font-semibold mb-2'>How do I</li>
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Big Post</li>
              <li>Other Queries</li>
          </ul>
          <ul>
              <li className='font-semibold mb-2'>Quick Links</li>
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
          </ul>
          <div className='space-y-8'>
              <div className='space-y-2'>
                  <h5 className='font-semibold'>Social Media</h5>
                  <div className='flex gap-x-3'>
                  {
                      lis.map((item, key) => {
                          return (
                            <div className=' bg-gray-300 rounded-full p-2' key={key}>
                                <Image src={item} alt='icon'/>
                      
                            </div>
                              
                          )
                      })
                      }
                  </div>
                 
              </div>
              <div className='space-y-2'>
                  <h5 className='font-semibold'> Invite Friends</h5>
                  <div>
                      <input type="text" placeholder='Email' className='border-[1.5px] px-2 py-1 rounded-tl-md rounded-bl-md border-Purple' />
                      <button className='bg-Purple font-medium px-2 py-1 text-white border-[1.5px] rounded-tr-md rounded-br-md border-Purple'>Invite</button>
                  </div>
                  </div>
          </div>

            </div>
            <div className='bg-Grey-Hover border-t py-4'>
                <h5 className='font-medium text-center'>© Purple Cues Private Limited</h5>
              
          </div>
            </>
  )
}
