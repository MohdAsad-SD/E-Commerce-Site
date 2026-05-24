import React, { useEffect, useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets'
import { NavLink } from "react-router-dom";
const Navbar = ({search,setsearch}) => {
    const [open,setopen]=useState(false);
    useEffect(()=>{
    if(open){
      document.body.style.overflow="hidden";
    }
    else{
      document.body.style.overflow="auto";
    }
    return ()=>{
      document.body.style.overflow="auto";
    };
  },[open]);
    
  return (
    <div className=' flex justify-between items-center px-4 py-5 md:px-15 md:py-3'>
        <div>
          <img className=' w-36 md:w-42' src={assets.logo} alt="" />
        </div>
        <div className={`bg-black md:bg-transparent w-64 top-0 transition-all duration-300 bg-white   fixed md:static ${open ? 'right-0':"-right-full"} md:w-auto md:h-auto h-screen p-12 md:p-1 z-50 `} >
            <ul className='flex gap-5  md:flex md:text-gray-700 text-black font-bold md:font-semi-bold flex-col md:flex-row'>
                <NavLink>HOME</NavLink>
                <NavLink>COLLECTION</NavLink>
                <NavLink>ABOUT</NavLink>
                <NavLink>Contact</NavLink>
            </ul>
        </div>
        <div className='flex gap-5 justify-center items-center'>
            <img onClick={()=>setsearch(true)} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
            <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
            <div className='relative w-5 flex  items-center'>
                <img className='w-5 cursor-pointer' src={assets.cart_icon} alt="" />
                <p className='absolute bottom-[-6px] cursor-pointer -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex justify-center items-center'>0</p>
            </div>
            <img onClick={()=>setopen(!open)} className='w-5 cursor-pointer z-50 md:hidden flex' src={assets.menu_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar
