import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Icons/logo.svg";
import logout from "../assets/Icons/logout.svg";
import login from "../assets/Icons/User.svg";
import { Navbar } from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { Login } from "../pages/Login";
import { ShopContext } from "../Context/ShopContext";

export const Header = () => {
  // Menu button
  const bolValue = false;

  const [menuOpened, setmenuOpened] = useState(bolValue);

  const toggleMenu = () => setmenuOpened(!menuOpened);

  const { cartItems } = useContext(ShopContext);

  const cartCount = Object.values(cartItems).reduce((total, count) => total + count, 0)

  
  return (
    <div>
      <header className="fixed top-0 left-0 m-auto w-full bg-white px-2  ring-gray-100 ring-1 z-20">
        <div className="px-4 p-3 flex justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link>
              <img src={Logo} alt="" height={40} width={40} />
            </Link>
          </div>

          {/* Navbar  Desktop */}
          <Navbar
            continerStyles={
              "hidden md:flex gap-x-5 xl:gap-x-10 text-yellow-600 "
            }
          />

          {/* Navbar Mobile */}
          <Navbar
            continerStyles={`${
              menuOpened
                ? "flex md:hidden item-start flex-col text-white gap-y-12 fixed top-20 right-8 p-12 bg-yellow-300 rounded-3xl shadow-md w-64 medium-16 ring-gray-100 ring-1 transition-all duration-300"
                : "flex  item-start flex-col text-white gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-state-900/5 transition-all duration-300 -right-[100%]"
            }`}
          />

          {/* Buttons */}
          <div className="flex justify-center  bold-16">
            {!menuOpened ? (
              <MdMenu
                className="md:hidden cursor-pointer hover:text-yellow-300 mr-2 p-1 ring-1 ring-slate-900 h-8 w-8 rounded-full"
                onClick={toggleMenu}
              />
            ) : (
              <MdClose
                className="md:hidden cursor-pointer hover:text-yellow-300 mr-2 p-1 ring-1 ring-slate-900 h-8 w-8 rounded-full"
                onClick={toggleMenu}
              />
            )}

            {/* Cart Page */}

            <div className="flex justify-center  ">
              <NavLink to={"cart-page"} className={"flex"}>
                <FaOpencart className="p-1 h-8 w-8 ring-1 ring-slate-900 rounded-full" />
                <span className="relative flex items-center justify-center h-5 w-5 rounded-full bg-yellow-300 -top-1">
                  {cartCount}
                </span>
              </NavLink>
              {/* <NavLink to={"logout"} className={"bg-yellow-300 ml-2 py-1 h-8 w-20 rounded-2xl gap-x-1 justify-center items-center flex text-sm"}>
               <img src={logout} alt="logutIcon" width={19} height={19} /> Logut
              </NavLink> */}
              <NavLink
                to={"login"}
                className={
                  "bg-yellow-300 ml-2 py-1 h-8 w-20 rounded-2xl gap-x-1 justify-center flex items-center"
                }
              >
                <img src={login} alt="UserProfile" width={19} height={19} />
                login
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
