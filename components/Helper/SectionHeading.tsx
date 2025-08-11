import React from 'react'

type SectionHeadingProps = {
    heading: string;
    subheading: string;
}


const SectionHeading = ({heading, subheading}: SectionHeadingProps) => {
  return (
    <div>
      <h1 className='sm:text-3xl text-2xl font-bold text-gray-800
                    dark:text-gray-200 text-center whitespace-nowrap'
      >
        {heading}
      </h1>
      
      <p className='text-center mt-3 text-gray-500 dark:text-gray-400 whitespace-nowrap'>
        {subheading}
      </p>
    </div>
  )
}

export default SectionHeading