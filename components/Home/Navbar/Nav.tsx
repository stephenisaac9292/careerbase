import { NavLinks } from '@/constant/constant'
import React from 'react'
import { LuNetwork } from 'react-icons/lu'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import ScrollShadowWrapper from './NavbarCSR/ScrollShadowWrapper'
import { CgClose } from 'react-icons/cg'

type Props = {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <ScrollShadowWrapper>
    // Entire Navbar
    <div className='fixed top-0 w-full z-[10000] h-[12vh] bg-white transition-all duration-200'>
      {/* Upper Holder Div */}
        <div className="max-w-[1500px] w-[92%] mx-auto flex items-center justify-between h-full">

            {/* Logo + NavLinks (Left) */}
            <div className='flex items-center gap-x-14'>

            {/* Logo + Text */}
                <div className="flex items-center space-x-2">
                    <div className="flex flex-col w-10 h-10 bg-cyan-800 rounded-full items-center justify-center">
                    <LuNetwork className='w-5 h-5 text-white' />
                    </div>
                    <h1 className='font-bold hidden sm:block md:text-2xl text-cyan-800 '>
                    Altraa
                    </h1>
                </div>

                {/* Nav Links */}
                <div className="hidden lg:flex items-center space-x-7 whitespace-nowrap px-4">
                    {NavLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.url}
                        className='text-base hover:text-cyan-700 font-medium transition-all duration-200'
                        >
                        <p>{link.label}</p>
                    </Link>
                        ))}
                </div>

            </div>

            {/* Buttons + Burger (Right) */}
            <div className='flex items-center gap-x-5' >
                <button className='px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-300 transition-all duration-300'>
                    <p className='whitespace-nowrap'>Login / Signup</p>
                </button>

                <button className='hidden md:block px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-cyan-700 hover:bg-cyan-900 transition-all duration-300 text-white'>
                    <p className='whitespace-nowrap'>Job Post</p>
                </button>

            {/* Burger icon for mobile */}
                <HiBars3BottomRight onClick={openNav}className='lg:hidden w-8 h-8 text-black' />
            </div>

            

        </div>
    </div>
    </ScrollShadowWrapper>
  )
}

export default Nav
