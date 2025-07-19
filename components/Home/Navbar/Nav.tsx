import React from 'react'
import { LuNetwork } from 'react-icons/lu'

const Nav = () => {
  return (
    <div className='transition-all durations-200 h-[12vh] z-[10000] fixed w-full'>
        <div className="flex items-center h-full justify-between w-[92%] mx-auto">
            <div className="flex items-center sm: space-x-20">
            {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="flex flex-col w-10 h-10 bg-cyan-800 rounded-full items-center justify-center">
                        <LuNetwork className='w-5 h-5 text-white'/>
                    </div>
                </div>
            </div>
            {/* Nav Links*/}
        </div>
    </div>
  )
}

export default Nav