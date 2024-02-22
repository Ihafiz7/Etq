import React from 'react'

const Page5 = () => {
  return (
    <div className='flex flex-col px-12 py-8 font-grap gap-8'>
        <div className='flex sm:flex-col md:flex-row xl:flex-row items-start justify-evenly gap-8'>
            <div className='sm:full md:w-2/6 xl:w-2/6'>
                <ul className='flex flex-col'>
                    <li className=' text-sm font-semibold mb-4'>About ETQ Amsterdam</li>
                    <li className='text-sm font-light break-words'>We design wardrobe essentials with a strong silhouette, in tonal colorways. Our style never changes. It evolves. Continuously. Read more</li>
                </ul>
            </div>
            <div className='sm:full md:w-1/6 xl:w-1/6'>
                <p className=' text-sm font-semibold mb-4'>Address</p>
                <ul className='flex flex-col text-sm font-light'>
                    <li>ETQ Amsterdam</li>
                    <li>Duinkerkenstraat 40</li>
                    <li>9723 BT Groningen</li>
                    <li>The Netherlands</li>
                </ul>
            </div>
            <div className='sm:full md:w-1/6 xl:w-1/6'>
                <p className=' text-sm font-semibold mb-4'>Contact</p>
                <ul className='flex flex-col text-sm font-light cursor-pointer'>
                    <li className='hover:underline hover:underline-offset-4'>Email us here</li>
                    <li className='hover:underline hover:underline-offset-4'>085 40 13 553 (mon-fri)</li>
                </ul>
            </div>
            <div className='sm:full md:w-1/6 xl:w-1/6'>
                <p className=' text-sm font-semibold mb-4'>Info</p>
                <ul className='flex flex-col text-sm font-light cursor-pointer'>
                    <li className='hover:underline hover:underline-offset-4'>Customer Service</li>
                    <li className='hover:underline hover:underline-offset-4'>Shipping & Delivery</li>
                    <li className='hover:underline hover:underline-offset-4'>Returns & Exchanges</li>
                    <li className='hover:underline hover:underline-offset-4'>Product Care</li>
                    <li className='hover:underline hover:underline-offset-4'>Terms of Service</li>
                </ul>
            </div>
            <div className='sm:full md:w-1/6 xl:w-1/6'>
                <p className=' text-sm font-semibold mb-4'>Follow Us</p>
                <ul className='flex flex-col text-sm font-light cursor-pointer'>
                    <li className='hover:underline hover:underline-offset-4'>FaceBook</li>
                    <li className='hover:underline hover:underline-offset-4'>Instagram</li>
                    <li className='hover:underline hover:underline-offset-4'>Printext</li>
                    <li className='hover:underline hover:underline-offset-4'>Tiktok</li>
                </ul>
            </div>
        </div>
        <div className='flex sm:flex-col md:flex-row xl:flex-row items-center sm:gap-4 md:gap-0 xl:gap-0 justify-evenly'>
            <div className='flex sm:items-start md:items-start xl:items-center gap-4 sm:w-full md:w-2/5 xl:w-2/5'>
                <p className='break-words'>Join our newsletter</p>
                <input type='text' className='w-[65%] outline-none border-b-[1px] border-solid border-slate-600'></input>
                <button className='underline underline-offset-4'>Submit</button>
            </div>
            <div className='ml-4 sm:full md:w-2/5 xl:w-2/5'>
                <ul className='flex items-center justify-center gap-6 opacity-80'>
                    <li><img src='Logo/visa.svg' className='w-12 h-12 opacity-80 hover:opacity-100 cursor-pointer' /></li>
                    <li><img src='Logo/paypal.svg'className='w-12 h-12 opacity-80 hover:opacity-100 cursor-pointer'/></li>
                    <li><img src='Logo/mcd.svg' className='w-12 h-12 opacity-80 hover:opacity-100 cursor-pointer' /></li>
                    <li><img src='Logo/gpay.svg'className='w-12 h-12 opacity-80 hover:opacity-100 cursor-pointer'  /></li>
                    <li><img src='Logo/amex.svg' className='w-12 h-12 opacity-80 hover:opacity-100 cursor-pointer' /></li>
                </ul>
            </div>
            <div className='sm:w-full md:w-1/5 xl:w-1/5'>
                <ul className='flex sm:flex-row md:flex-col xl:flex-col items-center justify-center text-sm gap-4'>
                    <li>Privacy Statment</li>
                    <li>Terms of service</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Page5