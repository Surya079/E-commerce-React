import { createContext, useState } from "react";
import { All_products } from "../assets/all_products";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < All_products.length; index++) {
    cart[index] = 0;
  }
  return cart;
 
  
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState(getDefaultCart());
  const [products] = useState(All_products);

  const addTocart = (itemId) => {
    console.log(itemId);

    return setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  console.log(cartItems);
  

  return (
    <ShopContext.Provider value={{ products, cartItems, addTocart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
