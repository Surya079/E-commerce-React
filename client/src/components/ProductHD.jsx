import React from "react";
import { TbArrowRight } from "react-icons/tb";

export const ProductHD = ({ product }) => {
  return (
    <div className=" flex relative mt-[3.5rem] m-3 pt-12 pl-2   gap-2 max-[450px]:flex-col ">
      <div className="flex flex-row items-center">
        Home <TbArrowRight /> Shop <TbArrowRight />{" "}
        {product?.Category || "Category"}
      </div>
      <div className="flex  items-center">
      <TbArrowRight /> {product?.name}
      </div>
    </div>
  );
};
