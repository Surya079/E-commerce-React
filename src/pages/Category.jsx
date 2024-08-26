import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import All_products from "../assets/all_products";
import { Item } from "../components/Item";

export const Category = ({ Category, banner }) => {


  return (
    <section className="p-5 m-2 py-12 mx-auto  xl:py-28">
      <div>
        <div className=" ">
          <img src={banner} alt="" className="block my-3 mx-auto" />
        </div>
        <div className="flex justify-between items-center text-[1.1rem] max-sm:p-1 max-sm:text-sm mx-2 my-5 ">
          <h5>
            <span className="font-bold">Showing 1-10</span> out of
            {All_products.length} products
          </h5>
          <div className="flex justify-around w-28 max-sm:p-1 items-center gap-x-3 max-sm:w-20 max-sm:gap-x-1 py-2 px-1 ring-1 ring-slate-900/15 rounded-full ">
            Sort by <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>

      {/* Container */}
      <div className="grid xl:grid-cols-4 gap-6 max-sm:grid-cols-2  max-md:grid-cols-3">
        {All_products.map((item) => {
          if (Category == item.Category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                image={item.Image}
                name={item.name}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          }
        })}
      </div>
      <div className="mt-20 text-center">
        <button className="ring-1 py-2 px-4 rounded-full ring-slate-950/15 bg-black text-white ">
          Read more
        </button>
      </div>
    </section>
  );
};
