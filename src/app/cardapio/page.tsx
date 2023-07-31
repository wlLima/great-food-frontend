'use client'
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { MdAdd, MdRemove, MdAddShoppingCart } from "react-icons/md";

export default function cardapio() {

  return (
    <>
      <Menu />
      <div className="flex flex-col bg-gray-800 justify-center items-center">
        <div className="flex items-center justify-center my-20 p-10">
          <h1 className=" font-bold text-3xl text-white">Cardápio</h1>
        </div>
      </div>

      <div className="my-10 mx-10">
        <div className="flex flex-col my-20">

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">

            {/* Replicar este trecho a partir de uma lista de produtos ('trecho já testado, precisando apenas de alguns retoques') */}
            <div className="flex h-full gap-4 p-5 border-b border-dashed">
              <div className="w-1/2 rounded-full">
                <img src="/hamburguer1.jpg" alt="teste" className="object-cover w-32 h-32 rounded-full" />
              </div>
              <div className="w-64 flex flex-col justify-start gap-2">
                <div className="font-semibold">
                  Nome do produto
                </div>
                <div className="opacity-50">
                  Ingredientes
                </div>
              </div>
              <div className="w-1/2 flex flex-col items-center justify-center gap-2">
                <div>
                  R$ 28,60
                </div>
                <div className="flex items-center gap-1">
                  <button>
                    <MdAdd />
                  </button>
                  <input type="text" name="qtdItem" value={"1"} id="qtdItem" className="w-9 h-[30px]" />
                  <button>
                    <MdRemove />
                  </button>
                </div>
                <div>
                  <button className="text-white bg-rose-600 p-1 rounded-full w-32 flex items-center justify-center">
                    <MdAddShoppingCart />
                    Adicionar
                  </button>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>
      <Footer />
    </>
  )
}