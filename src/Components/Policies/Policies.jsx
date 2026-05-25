import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Policies = () => {
  return (
    <div className="flex flex-col justify-center items-center  px-4 md:px-12  mt-28 text-center gap-5">
      <div className="flex flex-col md:flex-row justify-center items-center gap-18">
        <div className="flex justify-center items-center flex-col">
          <img className="w-12" src={assets.exchange_icon} alt="" />
          <h3 className="font-bold">Easy Exchange Policy</h3>
          <p className="text-gray-500">We offer hassle free exchange policy</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img className="w-12" src={assets.quality_icon} alt="" />
          <h3 className="font-bold">Easy Exchange Policy</h3>
          <p className="text-gray-500">We offer hassle free exchange policy</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img className="w-12" src={assets.support_img} alt="" />
          <h3 className="font-bold">Easy Exchange Policy</h3>
          <p className="text-gray-500">We offer hassle free exchange policy</p>
        </div>
      </div>
      <div className="mt-18">
        <h2 className="font-bold text-2xl">Subscribe now & get 20% off</h2>
        <p className="text-gray-500 text-lg">Subscribing to brand newsletters or loyalty programs often provides a one-time welcome coupon</p>
        <div className="mt-8 flex justify-center items-center">
            <input className="p-3 w-auto md:w-sm border border-gray-500 outline-none" type="email" placeholder="Enter your email" />
            <button className="p-3 bg-black text-white font-semibold border border-black cursor-pointer" type="submit">SUBSCRIBE</button>
        </div>
      </div>

    </div>
  );
};

export default Policies;
