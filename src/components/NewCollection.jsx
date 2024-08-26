import React from "react";
import { Item } from "./Item";
import latest from "../assets/latest";

export const NewCollection = () => {
  return (
    <section className="bg-primary">
      <div className="p-5 py-12 mx-auto xl:w-[88%] ">
        <h3 className="text-3xl  font-bold text-center">Latest Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-10" />
        {/* Container */}
        <div className="grid grid-cols-1 max-[400px]::grid-cols-2 py-4 md:grid-cols-3 xl:grid-cols-3 xl:justify-between gap-6 ">
          {latest.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
