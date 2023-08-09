'use client'
import CardProduto from "@/components/CardProduto";
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
        <div className="flex flex-col items-center justify-center my-20">

          <div className="flex items-center justify-center mb-10 mx-96 border rounded-full lg:border-transparent px-8 py-4">
            <ul className="flex gap-5 lg:gap-1 md:flex-col">
              <li>
                <a className="flex items-center py-2 px-5 hover:shadow-xl border border-transparent hover:border-gray-100 hover:bg-rose-600 hover:text-white rounded-lg cursor-pointer transition-all">Hamburguers</a>
              </li>
              <li>
                <a className="flex items-center py-2 px-5 hover:shadow-xl border border-transparent hover:border-gray-100 hover:bg-rose-600 hover:text-white rounded-lg cursor-pointer transition-all">Pizzas</a>
              </li>
              <li>
                <a className="flex items-center py-2 px-5 hover:shadow-xl border border-transparent hover:border-gray-100 hover:bg-rose-600 hover:text-white rounded-lg cursor-pointer transition-all">Carnes</a>
              </li>
              <li>
                <a className="flex items-center py-2 px-5 hover:shadow-xl border border-transparent hover:border-gray-100 hover:bg-rose-600 hover:text-white rounded-lg cursor-pointer transition-all">Bebidas</a>
              </li>
              <li>
                <a className="flex items-center py-2 px-5 hover:shadow-xl border border-transparent hover:border-gray-100 hover:bg-rose-600 hover:text-white rounded-lg cursor-pointer transition-all">Sobremesas</a>
              </li>
              <li>
                <a className="flex items-center py-2 px-5 hover:shadow-xl border border-transparent hover:border-gray-100 hover:bg-rose-600 hover:text-white rounded-lg cursor-pointer transition-all">Vegetarianos</a>
              </li>

            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">

            {/* Replicar este trecho a partir de uma lista de produtos ('trecho já testado, precisando apenas de alguns retoques') */}

            <CardProduto id={"1"} product={"Hamburguer de Siri"} value={"28,00"} amount={"2"} ingredients={"Ingredientes"} />
            <CardProduto id={"1"} product={"Hamburguer de Siri"} value={"28,00"} amount={"2"} ingredients={"Ingredientes"} />
            <CardProduto id={"1"} product={"Hamburguer de Siri"} value={"28,00"} amount={"2"} ingredients={"Ingredientes"} />
            <CardProduto id={"1"} product={"Hamburguer de Siri"} value={"28,00"} amount={"2"} ingredients={"Ingredientes"} />
            <CardProduto id={"1"} product={"Hamburguer de Siri"} value={"28,00"} amount={"2"} ingredients={"Ingredientes"} />
            <CardProduto id={"1"} product={"Hamburguer de Siri"} value={"28,00"} amount={"2"} ingredients={"Ingredientes"} />
            <CardProduto id={"1"} product={"Hamburguer de Siri"} value={"28,00"} amount={"2"} ingredients={"Ingredientes"} />
            <CardProduto id={"1"} product={"Hamburguer de Siri"} value={"28,00"} amount={"2"} ingredients={"Ingredientes"} />
            <CardProduto id={"1"} product={"Hamburguer de Siri"} value={"28,00"} amount={"2"} ingredients={"Ingredientes"} />
            <CardProduto id={"1"} product={"Hamburguer de Siri"} value={"28,00"} amount={"2"} ingredients={"Ingredientes"} />



          </div>


        </div>
      </div>
      <Footer />
    </>
  )
}