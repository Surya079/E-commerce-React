import React from "react";
import { Link } from "react-router-dom";
import footerData from "../assets/data.js";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-10 px-20 bg-gray-10 max-[400px]:p-10">
      <div className="">
        <div className="flex w-full flex-col gap-[10%]">
          <div className="flex px-3 pb-5 flex-wrap gap-8 sm:justify-between md:flex-1 ">
            {footerData.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col gap-y-7 font-serif">
                  {col.links?.map((link, index) => (
                    <li key={index} className="flex   items-center gap-1">
                      <Link to="/" className="text-sm text-gray-20">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex gap-6 ">
            <Link><FaFacebookF /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaTwitter /></Link>
            <Link><FaLinkedin /></Link>
            <Link><FaYoutube /></Link>
            </div>
          </div> <hr />
          <div className=" w-full  items-center max-[400px]:p-0 justify-center p-14 ">
            <p className="text-center  text-gray-20 font-serif p-2 ">
              2024 | RYGB All rights seserved.
            </p>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-3 ">
      <h4 className="font-bold ">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
