import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const PaymentPage = ({login}) => {
  const navigate=useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = cartItems.reduce(
    (total, items) => total + items.price * items.quantity,
    0,
  );
  const handlepurchase=()=>{
    if(cartItems.length===0){
      alert("Your Cart Is Empty");
      return;
    }
     if(!login){
      alert("Login Please");
      return;
    }
    navigate('/myorders');
  };
  return (
    <div className="flex  justify-between items-center md:px-28 px-4 mt-5 gap-3 md:flex-row flex-col">
      <div className="flex flex-1  flex-col justify-start items-start w-full p-1">
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-2xl text-gray-500 font-semibold">DELIVERY</h1>
          <h1 className="text-2xl text-gray-700 font-semibold">INFORMATION</h1>
          <p className="w-11 bg-gray-700 h-[2px]"></p>
        </div>
        <div className="w-full flex-col mt-5 flex gap-4">
          <div className="flex gap-2">
            <input
              className="w-1/2 p-2 rounded border border-gray-300"
              type="text"
              defaultValue="MOHD"
            />
            <input
              className="w-1/2 p-2 rounded border border-gray-300"
              type="text"
              defaultValue="ASAD"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300"
              defaultValue="asadnafees2005@gmail.com"
            />
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300"
              defaultValue="Street"
            />
          </div>
          <div className="flex gap-2">
            <input
              className="w-1/2 p-2 rounded border border-gray-300"
              type="text"
              defaultValue="SRE"
            />
            <input
              className="w-1/2 p-2 rounded border border-gray-300"
              type="text"
              defaultValue="NEW"
            />
          </div>
          <div className="flex gap-2">
            <input
              className="w-1/2 p-2 rounded border border-gray-300"
              type="text"
              defaultValue="247001"
            />
            <input
              className="w-1/2 p-2 rounded border border-gray-300"
              type="text"
              defaultValue="INDIA"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <input
              type="number"
              className="w-full p-2 rounded border border-gray-300"
              defaultValue="7505325040"
            />
          </div>
        </div>
      </div>
      <div className="flex-1  ">
        <div className="flex justify-center items-center gap-2">
          <div className="w-full p-3 flex flex-col gap-2 ">
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
        </div>
        <div className="flex flex-col justify-center items-center gap-2  w-full">
          <div className="w-full p-3 flex justify-center items-center gap-1 ">
            <h1 className="text-2xl text-gray-500 font-semibold">PAYMENT</h1>
            <h1 className="text-2xl text-gray-700 font-semibold">METHOD</h1>
            <p className="w-11 bg-gray-700 h-[2px]"></p>
          </div>
          <div className="flex flex-col gap-5 w-full ">
            <div className="grid md:grid-cols-3    gap-3">
              <div className="flex gap-2 justify-center items-center cursor-pointer border border-gray-300 p-3">
                <div className="rounded-[100%] border border-gray-300 p-2 w-1 h-1"></div>
                <img className="h-5 sm:h-6 w-auto object-contain min-w-0" src={assets.stripe_logo} alt="" />
              </div>
              <div className="flex gap-2 justify-center items-center cursor-pointer border border-gray-300 p-3">
                <div className="rounded-[100%] border border-gray-300 p-2 w-1 h-1"></div>
                <img className="h-5 sm:h-6 w-auto object-contain min-w-0 " src={assets.razorpay_logo} alt="" />
              </div>
              <div className="flex gap-2 justify-center items-center cursor-pointer border w-full border-gray-300 p-3">
                <div className="rounded-[100%] border bg-green-500  border-green-500 shadow-lg shadow-green-500/80 animate-pulse p-2 w-1 h-1"></div>
                <p className="text-gray-500 text-base md:text-nowrap  w-auto">CASH ON DELIVERY</p>
              </div>
            </div>
            
            <button onClick={()=>handlepurchase()} className="py-3 cursor-pointer px-12  bg-black self-end w-full md:w-auto text-white font-semibold">
              PLACE ORDER
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
