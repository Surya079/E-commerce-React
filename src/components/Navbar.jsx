import React from "react";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Navbar = ({ continerStyles }) => {
  return (
    <div className={`${continerStyles}`}>
      <NavLink to={"/"}>
        <div className="flex items-center gap-x-1">
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink to={"/mens"}>
        <div className="flex items-center gap-x-1">
          <MdCategory />
          Men's
        </div>
      </NavLink>
      <NavLink to={"/womens"}>
        <div className="flex items-center gap-x-1">
          <MdShop2 />
          Women's
        </div>
      </NavLink>
      <NavLink to={"/kids"}>
        <div className="flex items-center gap-x-1">
          <MdContacts />
          Kid's
        </div>
      </NavLink>
     
    </div>
  );
};
