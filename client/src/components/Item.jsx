import React from "react";
import { FaRupeeSign, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Item = ({ id, name, Image, new_price, old_price }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="relative flex justify-center  group overflow-hidden transition-all duration-100">
        <Link to={`/products/${id}`} className="h-12 w-12 bg-white rounded-full flex justify-center items-center absolute top-1/2 bottom-1/2 !py-2 z-10 scale-0 group-hover:scale-100 transition-all duration-700"> <FaSearch className="hover:rotate-90 hover:scale-125  transition-all duration-200"/> </Link>
        <img src={Image} alt="ProductImage"   className="w-full object-cover group-hover:scale-110 transition-all duration-1000"/>
      </div>
      <div className="p-4 overflow-hidden">
        <h4 className="my-[6px] font-medium text-lg line-clamp-2 text-gray-30">{name}</h4>
        <div className="flex gap-2">
          <div className="font-bold text-sm"><FaRupeeSign className="inline " /> {new_price}</div>
          <div className="text-secondary font-bold text-sm line-through">{old_price}</div>
        </div>
      </div>
    </div>
  );
};
