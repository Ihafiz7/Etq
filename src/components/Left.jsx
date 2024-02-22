import React from 'react'

const Left = () => {
  return (
    <div>
      <div className='felx gap-8'>
        <img src='Logo/menub.svg' className='w-12 h-12 xl:hidden'/>
        <img src='Logo/etq.svg' className='sm:w-16 sm:h-16 md:w-20 md:h-20 w-32 h-32 object-contain' />
        <ul className='sm:hidden md: hidden xl:flex items-center justify-center gap-8 text-black'>
          <li className='cursor-pointer hover:border-b-2 border-black'>Footwear</li>
          <li className='cursor-pointer hover:border-b-2 border-black'>Menswear</li>
          <li className='cursor-pointer hover:border-b-2 border-black'>Sale</li>
        </ul>
      </div>
    </div>
  )
}

export default Left