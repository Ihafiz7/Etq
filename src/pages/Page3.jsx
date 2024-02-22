import React from 'react'
import ShoeCard from '../components/ShoeCard'
import shoeData from '../components/ShowCard'

const Page3 = () => {

    const containerRef = React.useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
        containerRef.current.scrollLeft -= 400;
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
        containerRef.current.scrollLeft += 400;
        }
    };
  return (
    <div className='py-8'>
        <div className='flex items-center justify-between w-full px-8'>
            <p className='font-grap text-2xl font-medium'>The Favourites</p>
            <div className='flex gap-2'>
                <div className='felx p-2 border-[1px] border-stone-400 bg-white rounded-full cursor-pointer hover:clip2-hover'  onClick={scrollLeft}>
                    <div className='clip2'></div>
                </div>
                <div className='felx p-2 border-[1px] border-stone-400 bg-white rounded-full cursor-pointer hover:clip-hover' onClick={scrollRight}>
                    <div className='clip'></div>
                </div>          
            </div>
        </div>
        <div className='flex items-center justify-between gap-8 py-8 px-8 overflow-hidden' ref={containerRef}>
            {shoeData.map((item) => (
                <ShoeCard imgUrl={item.imgUrl} text={item.text} price={item.price} containerRef={containerRef} />
            ))}
        </div>
        <div></div>
    </div>
  )
}

export default Page3