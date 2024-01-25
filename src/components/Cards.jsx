import React from 'react'

import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
export default function () {

    const lis = [
        {
        icon: <GroupsIcon/>,
        header: 'People',
        text: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
            btn: 'Connect',
            bColour: 'border-Purple',
            iconColor: 'text-Purple',
        color: 'group-hover:bg-Purple'
    },
    {
        icon: <LocationOnIcon/>,
        header: 'Place',
        text: 'Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.',
        btn: 'Meet up',
        bColour: 'border-Green',
        iconColor: 'text-Green',
        color: 'group-hover:bg-Green'
    },
    {
        icon: <ShoppingBasketIcon/>,
        header: 'Product',
        text: 'Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.',
        btn: 'Get it',
        bColour: 'border-pink-700',
        iconColor: 'text-pink-700',
        color: 'group-hover:bg-pink-700'
    },
    {
        icon: <EventAvailableIcon/>,
        header: 'Program',
        text: 'Find events, meetups and workshops related to your hobby.  Register or buy tickets online.',
        btn: 'Attend',
        bColour: 'border-Text-Blue',
        iconColor: 'text-Text-Blue',
        color: 'group-hover:bg-Text-Blue'
    },
        
    ]



  return (
      <div className='p-6 my-10'>
          
          <div className="grid grid-cols-1  md:grid-cols-2  grid-rows-1 md:grid-rows-2 gap-4  md:p-4">
              {
                  lis.map((item, key) => {
                      console.log(item.bColour)
                      return (
                        
                          <span className='group'>
                          <div className={`border-2 text-sk p-8 rounded-sm ${item.bColour} gap-y-4 flex flex-col items-center md:items-start  ${item.color}`} >
                              <div className='flex gap-x-2 items-center'>
                                  <span className={`text-2xl ${item.iconColor} group-hover:text-white`}>{item.icon}</span>
                                  <h4 className='font-semibold text-2xl group-hover:text-white'>{ item.header}</h4>
                              </div>
                              <p className='text-base min-h-[90px] group-hover:text-white'>{item.text}</p>
                              <button className='border-[1.5px]  text-Purple group-hover:border-white rounded-md w-[100%] group-hover:text-white border-Purple font-semibold py-1 md:w-24'>{ item.btn}</button>
                              </div>
                              </span>
                            
                      )
                  })
              }
          </div>
          
    </div>
  )
}
