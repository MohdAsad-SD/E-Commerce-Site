import React, { useState } from "react";
import Search from "../Search/Search";
import { products } from "../../assets/frontend_assets/assets";
import Product from '../ProductID/Product'

const AllCollections = ({ search, setsearch }) => {
  const [filtered,setfiltered]=useState([]);
  return (
    <div className="flex flex-col justify-center items-center md:px-15 px-4 mt-5">
      {search && <Search search={search} setsearch={setsearch} />}
      <div className="flex flex-col md:flex-row justify-center items-start w-full gap-5">
        <div className=" flex flex-col gap-5 md:w-auto w-full">
          <h2 className="text-xl">FILTERS</h2>
          <div className="flex flex-col justify-start items-start border border-gray-500 gap-3 pr-32 pl-2 py-5">
            <p className="text-lg">CATEGORIES</p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input type="radio" name="gender" value="men" />
              Men
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input type="radio" name="gender" value="women" />
              Women
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input type="radio" name="gender" value="kids" />
              Kids
            </p>
          </div>
          <div className="flex flex-col justify-start items-start border border-gray-500 gap-3 pr-32 pl-2 py-5">
            <p className="text-lg">TYPE</p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input type="radio" name="Topwere" />
              Topwere
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input type="radio" name="Bottomwere" />
              Bottomwere
            </p>
            <p className="flex justify-center items-center gap-1 text-gray-600">
              <input type="radio" name="Winterwere" />
              Winterwere
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
              className="border border-gray-500 outline-none py-2 px-0 md:p-2 rounded"
            >
              <option value="relavent">Sort by:Relavent</option>
              <option value="lowtohigh">Sort by:Low to High</option>
              <option value="hightolow">Sort by:High to Low</option>
            </select>
          </div>

          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((item,index)=>(
            <Product key={index} name={item.name} id={item._id} image={item.image} price={item.price}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCollections;
