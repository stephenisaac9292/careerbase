'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import ThemeToggler from '@/components/Helper/ThemeToggler'


const ResponsiveNav = () => {

  const [showNav, setShowNav] = useState(false)
  
  const openNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)
  return (
    <>
    {/* Navbar */}
   
      <Nav openNav={openNavHandler}/>
      <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </>
  )
}

export default ResponsiveNav

