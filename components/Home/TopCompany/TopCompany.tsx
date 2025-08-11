import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'

const CompanyConstants =[
    {
        id: 1,
        image: "/images/c1.png",
        name: "Google",
        location: "Mountain View, CA",
        industry: "Technology",
    },
    {
        id: 2,
        image: "/images/c2.png",
        name: "Amazon",
        location: "Seattle, WA",
        industry: "E-commerce",
    },
    {
        id: 3,
        image: "/images/c3.png",
        name: "Microsoft",
        location: "Redmond, WA",
        industry: "Software",
    },
    {
        id: 4,
        image: "/images/c4.png",
        name: "Apple",
        location: "Cupertino, CA",
        industry: "Consumer Electronics",
    },
    {
        id: 5,
        image: "/images/c5.png",
        name: "Facebook",
        location: "Menlo Park, CA",
        industry: "Social Media",
    }
]


const TopCompany = () => {
  return (
    <>
    <div className='pt-16 pb-16 '>
        <SectionHeading 
            heading="Top Company Registered" 
            subheading ="Some of the companies we've helped recruit excellent appications over the years" />
    </div>
    <div className='w-80% mx-auto mt-16 '> 

    </div>
    </>
  )
}

export default TopCompany