import Image from "next/image";

export default function Plans() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white" id="plans">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-white"
            width={100}
            height={100}
            src="/single.png"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Plano Fácil</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Cedemos total acesso de nossa plataforma ao cliente. O cliente
              efetua a digitalização com armazenamento em pastas que venha a
              criar, podendo compartilhar documentos digitalizados com outros
              usuários, onde serão criados login e senha de forma individual que
              serão repassados ao nosso cliente.
            </p>
            <p className="py-2 mx-8 mt-8 text-sm">
              {" "}
              *O Plano Premium atende no momento apenas a região da grande São
              Paulo.
            </p>
          </div>
          <button className="bg-[#1E90FF] w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#62B1FF] ease-in duration-200">
            Entre em contato
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            width={100}
            height={100}
            src="/double.png"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Plano Premium</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Retiramos a movimentação física onde efetuamos a digitalização em
              nosso sistema e após isso procedemos com a devolução já orientando
              quanto aos documentos físicos que poderão ser descartados. O
              cliente receberá login e senha para acesso em nosso sistema,
              podendo acessar seus documentos de onde estiver, com
              disponibilidade e suporte 24 horas por dia.
            </p>
          </div>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-gray-800 ease-in duration-200">
            Entre em contato
          </button>
        </div>
      </div>
    </div>
  );
}
