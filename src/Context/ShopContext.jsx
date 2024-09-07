import { createContext, useState } from "react";
import { All_products } from "../assets/all_products";
import { Item } from "../components/Item";

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
    return setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    return setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let Iteminfo = All_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += Iteminfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  return (
    <ShopContext.Provider
      value={{ products, cartItems, addTocart, removeFromCart, getTotalAmount }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
