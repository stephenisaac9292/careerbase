import React from 'react'
import { NavLinks } from '@/components/Home/Navbar/NavConstants/navConstant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({showNav, closeNav}:MobileNavProps) => {

    const navOpen = showNav ? 'translate-x-0' : 'translate-x-full'
  return (
  <>
    {/* Overlay */}
    <div  onClick={closeNav} className={`fixed dark:bg-neutral-950 ${navOpen} inset-0 transform transition-all right-0 duration-500 z-[100002] bg-black opacity-80 w-full h-screen`}>
    </div>
    {/* Mobile Nav link */}
    <div className={`flex flex-col fixed text-white dark:text-black dark:bg-white ${navOpen} h-full justify-center transform transition-all duration-500 delay-300 w-[45%] sm:w-[50%] bg-cyan-800 space-y-6 z-[1000050] right-0 `}>
      {NavLinks.map((link) => (
        <Link
            key={link.id}
            href={link.url}
            className='text-sm text-white dark:text-black w-fit ml-12 border-b-[1.5px] pb-1 border-white dark:border-black sm:text-[30px] hover:scale-105' 
            > 
            <p>{link.label}</p>
        </Link>
            ))}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 ' />
    </div>
  </>
  )
}

export default MobileNav