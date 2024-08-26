import React from "react";
import { TbArrowRight } from "react-icons/tb";

export const ProductHD = ({product}) => {
  return (
    <div className="flex">
      Home <TbArrowRight /> Shop <TbArrowRight /> {product?.Category || "Category"}
      <TbArrowRight /> {product?.name }
    </div>
  );
};
