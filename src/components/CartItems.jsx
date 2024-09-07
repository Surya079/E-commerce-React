import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FaTrashCan } from "react-icons/fa6";

export const CartItems = () => {
  const { products, cartItems, removeFromCart,getTotalAmount } = useContext(ShopContext);

  return (
    <section className=" mt-14 flex flex-col gap-y-3  w-max-[555px]">
      <table className="mx-2  ">
        <thead className=" bg-slate-900/30">
          <th className="p-1 py-1 max-[450px]:text-[.7rem] border-2">
            Products
          </th>
          <th className="p-1 py-1 max-[450px]:text-[.7rem] border-2">Title</th>
          <th className="p-1 py-1 max-[450px]:text-[.7rem] border-2">Price</th>
          <th className="p-1 py-1 max-[450px]:text-[.7rem] border-2">
            Quantity
          </th>
          <th className="p-1 py-1 max-[450px]:text-[.7rem] border-2">Total</th>
          <th className="p-1 py-1 max-[450px]:text-[.7rem]  border-2">
            Remove
          </th>
        </thead>
        <tbody className=" border-b-2 text-center">
          {products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr key={e.id} className="mt-2 p-2">
                  <td className="flex justify-center max-[450px]:w-12 border p-1">
                    <img
                      src={e.Image}
                      alt="product-image"
                      height={43}
                      width={43}
                    />
                  </td>
                  <td className="max-[450px]:text-[.7rem] border p-1">{e.name}</td>
                  <td className="max-[450px]:text-[.7rem] border p-1">${e.new_price}</td>
                  <td className="max-[450px]:text-[.7rem] bg-white border p-1">
                    {cartItems[e.id]}
                  </td>
                  <td className="max-[450px]:text-[.7rem] border">
                    ${e.new_price * cartItems[e.id]}
                  </td>
                  <td className="max-[450px]:text-[.7rem] border">
                    <FaTrashCan
                      className="mx-auto cursor-pointer border"
                      onClick={() => removeFromCart(e.id)}
                    />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {/* Cart detatils */}

      <div className="flex flex-col gap-20 my-16 p-8 rounded-md bg-white w-full min-[900px]:w-[500px]">
        <div className="flex flex-col gap-3 p-2">
            <h4 className="font-bold text-xl">Summary:</h4>
          <div className="flex flex-row py-4 justify-between">
            <h4>Subtotal:</h4>
            <h4>${getTotalAmount()}</h4>
          </div >
          
          <div className="flex flex-row py-4 justify-between ">
            <h4>Shipping Fee:</h4>
            <h4>Free</h4>
          </div>
          <hr />
          <div className="flex flex-row py-4 justify-between ">
            <h4 className="text-black font-bold">Total:</h4>
            <h4 className="font-bold">${getTotalAmount()}</h4>
          </div>
          <hr />
        </div>
        <button className="px-4 bg-black py-3 rounded-full text-white w-44">Checkout</button>
      </div>
    </section>
  );
};
