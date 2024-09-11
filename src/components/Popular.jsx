import React, { useEffect, useState } from "react";
import { Item } from "./Item";
import axios from "axios";

export const Popular = () => {
  const [products, setProducts] = useState([]);

  // fetching data from database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products"); // Make a GET request to fetch products
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="bg-primary mt-5">
      <div className="p-5 py-12 mx-auto xl:w-[88%] ">
        <h3 className="text-3xl  font-bold text-center">Popular Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-10" />
        {/* Container */}
        <div className="grid grid-cols-1 max-[400px]::grid-cols-2 py-4 md:grid-cols-3 xl:grid-cols-4 xl:justify-between gap-6 ">
          {products.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              Image={"/src/assets" + item.image.slice(1)}
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
