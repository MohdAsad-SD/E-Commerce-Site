import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="px-4 md:px-15 mt-2">
      <div className=" border grid md:grid-cols-2 border-gray-500 grid-cols-1 ">
        <div className="flex justify-center items-center  flex-1 flex-col p-8   ">
          <div className="flex flex-col justify-center items-start    ">
            <div className="flex justify-center items-center gap-2 font-medium ">
              <p className="w-11 bg-gray-700 h-[2px]"></p>
              <p className="text-gray-700"> OUR BESTSELLERS</p>
            </div>
            <h1 className="prata-regular text-3xl md:text-5xl text-gray-700  leading-relaxed">Latest Arrivals</h1>
            <div className="flex justify-center items-center gap-2 font-medium ">
              <p className="text-gray-700"> SHOP NOW</p>
              <p className="w-11 bg-gray-700 h-[2px]"></p>
            </div>
          </div>
        </div>
        <div className="  flex-1 bg-red-100  ">
          <img
            className="w-full h-full object-cover"
            src={assets.hero_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
