import React from 'react'

const Right = () => {
  return (
    <div>
      <div className='felx gap-8'>
        <ul className='sm:hidden md:hidden xl:flex items-center justify-center gap-8'>
          <li className='cursor-pointer hover:border-b-2 border-black'>Search</li>
          <li className='cursor-pointer hover:border-b-2 border-black'>Help</li>
          <li className='cursor-pointer hover:border-b-2 border-black'>My Account</li>
          <li className='w-8 h-8 felx border-2 rounded-full bg-black text-white'>3</li>
        </ul>
      </div>
    </div>
  )
}

export default Right