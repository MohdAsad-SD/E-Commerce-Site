import React from 'react'

const Product = ({name,id,image,price}) => {
  return (
    <div className='text-left gap-1 flex flex-col '>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 ease-in duration-100' src={image[0]} alt="" />
        </div>
        <p className='text-base md:text-lg'>{name}</p>
        <p className='text-base md:text-lg'>{price}$</p>
    </div>
  )
}

export default Product
