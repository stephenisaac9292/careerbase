'use client'
import React, { useState } from 'react'
import Nav from './NavbarComponents/Nav'
import MobileNav from './NavbarComponents/MobileNav'
 


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

