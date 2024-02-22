import React from 'react'

const ShoeCard = ({ imgUrl, text, price,containerRef }) => {

    const [isHovered, setIsHovered] = React.useState(false);
    const [count, setCount] = React.useState(1);

    const increaseCount = () => {
        setCount((prevCount) => (prevCount < 5 ? prevCount + 1 : 1));
    };
    const decreaseCount = () => {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 5));
    }

  return (
    <div>
        <div>
            <div className=' relative w-[400px] h-[400px] bg-white border-2 border-solid border-slate-100 ' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} ref={containerRef}>
                {!isHovered && <img src={`Logo/${imgUrl}`} className='w-[400px] h-[400px] object-conver' />}
                {isHovered && (
                    <div>
                        <img src={`Logo/shoe${count}.avif`} className='w-[400px] h-[400px] object-cover' />
                        <div className=" flex justify-center items-center opacity-0 absolute top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.5)] hover:opacity-100">
                            <div className="w-full flex items-center justify-between">
                                <button className="flex items-center justify-center border-[1px] border-solid border-white rounded-full p-2" onClick={decreaseCount} >
                                    <img src='Logo/left.svg' className='w-4 h-4' />
                                </button>
                                <button className="flex items-center justify-center border-[1px] border-solid border-white rounded-full p-2"  onClick={increaseCount}>
                                    <img src='Logo/right.svg' className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='my-8 font-grap'>
                <p className='text-sm font-bold'>{text}</p>
                <p className='text-sm font-medium'>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default ShoeCard