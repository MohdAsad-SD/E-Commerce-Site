import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center md:px-15 px-4 mt-5">
      <div className="flex justify-center items-center gap-3">
        <h1 className="text-2xl text-gray-500 font-semibold">CONTACT</h1>
        <h1 className="text-2xl font-semibold">US</h1>
        <p className="w-11 bg-gray-700 h-[2px]"></p>
      </div>
      <div>
        <div className="w-full flex mt-8 gap-8 justify-center items-start  md:items-center md:flex-row flex-col ">
          <img className="md:w-md w-full" src={assets.contact_img} alt="" />
          <div className="flex flex-col gap-8 justify-center items-center md:justify-start md:items-start w-full md:text-left text-center md:w-auto">
            <h3 className="text-xl text-gray-600 font-semibold">Our Store</h3>
            <div>
              <p className="text-gray-500">54709 Willms Station</p>
              <p className="text-gray-500">Suite 350, Washington, USA</p>
            </div>
            <div>
              <p className="text-gray-500">Tel: (415) 555-0132</p>
              <p className="text-gray-500">Email: admin@forever.com</p>
            </div>
            <h3 className="text-xl text-gray-600 font-semibold">Careers at Forever</h3>
            <p className="text-gray-500">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-black py-3 px-5 cursor-pointer">Explore Jobs</button>
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
    </div>
  );
};

export default Contact;
