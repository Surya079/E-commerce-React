import React from "react";
import { FaStar } from "react-icons/fa";
import { MdShop, MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative top-[49px] bg-[url('../src/assets/shoping-hero.jpg')] bg-cover bg-no-repeat w-full bg-center h-[520px] ">
      <div className=" relative top-32  mx-auto w-auto ml-16 max-[420px]:top-20 max-[420px]:m-1 m-1">
        <h1 className="font-bold text-5xl  max-[450px]:text-3xl  max-[420px]:text-center max-w-[30rem] max-[420px]:w-full max-[420px]:text-3xl">
          Welcome to Digital shoping at <b>RYGB</b>
        </h1>
        <p className="max-[420px]:text-sm max-[450px]:mt-4 max-[450px]:text-white max-w-[25rem] mt-8 max-[420px]:text-center  max-[420px]:w-full max-[420px]:mt-5 text-gray-90 ">
          Your Ultimate Destination for Men’s, Women’s, and Kids’ Fashion Step
          into a world where style meets affordability. At <b>RYGB</b>, we bring
          you the latest trends and timeless classics, all under one roof.
        </p>

        <div className="flex gap-x-2 max-[450px]:text-white max-[420px]:justify-center  items-center mt-2 m-1">
          <div className="flex  gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="font-bold mt-2 text-lg   max-[420px]:font-medium max-[420px]:text-sm ">
            176k
            <span> Excellent Reviews</span>
          </div>
        </div>
        <div className="max-[420px]:flex mt-2 max-[420px]:justify-center  flex m-1">
          <NavLink
            className={
              "flex items-center w-fit bg-yellow-300 px-4 py-2 rounded-full "
            }
          >
            <MdShop /> Shop
          </NavLink>
        </div>
      </div>
    </section>
  );
};
