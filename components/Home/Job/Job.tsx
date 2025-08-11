import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import JobCard from './JobCard'
const jobs = [
    {
        id: 1,
        image: "/images/j1.png",
        title: "Software Engineer",
        location: "London, UK",
        jobtype: "Full Time",
        urgency: "Urgent",
    },
    
    {
        id: 2,
        image: "/images/j2.png",
        title: "Recruiting Coordinator",
        location: "London, UK",
        jobtype: "Full Time",
        urgency: "Urgent",
    },

    {
        id: 3,
        image: "/images/j3.png",
        title: "Engineer",
        location: "London, UK",
        jobtype: "Full Time",
        urgency: "Urgent",
    },

    {
        id: 4,
        image: "/images/j4.png",
        title: "Product Manager",
        location: "London, UK",
        jobtype: "Full Time",
        urgency: "Urgent",
    },

    {
        id: 5,
        image: "/images/j5.png",
        title: "Senior Product Designer",
        location: "London, UK",
        jobtype: "Full Time",
        urgency: "Urgent",
    }, 

    {
        id: 6,
        image: "/images/j6.png",
        title: "Product Manager, Risk",
        location: "London, UK",
        jobtype: "Full Time",
        urgency: "Urgent",
    },

    {
        id: 7,
        image: "/images/j7.png",
        title: "Web Developer",
        location: "London, UK",
        jobtype: "Full Time",
        urgency: "Urgent",
    }
]

const Job = () => {
  return (
    <>
        <div className='pt-16 pb-16'>
            <SectionHeading 
                heading="Featured Jobs"
                subheading="Explore the latest job opportunities in various fields."
            />
            <div className='w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 
                            lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center'>
                {  
                jobs.map((job) => (
                    <div key={job.id}>
                    <JobCard job={job} />
                    </div>
                ))
                }
                
                
            </div>

            <div className='mt-10 text-center'>
                <button className='px-10 py-4 bg-blue-700 text-white cursor-pointer rounded-lg
                                hover:bg-blue-800 transition-all duration-400'>
                    Load More Listings
                </button>
            </div>

        </div>
    </>
  )
}

export default Job