// Navbar.tsx
"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiSearch, CiUser } from 'react-icons/ci';
import { BsSnow } from 'react-icons/bs';
import Image from 'next/image';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storageKey = 'theme';
    const stored = localStorage.getItem(storageKey);
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const systemDark = mql.matches;
    const initial = stored === 'light' || stored === 'dark' ? stored : (systemDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(next);
    }
    try { localStorage.setItem('theme', next); } catch (_) {}
  };

  return (
    <div className="fixed top-8 left-0 w-full border-b bg-white dark:bg-[#0f0f11] z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/logo.png" alt="Your Company Logo" width={65} height={40} />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center space-x-10 font-semibold text-sm tracking-wider text-gray-800 dark:text-white">
            <li><Link href="#" className="hover:text-purple-600 dark:hover:text-white transition-colors">HOME</Link></li>
            <li><Link href="#" className="hover:text-purple-600 dark:hover:text-white transition-colors">SHOP</Link></li>
            <li><Link href="#" className="hover:text-purple-600 dark:hover:text-white transition-colors">UPLOAD YOUR OWN</Link></li>
            <li><Link href="#" className="hover:text-purple-600 dark:hover:text-white transition-colors">MATERIALS</Link></li>
            <li className="flex items-center space-x-2">
              <Link href="#" className="hover:text-purple-600 dark:hover:text-white transition-colors">HOT NOW</Link>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">HOT</span>
            </li>
            <li>
              <Link href="#" aria-label="Special Offers">
                <BsSnow className="h-5 w-5 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-white transition-colors" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2.5 bg-gray-100 dark:bg-[#1b1b1e] rounded-full hover:bg-gray-200 dark:hover:bg-[#232326] transition-colors" aria-label="Search">
            <CiSearch size={22} className="text-gray-700 dark:text-white" />
          </button>
          <Link href="/account" aria-label="My Account">
            <CiUser size={28} className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-white transition-colors" />
          </Link>
          <button className="border border-gray-300 dark:border-gray-700 rounded-full px-5 py-2 text-sm font-bold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-[#1b1b1e] hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            £0.00
          </button>
          <button onClick={toggleTheme} className="ml-2 p-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-xs font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-[#1b1b1e] transition-colors" aria-label="Toggle theme">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
