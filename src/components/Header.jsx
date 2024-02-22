import React from 'react'
import Left from './Left';
import Right from './Right';

const Header = ({isHeaderVisible}) => {
  return (
    <div className={`fixed z-10 flex items-center justify-between font-grap p-8 pl-8 w-full h-8 border-[0.5px] text-black bg-white ${isHeaderVisible ? '' : 'hidden'} mt-10 falling-element`}>
      <Left />
      <Right />
    </div>
  )
}

export default Header