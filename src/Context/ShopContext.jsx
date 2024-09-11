import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Item } from "../components/Item";

export const ShopContext = createContext();

const getDefaultCart = (products) => {
  let cart = {};
  for (let index = 0; index < products.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItem] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
        setCartItem(getDefaultCart(response.data));
      } catch (error) {
        console.log("Error while fetching Products ", error);
      }
    };
    fetchProducts();
  }, []);

  const addTocart = (itemId) => {
    if (itemId != undefined) {
      return setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    return setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let Iteminfo = products.find((product) => product.id === Number(item));
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
