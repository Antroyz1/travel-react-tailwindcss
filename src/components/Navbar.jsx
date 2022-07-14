import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          PANDAWA
        </h1>
      </div>
      <ul className="hidden md:flex">
        <a href="#home">
          <li>Home</li>
        </a>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose className="text-black" size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>
      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col" : "absolute left-[-100%]"}>
        <ul>
          <h1>PANDAWA</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destination</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-4">
            <a href="http://www.instagram.com/roymond.chandra.p">
              <FaInstagram className="icon" />
            </a>
            <FaTwitter className="icon" />
            <FaFacebook className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
