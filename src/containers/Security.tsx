import Image from "next/image";
import React from "react";

export default function Security() {
  return (
    <div id="security">
      <div className="flex justify-center items-center text-center">
        <h1 className="text-[40px]  text-[#1E90FF] p-3 font-bold">
          SEGURANÇA.
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center p-10 h-screen">
        <div className="flex justify-center items-center">
          <Image
            className=" w-4/5 lg:w-4/5 mx-auto mt-[-3rem] bg-white"
            src="/cyber_seguranca.png"
            width={900}
            height={900}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center text-left max-w-[600px] text-md lg:text-xl mt-10 lg:mt-0">
          <p>
            Nossa empresa leva a sério a segurança e a confidencialidade dos
            documentos que recebemos. Todos os documentos são tratados com
            sigilo absoluto e com contrato de prestação de serviços entre as
            partes, garantindo total proteção dos seus documentos e seguindo as
            normas da Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>
      </div>
    </div>
  );
}
