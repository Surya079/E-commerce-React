import React from "react";
import { useContext } from "react";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";

export const ProductDisplay = ({ product }) => {
  const { addTocart, cartItems } = useContext(ShopContext);

  return (
    <section className="flex xl:items-center gap-4 ring-1 xl:p-2  pt-0 pb-0  m-5 max-[450px]:flex-col ring-slate-900/5">
      <div className="xl:w-96 mx-xl:5 justify-center max-sm:w-64 flex  border-r-2 align-top xl:p-2 xl:pt-2 xl:pb-2">
        <img
          src={product.Image}
          alt="product"
          className=" pt-0 pb-0 shadow-md p-2 rounded-md shadow-black"
        />
      </div>
      <div className=" w-full xl:ml-10 xl:pl-5">
        <div className=" flex flex-col gap-1 w-fit   ">
          <h3 className=" w-fit xl:pl-5 xl:text-[40px] text-[25px] font-bold">
            {product.name}
          </h3>
          <div className="flex items-center xl:pl-4 text-yellow-700 text-[20px]">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>(100)</p>
          </div>
          <div className="flex xl:p-5 flex-row gap-3 font-bold text-[20px] w-fit">
            <div className="line-through text-yellow-700">
              {product.old_price}
            </div>
            <div>{product.new_price}</div>
          </div>
        </div>

        <div className="xl:p-5 ">
          <h4 className="text-[18px]">Select Size:</h4>
          <div className="flex gap-3 my-3">
            <div className="ring-1 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer">
              S
            </div>
            <div className="ring-1 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">
              M
            </div>
            <div className="ring-1 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">
              L
            </div>
            <div className="ring-1 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">
              XL
            </div>
          </div>
        </div>
        <div className=" flex flex-col xl:pl-5 gap-1">
          <button
            onClick={(e) => {
              e.preventDefault();
              addTocart(product.id);
            }}
            className="p-4 bg-black text-white xl:rounded-lg xl:w-[500px] max-[450px]:w-full"
          >
            Add to cart
          </button>
          <button className="p-4 bg-yellow-300 text-black xl:rounded-lg xl:w-[500px]  max-[450px]:w-full">
            Buy it now
          </button>
        </div>
      </div>
    </section>
  );
};
