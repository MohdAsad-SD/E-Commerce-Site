import React, { useEffect, useState } from 'react'
import { products } from "../../assets/frontend_assets/assets";
import Product from '../ProductID/Product'

const Collections = () => {
    const [best,setbest]=useState([]);
    useEffect(()=>{
        const bestsell=products.filter((item)=>item.bestseller);
        setbest(bestsell.slice(0,5));

    },[])
  return (
    <div className='flex justify-center items-center text-center gap-2 mt-12 text-3xl flex-col md:px-15 px-4'>
      <div className='flex justify-center items-center gap-2'>
        <h1 className='text-gray-700 text-2xl md:text-3xl'>BEST SELLERS</h1>
        <p className='w-11 bg-gray-700 h-[2px]'></p>
      </div>
      <p className='text-base md:text-xl text-gray-600'>Concise, scannable, and benefit-driven.</p>
      <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 mt-5'>
        {best.map((item,index)=>(
            <Product key={index} name={item.name} id={item._id} image={item.image} price={item.price}/>
        ))}
    
      </div>
    </div>
  )
}

export default Collections
