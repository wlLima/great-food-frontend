'use client'
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { MdAdd, MdRemove, MdAddShoppingCart } from "react-icons/md";

export default function galeria() {

  return (
    <>
      <Menu />
      <div className="flex flex-col bg-gray-800 justify-center items-center">
        <div className="flex items-center justify-center my-20 p-10">
          <h1 className=" font-bold text-3xl text-white">Galeria</h1>
        </div>
      </div>

      <div className="my-10 mx-10">
        <div className="flex flex-col my-20">

          <div className="mx-20 flex">


            <div className=" border p-2">
              <img src="hamburguer1.jpg" alt="...." className="w-60 hover:scale-125 transition-transform" />
            </div>


          </div>


        </div>
      </div>
      <Footer />
    </>
  )
}