import React from 'react'
import {assets} from '../../assets/frontend_assets/assets'

const Search = ({search,setsearch}) => {
  return (
    <div className='py-5 px-4 md:px-15 mt-1 md:mt-1 w-screen'  >
      <div className='flex justify-center items-center border-t border-b border-gray-500 py-5 px-4 md:px-15 w-full gap-2'>
        <div className='w-[80%] md:w-[40%] flex justify-center items-center gap-2 relative  '>
        <input type="text" placeholder='Search' className='md:p-2 w-full p-2 rounded-full border outline-none'  />
        <img  src={assets.search_icon} alt="" className='w-4 absolute  md:right- right-5'  />
      </div>
      <img onClick={()=>setsearch(false)} src={assets.cross_icon} className='w-4 cursor-pointer' alt="" />

      </div>
      
      
    </div>
  )
}

export default Search
