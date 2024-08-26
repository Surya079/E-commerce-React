import React from "react";
import { MdStar } from "react-icons/md";

export const ProductDisplay = ({ product }) => {
  return (
    <section>
      <div>
        <img src={product.Image} alt="" />
      </div>
      <div>
        <h3>{product.name}</h3>
        <div>
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <p>(100)</p>
        </div>
        <div>
          <div>{product.old_price}</div>
          <div>{product.new_price}</div>
        </div>
        <div>
          <h4>Select Size:</h4>
          <div className="flex gap-3 my-3">
            <div className="ring-1 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer">S</div>
            <div className="ring-1 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">M</div>
            <div className="ring-1 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">L</div>
            <div className="ring-1 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">XL</div>
          </div>
          <div>
            <button>Add to cart</button>
            <button>Buy it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};
