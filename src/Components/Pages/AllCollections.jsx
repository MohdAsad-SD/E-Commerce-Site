import React, { useState } from "react";
import Search from "../Search/Search";
import { assets, products } from "../../assets/frontend_assets/assets";
import Product from '../ProductID/Product'

const AllCollections = ({ search, setsearch }) => {
  const [gender,setgender]=useState([]);
  const [drop,setdrop]=useState(false);
  const [type,settype]=useState([]);
  const handletype=(value)=>{
    if(type.includes(value)){
      settype(
        type.filter((t)=>(
        t!==value
      ))
      )
    }
    else{
      settype([...type,value]);
    }
  }
  const handlegender=(value)=>{
    if(gender.includes(value)){
      setgender(
        gender.filter((g)=>(
          g!==value
        ))
      );
    }
    else{
      setgender([...gender,value]);
    }
    
  }
  const filteredproducts=products.filter((p)=>{
    if(gender.length>0 && !gender.includes(p.category)){
      return false;
    }
    if(type.length>0 &&!type.includes(p.subCategory)){
      return false;
    }
    return true;

})
  return (
    <div className="flex flex-col justify-center items-center md:px-15 px-4 mt-5">
      {search && <Search search={search} setsearch={setsearch} />}
      <div className="flex flex-col md:flex-row justify-center items-start w-full gap-5">
        <div className=" flex flex-col gap-5 md:w-auto w-full">
          <h2 className="text-xl flex gap-1 justify-start items-center">FILTERS <img onClick={()=>setdrop(!drop)} className={`w-3 ${drop ? "rotate-90":"rotate-270"} md:hidden transition-all duration-300  h-3`} src={assets.dropdown_icon} alt="" /></h2>
          <div className={`flex flex-col justify-start items-start border border-gray-500 ${drop ? "flex":"hidden"} md:flex gap-3 pr-32 pl-2 py-5`}>
            <p className="text-lg">CATEGORIES</p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input onChange={()=>handlegender("Men")} type="checkbox" name="gender" value="Men" />
              Men
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input onChange={()=>handlegender("Women")} type="checkbox" name="gender" value="Women" />
              Women
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input onChange={()=>handlegender("Kids")} type="checkbox" name="gender" value="Kids" />
              Kids
            </p>
          </div>
          <div className={`flex flex-col justify-start items-start border ${drop ? "flex":"hidden"} md:flex border-gray-500 gap-3 pr-32 pl-2 py-5`}>
            <p className="text-lg">TYPE</p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input onChange={()=>handletype("Topwear")} value="Topwear" type="checkbox" name="Topwear" />
              Topwear
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input onChange={()=>handletype("Bottomwear")} value="Bottomwear" type="checkbox" name="Bottomwear" />
              Bottomwear
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input onChange={()=>handletype("Winterwear")} value="Winterwear" type="checkbox" name="Winterwear" />
              Winterwear
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between sm:justify-between md:justify-between items-center md:items-start gap-3">
            <div className="flex justify-center items-center gap-1">
              <h1 className="text-base sm:text-lg md:text-2xl text-gray-500 font-semibold">ALL</h1>
              <h1 className=" text-base sm:text-lg md:text-2xl font-semibold">COLLECTIONS</h1>
              <p className="w-5 bg-gray-700 h-[2px]"></p>
            </div>
            <select
              name=""
              id=""
              className="border border-gray-500 text-sm outline-none py-2 px-0 md:p-2 rounded"
            >
              <option value="relavent">Sort by:Relavent</option>
              <option value="lowtohigh">Sort by:Low to High</option>
              <option value="hightolow">Sort by:High to Low</option>
            </select>
          </div>

          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-5 gap-4">
            { filteredproducts.map((item,index)=>(
            <Product key={index} name={item.name} id={item._id} image={item.image} price={item.price}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCollections;
