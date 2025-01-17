import React, { useEffect, useMemo } from "react";
import { Item } from "./Item";
import { All_products } from "../assets/all_products";

const getRandomProducts = (products, count) => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const RelatedProdcuts = () => {
  const randomProducts = useMemo(
    () => getRandomProducts(All_products, 4),
    [All_products]
  );

  return (
    <section className="bg-primary mt-5">
      <div className="p-5 py-12 mx-auto xl:w-[88%] ">
        <h3 className="text-3xl  font-bold text-center">Relevent Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-10" />
        {/* Container */}
        <div className="grid grid-cols-2 max-[400px]::grid-cols-2 py-4 md:grid-cols-3 xl:grid-cols-4 xl:justify-between gap-6 ">
          {randomProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              Image={item.image}
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
