import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, products } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import Product from "../ProductID/Product";

const ProductPage = () => {
  const { productId } = useParams();
  const [data, setdata] = useState(false);
  const [selected, setselected] = useState("");
  const [size, setsize] = useState("");
  const related = products.filter(
    (r) =>
      r._id !== productId &&
      r.category === data?.category &&
      r.subCategory === data?.subCategory,
  ).slice(0,5);
  useEffect(() => {
    window.scrollTo(0,0);
    const product = products.find((item) => item._id === productId);
    if (product) {
      setselected(product.image[0]);
    }
    setdata(product);
  }, [productId]);

  return (
    <div className="flex flex-col justify-center items-center md:px-15 px-4 mt-5 gap-5 text-wrap overflow-hidden">
      <div className="flex justify-center md:flex-row flex-col items-start w-full overflow-hidden gap-3">
        <div className=" flex flex-col gap-1 md:flex-col flex-row w-full overflow-x-auto   md:order-1 order-2  md:w-[10%]">
          {data &&
            data.image.map((image, index) => (
              <img
                className="flex-1 md:flex-none md:w-full h-24 md:h-28 object-cover cursor-pointer"
                onClick={() => setselected(image)}
                key={index}
                src={image}
                alt=""
              />
            ))}
        </div>
        <div className="md:w-[40%] w-full md:order-2 order-1">
          <img className="w-full" src={ selected} alt="" />
        </div>
        <div className="md:w-[55%] w-full mt-5 ml-3 flex flex-col gap-5 order-3  items-start">
          <h1 className="md:text-2xl text-xl font-semibold">{data && data.name}</h1>
          <div className="flex justify-start items-center gap-2 w-full">
            <ul className="flex gap-2">
              <li>
                <img className="w-3" src={assets.star_icon} alt="" />
              </li>
              <li>
                <img className="w-3" src={assets.star_icon} alt="" />
              </li>
              <li>
                <img className="w-3" src={assets.star_icon} alt="" />
              </li>
              <li>
                <img className="w-3" src={assets.star_icon} alt="" />
              </li>
              <li>
                <img className="w-3" src={assets.star_dull_icon} alt="" />
              </li>
            </ul>
            <p>(122)</p>
          </div>
          <h2 className="md:text-2xl text-3xl font-semibold">{data && data.price}$</h2>
          <p className="md:w-[70%] text-sm md:text-lg text-wrap w-full">{data && data.description}</p>
          <div className="mt-4">
            <p className="text-lg">Select Size</p>
            <div className="flex gap-5  ">
              {data &&
                data.sizes.map((item, index) => (
                  <div
                    onClick={() => setsize(item)}
                    className={`border-2 font-semibold mt-1 bg-gray-300 ${size === item ? "border-black" : "border-gray-300"} py-3 px-4`}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <button className="py-3 bg-black text-white w-1/2 md:w-1/3">
            ADD TO CART
          </button>
          <hr className="border-t border-gray-300 w-full" />
          <div className="flex flex-col gap-2 text-md text-gray-500">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="w-full  p-2 ">
        <div className="flex w-1/4  ">
          <div className="flex-1 items-center justify-center flex border border-gray-300 font-semibold md:p-2 p-3 ">
            Description
          </div>
          <div className="flex-1 border text-nowrap items-center justify-center flex border-gray-300 text-gray-600 md:p-2 p-3 ">
            Reviews (122)
          </div>
        </div>
        <div className="text-gray-500 border p-4 border-gray-300 w-full text-start md:text-none">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer. E-commerce websites
            typically display products or services along with detailed
            descriptions, images, prices, and any available variations (e.g.,
            sizes, colors). Each product usually has its own dedicated page with
            relevant information.
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-2xl text-gray-500 font-semibold">RELATED</h1>
          <h1 className="text-2xl font-semibold">PRODUCTS</h1>
          <p className="w-11 bg-gray-700 h-[2px]"></p>
        </div>
        <div className="w-full grid gap-3 mt-5 grid-cols-2 md:grid-cols-5">
          {related.map((item, index) => (
            <Link className="flex" key={index} to={`/productpage/${item._id}`}>
              <Product
                name={item.name}
                id={item._id}
                image={item.image}
                price={item.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
