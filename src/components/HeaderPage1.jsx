import React from 'react'
import Right from './Right'
import Left1 from './Left1'

const HeaderPage1 = () => {
  return (
    <div className=' absolute z-10 flex items-center justify-between font-grap p-8 pl-8 w-full h-8  text-black bg-transparent sm:mt-6 md:mt-8 mt-12 falling-element'>
        <Left1 />
        <Right />
        <p className='w-8 h-8 felx xl:hidden border-2 rounded-full bg-white text-black'>3</p>
    </div>
  )
}

export default HeaderPage1