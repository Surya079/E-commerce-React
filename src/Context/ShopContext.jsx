import { createContext, useState } from "react";
import { All_products } from "../assets/all_products";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [products] = useState(All_products);

  return (
    <ShopContext.Provider value={products}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
