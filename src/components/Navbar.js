import React from "react";
import logo from "../assets/logo.png";
import { MdDarkMode, MdSupportAgent } from "react-icons/md";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { PiSignIn } from "react-icons/pi";

function Navbar() {
  return (
    <div className="mx-6 px-4 flex shadow-2xl rounded-md justify-between">
      <div className="mx-4 px-32  flex justify-center align-center">
        <img className="w-10 m-2" src={logo} alt="logo" />
        <div className="w-20 flex align-center">
          <select  name="location" id="location" className="text-orange-400 text-xl outline-none" >
            <option value="gps">Other</option>
            <option value="gps">Banglore</option>
          </select>
        </div>
      </div>
      <div className=" m-4 px-4 flex justify-center align-center">
        <div className="border-b-4 flex justify-center align-center p-2">
          <CiSearch className=" w-7 h-7 mx-1 text-orange-500" />
          <input type="text" className=" outline-none w-80" />
        </div>
      </div>
      <div className=" m-4 px-4 flex justify-center align-center">
        <div className="flex justify-center align-center p-2">
          <CiShoppingCart className=" w-7 h-7 mx-1 text-orange-500" />
          <p className="text-gray-500 text-xl mx-1"> Cart</p>
        </div>
        <div className="flex justify-center align-center p-2">
          <BiSolidOffer className=" w-7 h-7 mx-1 text-orange-500" />
          <p className="text-gray-500 text-xl mx-1"> Offers</p>
        </div>
        <div className="flex justify-center align-center p-2">
          <MdSupportAgent className=" w-7 h-7 mx-1 text-orange-500" />
          <p className="text-gray-500 text-xl mx-1"> Help</p>
        </div>
        <div className="flex justify-center align-center p-2">
          <PiSignIn className=" w-7 h-7 mx-1 text-orange-500" />
          <p className="text-gray-500 text-xl mx-1"> SignIn</p>
        </div>
        <div className="flex justify-center align-center p-2">
          <MdDarkMode className=" w-7 h-7 mx-1" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
