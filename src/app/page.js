import Add from '@/components/Add'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Hobbies from '@/components/Hobbies'
import NavBar from '@/components/NavBar'
import Testimonial from '@/components/Testimonial'
import React from 'react'

export default function page() {
  return (
    <div className=''>
      <NavBar />
      <Hero />
      <Cards />
      <Add />
      <Testimonial />
      <Hobbies />
      <Footer/>
     
    </div>
  )
}
