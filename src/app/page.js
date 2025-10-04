import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'
import React from 'react'

const page = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default page