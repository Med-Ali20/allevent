import React from 'react'
import Value from '@/app/components/values'
import ValueDesktop from '@/app/components/values/desktop'

const Values = () => {
  return (
    <div className='mx-[1.4rem] md:mx-[5rem] lg:mx-0 lg:mb-2 lg:mt-[8rem]'>
        <h2 className='font-bold text-[1.6rem] mb-[3rem] lg:w-full lg:text-center lg:mb-[11rem]'>Our Core Values</h2>
        <ValueDesktop />
        <Value />
        <Value />
        <Value />
        <Value />
    </div>
  )
}

export default Values