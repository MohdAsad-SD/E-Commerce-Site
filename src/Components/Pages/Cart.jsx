import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assets } from "../../assets/frontend_assets/assets";
import { removeFromCart } from "../../Redux/cartSlice";
import { updateQuantity } from "../../Redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = cartItems.reduce(
    (total, items) => total + items.price * items.quantity,
    0,
  );
  return (
    <div className="flex flex-col justify-center items-center md:px-15 px-4 mt-5">
      <div className="flex justify-center items-start gap-2 flex-col w-full ">
        <div className="flex gap-2 justify-center items-center">
          <h1 className="text-3xl text-gray-500 font-semibold">YOUR</h1>
          <h1 className="text-3xl text-gray-700 font-semibold">CART</h1>
          <p className="w-11 bg-gray-700 h-[2px]"></p>
        </div>
        <div className="w-full flex flex-col p-3  mt-3">
          {cartItems.map((items, index) => (
            <div
              key={index}
              className="flex justify-between border-t border-b py-3 border-gray-500 gap-1 items-center w-full"
            >
              <div className="flex justify-start gap-3 items-start  md:flex-1 ">
                <div className="shrink-0">
                  <img className="md:w-20 w-16 " src={items.image} alt="" />
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
              <div className="flex  p-1 md:flex-1">
                <input
                  type="number"
                  className="border border-gray-300 md:w-28 w-16 outline-none p-1"
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
              <div className="w-8">
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
      {cartItems.length > 0 && (
        <div className="flex md:justify-end justify-center md:items-end flex-col gap-2 w-full mt-5">
          <div className=" p-3 flex flex-col gap-2 md:w-1/3 w-full ">
            <div className="flex gap-1 justify-center items-center">
              <h1 className="text-2xl text-gray-500 font-semibold">CART</h1>
              <h1 className="text-2xl text-gray-700 font-semibold">TOTAL</h1>
              <p className="w-11 bg-gray-700 h-[2px]"></p>
            </div>
            <div className="flex justify-between  items-center">
              <p>Subtotal</p>
              <p>${subtotal}.00</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p>Shipping fee</p>
              <p>${10}.00</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">${subtotal + 10}.00</p>
            </div>
          </div>
          <Link to={'/payment'}>
          <button className="py-3 cursor-pointer px-12 bg-black self-end text-white md:w-auto w-full text-nowrap font-semibold">
            PLACE ORDER
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
