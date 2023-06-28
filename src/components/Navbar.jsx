import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import lock from '../assets/lock.svg';
import hamburgerMenu from '../assets/hamburgerMenu.svg';
import close from '../assets/close.svg';
const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const handleClick = () => {
    setToogle(!toogle);
  };

  return (
    <div className="w-full h-[80px] bg-white border-b shadow">
      <div className="md:max-w-[1480px] px-4 m-auto border border-black w-full h-full flex justify-between items-center">
        <img src={logo} alt="" className="h-[25px]" />
        <div className="hidden md:flex items-center border border-black ">
          <ul className="flex gap-4">
            <li className="cursor-pointer hover:bg-gray-100 p-2">Home</li>
            <li className="cursor-pointer hover:bg-gray-100 p-2">About</li>
            <li className="cursor-pointer hover:bg-gray-100 p-2">Support</li>
            <li className="cursor-pointer hover:bg-gray-100 p-2">Platform</li>
            <li className="cursor-pointer hover:bg-gray-100 p-2">Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex items-center border border-black">
          <button className="flex items-center px-6 gap-2 font-bold">
            <img src={lock} alt="" />
            Login
          </button>
          <button className="bg-[#20B486] text-white px-8 py-2 rounded-md font-bold">
            Sign Up For Free
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toogle ? close : hamburgerMenu}></img>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          toogle
            ? 'absolute z-10 p-4 w-full border border-black md:hidden '
            : 'hidden'
        }>
        <div className="flex flex-col border border-black">
          <ul>
            <li className="p-4 cursor-pointer hover:bg-gray-100">Home</li>
            <li className="p-4 cursor-pointer hover:bg-gray-100">About</li>
            <li className="p-4 cursor-pointer hover:bg-gray-100">Support</li>
            <li className="p-4 cursor-pointer hover:bg-gray-100">Platform</li>
            <li className="p-4 cursor-pointer hover:bg-gray-100">Pricing</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 border border-black p-2 mt-2">
          <button className="flex justify-center items-center px-6 gap-2 font-bold border border-[209486] py-2">
            <img src={lock} alt="" />
            Login
          </button>
          <button className="bg-[#20B486] text-white px-8 py-2 rounded-md font-bold">
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
