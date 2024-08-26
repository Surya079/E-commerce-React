import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext.jsx";
import { ProductHD } from "../components/ProductHD";
import { ProductDisplay } from "../components/ProductDisplay.jsx";

export const Products = () => {
  const all_products = useContext(ShopContext);
  const { productId } = useParams();
  const Product = all_products.find((e) => e.id === Number(productId));

  return (
    <section>
      <div>
        <ProductHD product={Product} />
        <ProductDisplay product={Product} />
      </div>
    </section>
  );
};
