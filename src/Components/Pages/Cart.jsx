import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assets } from "../../assets/frontend_assets/assets";
import { removeFromCart } from "../../Redux/cartslice";
import { updateQuantity } from "../../Redux/cartslice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="flex flex-col justify-center items-center md:px-15 px-4 mt-5">
      <div className="flex justify-center items-start gap-2 flex-col w-full ">
        <div className="flex gap-2 justify-center items-center">
          <h1 className="text-3xl text-gray-500 font-semibold">YOUR</h1>
          <h1 className="text-3xl text-gray-700 font-semibold">CART</h1>
          <p className="w-11 bg-gray-700 h-[2px]"></p>
        </div>
        <div className="w-full flex flex-col p-1 mt-3">
          {cartItems.map((items, index) => (
            <div
              key={index}
              className="flex justify-between border-t border-b py-3 border-gray-500 gap-1 items-center w-full"
            >
              <div className="flex justify-between gap-3 items-center">
                <div>
                  <img className="md:w-22 w-62 " src={items.image} alt="" />
                </div>
                <div className="py-1 flex flex-col gap-5 md:gap-2 ">
                  <p className="font-semibold text-[10px] text-nowrap md:text-lg text-gray-700">
                    {items.name}
                  </p>
                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-gray-600">{items.price}$</p>
                    <div className=" p-1 md:p-2 border border-gray-300 text-black font-semibold">
                      {items.size}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-5 ">
                <input
                  type="number"
                  className="border border-gray-300 w-[40%] md:w-[50%] outline-none p-1"
                  min="1"
                  value={items.quantity}
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({
                        index,
                        quantity: Number(e.target.value),
                      }),
                    )
                  }
                />
              </div>
              <div className="mt-5">
                <img
                  onClick={() => dispatch(removeFromCart(index))}
                  className="w-6"
                  src={assets.bin_icon}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
