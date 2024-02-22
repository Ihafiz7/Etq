import React from 'react'

const Blogcard = ({imgUrl, title, des }) => {
  return (
    <div className='flex justify-start items-center sm:py-6 md:py-16 xl:py-20 px-10'>
        <div className='flex sm:flex-col md:flex-col xl:flex-row sm:items-start md:items-center xl:items-center sm:gap-4 md:gap-8 xl:gap-10'>
            <img src={`Logo/${imgUrl}`} className='sm:w-full sm:h-full md:w-[200px] md:h-[270px] xl:w-[200px] xl:h-[270px]' />
            <div className='font-grap'>
                <p className='text-base font-semibold'>{title}</p>
                <p className='text-sm '>{des}</p>
                <p className='text-base underline underline-offset-4 mt-8'>Read Story</p>
            </div>
        </div>
    </div>
  )
}

export default Blogcard