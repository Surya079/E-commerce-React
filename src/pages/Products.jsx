import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext.jsx";
import { ProductHD } from "../components/ProductHD";
import { ProductDisplay } from "../components/ProductDisplay.jsx";
import { RelatedProdcuts } from "../components/RelatedProdcuts.jsx";

export const Products = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const Product = products.find((e) => e.id === Number(productId));

  if (!products) {
    return <div>Products not found</div>;
  }

  return (
    <section>
      <div>
        <ProductHD product={Product} />
        <ProductDisplay product={Product} />
        {/* <RelatedProdcuts /> */}
      </div>
    </section>
  );
};
