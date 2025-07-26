import React from 'react'
import Hero from './Hero/Hero'
import Category from './Category/Category'
import Job from './Job/Job'

const Home = () => {
  return (
    <div className='overflow-hidden h-[2000px] max-w-[2000px]'>
      <Hero/>  
      <Category/>
      <Job/>
    </div>
  )
}

export default Home
 