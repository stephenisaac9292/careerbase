import React from 'react'
import JobSearchBar from './JobSearchBar'
import Image from 'next/image'

const Hero = () => {
  return (
        <div className='relative max-w-[1500px] mx-auto w-full py-[12vh] flex flex-col justify-center 
                        pt-[24vh] '>
        <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 
                        xl:grid-cols-2 gap-10 '
        >
            {/* text-content */}
            <div>
                {/* Heading */}
                <h1 className='text-3xl sm:text-6xl font-bold'>
                    Join us & Explore <br />
                    Thousands of Jobs
                </h1>
                {/* Sub-Heading */}
                <p className='mt-4 text-sm sm:text-lg font-medium'>
                    Find Jobs, Employment & Career Opportunities
                </p>
                {/* Search Bar */}
                <JobSearchBar />
                {/* Popular Searches */}
                <div className='text-base font-semibold text-gray-700 mt-6 flex items-center space-x-6'>
                    <span className='text-gray-700 dark:text-gray-300'>Popular Searches:</span>
                    <span className='text-sm text-gray-700 dark:text-gray-300 font-light'>
                        Designer, Developer, Web, IOS, PHP, Senior, Engineer
                    </span>
                </div>
            </div>


            {/* image content */}
            <div>
                <Image src = "/images/hero.png" alt='hero' width={900} height={900}/>
            </div> 
        </div>
    </div>
  )
}

export default Hero