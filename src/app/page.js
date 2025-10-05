"use client";
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'
import { useState } from 'react'

const Page = () => {
  const [isDarkMode,setIsDarkMode]=useState(false);

  const toggleDarkMode=()=>setIsDarkMode(!isDarkMode);
  return (
    <div className={`${isDarkMode?"bg-[#0f172a] text-white":"bg-white"}`}>
      <TopBar/>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      <HeroSection isDarkMode={isDarkMode}/>
    </div>
  )
}

export default Page