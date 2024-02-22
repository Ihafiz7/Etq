import React from 'react'

const Page4 = () => {
  return (
    <div className='flex sm:flex-col md:flex-row xl:flex-row items-start gap-8 py-8 px-4 font-grap'>
        <div className='flex flex-col items-start'>
            <div>
                <img src='Logo/p4i1.jpg' />
            </div>
            <div className='my-8 cursor-pointer'>
                <p className='font-normal text-lg text-black mb-2 hover:underline hover:underline-offset-8'>ETQ Menswear</p>
                <p className='font-light text-sm text-stone-600'>The new definition of deluxe.</p>
            </div>
        </div>
        <div className='flex flex-col items-start'>
            <div>
                <img src='Logo/p4i2.jpg'/>
            </div>
            <div className='my-8 cursor-pointer'>
                <p className='font-normal text-lg text-black mb-2 hover:underline hover:underline-offset-8'>Shades Collection</p>
                <p className='font-light text-sm text-stone-600'>Crafted for enduring elegance. </p>
            </div>
        </div>
    </div>
  )
}

export default Page4