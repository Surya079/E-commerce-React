import React from "react";
import { FaStar } from "react-icons/fa";
import { MdShop, MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative bg-[url('../src/assets/shoping-hero.jpg')]   bg-no-repeat bg-cover w-full bg-center h-screen ">
      <div className=" relative top-32  mx-auto w-auto  ml-16 max-[400px]:top-20 max-[400px]:m-1 m-1">
        <h1 className="font-bold text-5xl max-[400px]:text-center  max-w-[37rem] max-[400px]:w-full max-[400px]:text-3xl">
          Welcome to Digital shoping at <b>RYGB</b>
        </h1>
        <p className="max-[400px]:text-sm m-1 max-w-[40rem] mt-10 max-[400px]:text-center  max-[400px]:w-full max-[400px]:mt-5 text-gray-90 ">
          Your Ultimate Destination for Men’s, Women’s, and Kids’ Fashion Step
          into a world where style meets affordability. At <b>RYGB</b>, we bring
          you the latest trends and timeless classics, all under one roof.
          Whether you’re shopping for yourself, your partner, or your little
          ones, our diverse collection has something for everyone.
        </p>

        <div className="flex gap-x-2  max-[400px]:justify-center  items-center mt-2 m-1">
          <div className="flex  gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="font-bold mt-2 text-lg   max-[400px]:font-medium max-[400px]:text-sm ">
            176k
            <span> Excellent Reviews</span>
          </div>
        </div>
        <div className="max-[400px]:flex mt-2 max-[400px]:justify-center  flex m-1">
          <NavLink className={"flex items-center w-fit bg-yellow-300 px-4 py-2 rounded-full "}>
            <MdShop /> Shop
          </NavLink>
        </div>
      </div>
    </section>
  );
};
