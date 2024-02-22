import React from 'react'
import HeaderPage1 from '../components/HeaderPage1'

const Page1 = ({ isHeaderVisible }) => {
  return (
    <div>
      <div>
        {!isHeaderVisible && <HeaderPage1 />}
        <div className='sm:block md:block xl:flex w-full h-screen items-start'>
          <img src='Logo/porshe.png' className='sm:w-full md:w-full xl:w-[74%] h-screen object-cover' />
          <div className='sm:inline-block md:inline-block xl:flex flex-col items-start justify-center font-grap xl:mt-40 pl-8 pr-16 sm:absolute md:absolute xl:relative sm:bottom-0 md:bottom-0 sm:mb-8 md:mb-8'>
            <p className='font-semibold text-base mb-4'>Accelerate your entry in luxury.</p>
            <p className='font-bold text-xl mb-6'>Big Win. A Porshe 911.</p>
            <p>All order before 28.02.2024 worth minimum 150$ gets a chance to win Porshe 911.</p>
            <p className='mt-12 text-base border-b-2 border-solid border-slate-500 cursor-pointer'>Shop now</p>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Page1