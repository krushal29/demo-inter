// TopBar.tsx
import Link from 'next/link'
import React from 'react'

const TopBar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-[#0f0f11] font-sans">
      {/* Black Strip */}
      <div className="bg-black text-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-6 h-8 flex justify-between items-center">
          <p className="font-light text-sm">Welcome to our store</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-gray-300 dark:hover:text-white transition-colors text-sm">
              Faqs
            </Link>
            <Link href="#" className="hover:text-gray-300 dark:hover:text-white transition-colors text-sm">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopBar
