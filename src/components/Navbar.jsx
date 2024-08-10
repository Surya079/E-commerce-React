import React, { useState } from "react";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Navbar = ({ continerStyles }) => {
  return (
    <div className={`${continerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flex items-start gap-x-1">
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink
        to={"/mens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flex items-start gap-x-1">
          <MdCategory />
          Men's
        </div>
      </NavLink>
      <NavLink
        to={"/womens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flex items-start gap-x-1">
          <MdShop2 />
          Women's
        </div>
      </NavLink>
      <NavLink
        to={"/kids"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flex items-start gap-x-1">
          <MdContacts />
          Kid's
        </div>
      </NavLink>
    </div>
  );
};
