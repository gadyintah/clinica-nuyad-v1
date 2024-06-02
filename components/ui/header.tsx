'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

import ToothLogo from './tooth-logo'

import { NextPage } from 'next'
import Carousel from './carousel'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <ToothLogo />
          </div>
          <div className="shrink-0 mr-4">
            <Link href="#services" className="btn bg-transparent text-black">
              <span>Services</span>
            </Link>
          </div>
          <div className="shrink-0 mr-4">
            <Link href="#offices" className="btn bg-transparent text-black">
              <span>Offices</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end items-center">
              <li>
                {/* <div className="carousel rounded-box">
                  <div className="carousel-item">
                    <span className="font-medium text-black hover:text-gray-900 px-5 flex items-center transition duration-150 ease-in-out">        (0915-872-2655)</span>
                  </div>
                  <div className="carousel-item">
                    <span className="font-medium text-black hover:text-gray-900 px-5 flex transition duration-150 ease-in-out">(0915-872-2655)</span>
                  </div>
                  <div className="carousel-item">
                    <span className="font-medium text-black hover:text-gray-900 px-5 flex transition duration-150 ease-in-out">(0915-872-2655)</span>
                  </div>
                </div> */}

                <div className="flex justify-center items-center">
                  <Carousel />
                </div>


                {/* <span className="font-medium text-black hover:text-gray-900 px-5 flex items-center transition duration-150 ease-in-out">(0915-872-2655)
                </span>
                <span className="font-medium text-black hover:text-gray-900 px-5 flex transition duration-150 ease-in-out">(0915-872-2655)
                </span> */}
              </li>
              <li>
                <Link href="/booking" className="btn text-white rounded-full bg-sky-500 hover:bg-sky-700 shadow">
                  <span>Schedule Now</span>
                  <svg className="w-3 h-3 fill-current text-white shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li> 
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
