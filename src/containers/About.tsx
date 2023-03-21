import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div id="about">
      <div className="flex justify-center items-center text-center">
        <h1 className="text-[40px]  text-[#1E90FF] p-3 font-bold">
          SOBRE NÓS.
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center p-10 h-screen">
        {/* <div className="flex justify-center items-center text-center">
        <h1 className="text-[40px]  text-[#1E90FF] p-3 font-bold">
          APRESENTAÇÃO.
        </h1>
      </div> */}
        <div>
          <Image src="/cloud-computing.jpeg" width={900} height={900} alt="" />
        </div>
        <div className="flex justify-center items-center text-left max-w-[600px] text-md lg:text-xl">
          <p>
            A Digilock é uma empresa especializada em serviços de digitalização
            e guarda de documentos com armazenamento em nuvem. Oferecemos
            suluções personalizadas para empresas de todos os portes e segmentos
            em geral.
            <br />
            <br />
            Em nossa carteira de clientes, já contamos com empresas de vários
            segmentos, incluindo áreas da construção civil, escritórios de
            advocavia indústrias, comércios, entidades sem fins lucrativos e
            empresas prestadoras de serviços em geral. Temos orgulho de poder
            ajudar nossos clientes a gerenciar seus documentos de forma prática
            e eficiente, reduzindo seus custos e aumentando sua segurança.
          </p>
        </div>
      </div>
    </div>
  );
}
