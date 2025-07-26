import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'
import { IoMagnetOutline } from 'react-icons/io5'
import { LiaCarSideSolid } from 'react-icons/lia'
import { LuRocket } from 'react-icons/lu'
import { MdOutlineMedicalServices } from 'react-icons/md'
import { PiPaintBrushBroadDuotone } from 'react-icons/pi'
import { RiCustomerService2Fill } from 'react-icons/ri'
import SectionHeading from './CategoryComponents/SectionHeading'
import CategoryCard from './CategoryComponents/CategoryCard'

const categoryConstants = [
    {
        id: 1,
        categoryName: "Accounting / Finance",
        openPositions:2,
        icon: <GiTakeMyMoney className='w-10 h-10 text-blue-700 dark:text-white'/>,
    },
    {
        id: 2,
        categoryName: "Marketing",
        openPositions:86,
        icon: <IoMagnetOutline className='w-10 h-10 text-blue-700 dark:text-white'/>,
    },
    {
        id: 3,
        categoryName: "Design",
        openPositions:43,
        icon: <PiPaintBrushBroadDuotone className='w-10 h-10 text-blue-700 dark:text-white'/>,
    },
    {
        id: 4,
        categoryName: "Development",
        openPositions:12,
        icon: <FaLaptopCode className='w-10 h-10 text-blue-700 dark:text-white'/>,
    },
    {
        id: 5,
        categoryName: "Project Management",
        openPositions:2,
        icon: <LuRocket className='w-10 h-10 text-blue-700 dark:text-white'/>,
    },
    {
        id: 6,
        categoryName: "Customer Service",
        openPositions:2,
        icon: <RiCustomerService2Fill className='w-10 h-10 text-blue-700 dark:text-white'/>,
    },
    {
        id: 7,
        categoryName: "Health and Care",
        openPositions:25,
        icon: <MdOutlineMedicalServices className='w-10 h-10 text-blue-700 dark:text-white'/>,
    },
    {
        id: 8,
        categoryName: "Automative Jobs",
        openPositions:92,
        icon: <LiaCarSideSolid className='w-10 h-10 text-blue-700 dark:text-white'/>,
    }
]

{/* main function */}
const Category = () => {
  return (
    <>
      <SectionHeading 
        heading='Popular Job Categories' 
        subheading='2025 jobs live - 293 added today' 
      />
      <div className='w-[85%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
        {categoryConstants.map((category) => (
          <div key={category.id}>
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Category