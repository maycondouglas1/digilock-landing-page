import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState<Boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl font-bold w-full text-[#1E90FF]">DIGILOCK.</h1>
      <ul className="hidden md:flex">
        <li className="text-xl p-4 cursor-pointer hover:text-[#1E90FF] ease-in-out duration-500">
          <a href="#home">Início</a>
        </li>
        <li className="text-xl p-4 cursor-pointer hover:text-[#1E90FF] ease-in-out duration-500">
          <a href="#about">Sobre</a>
        </li>
        <li className="text-xl p-4 cursor-pointer hover:text-[#1E90FF] ease-in-out duration-500">
          <a href="#plans">Planos</a>
        </li>
        <li className="text-xl p-4 cursor-pointer hover:text-[#1E90FF] ease-in-out duration-500">
          <a href="#security">Segurança</a>
        </li>
        <li className="text-xl p-4 cursor-pointer hover:text-[#1E90FF] ease-in-out duration-500">
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] border-r border-r-gray-900 bg-[#1E90FF] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold w-full text-white m-4">DIGILOCK.</h1>
        <li className="p-4 border-b border-b-gray-600 text-white">
          <a href="#home">Início</a>
        </li>
        <li className="p-4 border-b border-b-gray-600 text-white">
          <a href="#about">Sobre</a>
        </li>
        <li className="p-4 border-b border-b-gray-600 text-white">
          <a href="#security">Segurança</a>
        </li>
        <li className="p-4 border-b border-b-gray-600 text-white">
          <a href="#plans">Planos</a>
        </li>
        <li className="p-4 text-white">
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  );
}
