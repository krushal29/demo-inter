"use client";
// Navbar.tsx
import Link from 'next/link'
import React from 'react';
import { CiSearch, CiUser } from 'react-icons/ci';
import { MdLightMode,MdDarkMode } from "react-icons/md";
import Image from 'next/image';

const Navbar = ({toggleDarkMode,isDarkMode}) => {
  return (
    <div className={`fixed top-8 left-0 w-full border-b ${isDarkMode?"bg-[#0f172a] text-white":"bg-white"} z-40`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/Logo.png" alt="Your Company Logo" width={65} height={40} />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className={`flex items-center space-x-10 font-semibold text-sm tracking-wider ${isDarkMode?'text-white':'text-gray-800'}`}>
            <li><Link href="#" className="hover:text-purple-600 transition-colors">HOME</Link></li>
            <li><Link href="#" className="hover:text-purple-600 transition-colors">SHOP</Link></li>
            <li><Link href="#" className="hover:text-purple-600 transition-colors">UPLOAD YOUR OWN</Link></li>
            <li><Link href="#" className="hover:text-purple-600 transition-colors">MATERIALS</Link></li>
            <li className="flex items-center space-x-2">
              <Link href="#" className="hover:text-purple-600 transition-colors">HOT NOW</Link>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">HOT</span>
            </li>
            <li>
              <Link href="#" aria-label="Special Offers">
              {isDarkMode?<MdDarkMode className="h-5 w-5 text-white transition-colors" onClick={toggleDarkMode}/>:<MdLightMode className="h-5 w-5 text-gray-700 hover:text-blue-500 transition-colors" onClick={toggleDarkMode}/>}
                
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className={`p-2.5 ${isDarkMode?"bg-[#565d6a]":"bg-gray-100"} rounded-full  transition-colors`} aria-label="Search">
            <CiSearch size={22} className={`${isDarkMode?"text-white":"text-gray-700"}`} />
          </button>
          <Link href="/account" aria-label="My Account">
            <CiUser size={28} className={`${isDarkMode?"text-white":"text-gray-700"} hover:text-purple-600 transition-colors`} />
          </Link>
          <button className={`${isDarkMode?"border-white text-white":"border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50"} border  rounded-full px-5 py-2 text-sm font-bold    transition-colors`}>
            £0.00
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
