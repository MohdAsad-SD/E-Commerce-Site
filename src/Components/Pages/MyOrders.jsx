import React from "react";
import { useSelector } from "react-redux";

const MyOrders = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="flex  justify-between items-center md:px-28 px-4 mt-5 gap-3 md:flex-row flex-col">
      <div className="flex flex-col w-full justify-start items-start">
        <div className="flex gap-2 justify-center items-center ">
          <h1 className="text-2xl text-gray-500 font-semibold">MY</h1>
          <h1 className="text-2xl text-gray-700 font-semibold">ORDERS</h1>
          <p className="w-11 bg-gray-700 h-[2px]"></p>
        </div>
        <div className="mt-3 w-full">
          {cartItems.map((items, index) => (
            <div
              key={index}
              className="border-t border-b border-gray-500 flex md:justify-between md:flex-row flex-col md:items-center p-2 gap-1  "
            >
              <div className=" w-1/2 flex justify-start items-center gap-2  ">
                <img
                  className="md:w-22 md:h-25 w-28 h-28 object-cover"
                  src={items.image}
                  alt=""
                />
                <div className="flex justify-start items-start flex-col  gap-1 ">
                  <div>
                    <h2 className="font-semibold text-gray-600">{items.name}</h2>
                  </div>
                  <div className="flex justify-center items-center gap-2 text-gray-600  ">
                    <p>Price:{items.price}$</p>
                    <p>Quantity:{items.quantity}</p>
                    <p>Size:{items.size}</p>
                  </div>
                  <div className="flex justify-start items-start flex-col text-gray-600  ">
                    <p>Date:{today}</p>
                    <p>Payment:COD</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between w-full">
                <div className="flex justify-center items-center gap-2  ">
                <div className="rounded-[100%] border bg-green-500  border-green-500 shadow-lg shadow-green-500/80 animate-pulse p-1 w-1 h-1"></div>
                <p className="text-gray-500 font-semibold">Order Placed</p>
              </div>

              <div>
                <button className="cursor-pointer text-gray-600 p-2 border rounded font-semibold border-gray-300">
                  Track Order
                </button>
              </div>

              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
