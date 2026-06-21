import React from 'react'
import { assets } from "../../assets/frontend_assets/assets";

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center md:px-15 px-4 mt-5'>
        <div className='flex justify-center items-center gap-3'>
            <h1 className='text-2xl text-gray-500 font-semibold'>ABOUT</h1>
            <h1 className='text-2xl font-semibold'> US</h1>
            <p className='w-11 bg-gray-700 h-[2px]'></p>
        </div>
      <div>
        <div className='flex md:flex-row flex-col  mt-12 gap-5 justify-center items-start '>
            <img className='md:w-md w-full' loading='lazy' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center items-start  gap-12 md:w-1/2 w-full ' >
                <p className='text-gray-500'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                <p className='text-gray-500'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                <h3 className='font-semibold text-gray-800'>Our Mission</h3>
                <p className='text-gray-500'>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>
        </div>
      </div>
      <div className='flex justify-start flex-col items-start w-full mt-12'>
        <div className='flex justify-center items-center gap-3 text-nowrap'>
            <h1 className='text-2xl text-gray-500 font-semibold'>WHY</h1>
            <h1 className='text-2xl font-semibold'>CHOOSE US</h1>
            <p className='w-11 bg-gray-700 h-[2px]'></p>
        </div>
        <div className='w-full grid md:grid-cols-3 grid-cols-1 mt-5'>
            <div className='flex flex-col gap-3 p-8 md:p-18 border border-gray-300'>
                <p className='font-semibold'>Quality Assurance:</p>
                <p className='text-gray-500'>We meticulously select and vet each product to ensure it meets our stringent quality standards</p>

            </div>
            <div className='flex flex-col gap-3 p-8 md:p-18 border border-gray-300'> 
                <p className='font-semibold'>Convenience:</p>
                <p className='text-gray-500'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>

            </div>
            <div className='flex flex-col gap-3 p-8 md:p-18 border border-gray-300'>
                <p className='font-semibold'>Exceptional Customer Service:</p>
                <p className='text-gray-500'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>

            </div>
        </div>
      </div>
      <div className="mt-18 text-center">
        <h2 className="font-bold text-xl md:text-2xl">Subscribe now & get 20% off</h2>
        <p className="text-gray-500 text-base md:text-lg">Subscribing to brand newsletters or loyalty programs often provides a one-time welcome coupon</p>
        <div className="mt-8 flex justify-center items-center">
            <input className="p-3 w-full md:w-sm border border-gray-500 outline-none" type="email" placeholder="Enter your email" />
            <button className="p-3 bg-black text-white font-semibold border border-black cursor-pointer" type="submit">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default About
