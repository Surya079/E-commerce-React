import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Navbar } from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";

export const Header = () => {
  // Menu button
  const [menuOpened, setmenuOpened] = useState(false);

  const toggleMenu = () => setmenuOpened(!menuOpened)

  return (
    <div>
      <header className="fixed top-0 left-0 m-auto w-full bg-white px-6  ring-gray-100 ring-1 z-10">
        <div className="px-4 p-3 flex justify-between">
          {/* Logo */}
          <div>
            <Link>
              <img src={Logo} alt="" height={60} width={60} />
            </Link>
          </div>

          {/* Navbar  Desktop */}
          <Navbar
            continerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
          />

          {/* Navbar Mobile */}
          <Navbar
            continerStyles={`${
              menuOpened
                ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-gray-100 ring-1 transition-all duration-300"
                : "flex item-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-state-900/5 transition-all duration-300 -right-[100%]"
            }`}
          />

          {/* Buttons */}
          <div>
            {!menuOpened ? (
              <MdMenu className="md:hidden cursor-pointer hover:text-red-800 mr-2 p-1 ring-1 ring-slate-900 h-8 w-8 rounded-full" onClick={toggleMenu} />
            ) : (
              <MdClose className="md:hidden cursor-pointer hover:text-red-800 mr-2 p-1 ring-1 ring-slate-900 h-8 w-8 rounded-full" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
