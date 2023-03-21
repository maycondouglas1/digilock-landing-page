import Image from "next/image";
import React from "react";
import Typed from "react-typed";

export default function Hero() {
  return (
    <div className="text-white" id="home">
      <div className="flex flex-col max-w-[800px] mt-[-96px] w-full h-screen items-center justify-center mx-auto">
        <Image src="/Digilock.png" width={400} height={400} alt="Logo" />
        <div className="flex justify-center items-center pb-10">
          <Typed
            className="text-xl md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2 text-[#1E90FF]"
            strings={["Gestão de Documentos", "Armazenamento em nuvem"]}
            typeSpeed={140}
            backSpeed={160}
            loop
          />
        </div>
        {/* <p className="md:text-2xl text-xl font-bold text-[#1E90FF]">
          Monitor your data analytics to increase renevue for BTB, BTC & SASS
          platforms.
        </p> */}
        <button className="bg-[#1E90FF] w-[200px] mx-auto rounded-md py-3 my-6 font-medium hover:bg-[#62B1FF] text-white ease-in duration-200">
          Entre em contato
        </button>
      </div>
    </div>
  );
}
