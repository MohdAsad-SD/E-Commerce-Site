import React from 'react'
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className='flex justify-start items-start md:px-15 px-4 flex-col mt-42 '>
      <div className='flex w-full md:flex-row flex-col justify-between items-start mb-5 gap-8'>
        <div className='md:w-1/3 w-full '>
            <img className='md:w-42 w-36' src={assets.logo} alt="" />
            <p className='text-gray-500'>Forever is a modern, customer-centric e-commerce platform dedicated to making trendy, high-quality fashion accessible to everyone. We curate versatile clothing lines that empower individuals to express their unique style, offering a seamless online shopping experience from daily wear to statement pieces.</p>
        </div>
        <div className='flex flex-col  gap-5'>
            <h2 className='text-2xl font-semibold'>COMPANY</h2>
            <ul className='text-gray-500'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='flex flex-col  gap-5  '>
            <h2 className='text-2xl font-semibold'>GET IN TOUCH </h2>
            <div className='text-gray-500'>
                <p>+1-212-456-7890</p>
            <p>contact@foreveryou.com</p>
            </div>
            
        </div>

      </div>
      <div className='border-t border-gray-500 w-full text-center p-2 text-sm'>
        <p>Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
