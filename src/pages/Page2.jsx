import React from 'react'
import Blogcard from '../components/Blogcard'
import blogdata from '../components/blogdata'

const Page2 = () => {
  return (
    <div className='flex sm:flex-col md:flex-row xl:flex-row'>
      {blogdata.map((item) => (
        <div key={item.id}>
          <Blogcard imgUrl={item.imgUrl} title={item.textTitle} des={item.des} />
        </div>
      ))}
    </div>
  )
}

export default Page2