'use client'
//import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import SideMenu from "../SideMenu";

export default function Menu(){
    return(
      <>
       <header className='flex justify-center drop-shadow bg-orange-400'>

          <div className="flex p-2 justify-evenly gap-x-20 md:gap-x-32 w-full">

            <div className="min-w-14">
                <a href="/">
                  <img src="/logo-96.png" alt="Logo do projeto" className='w-14 h-14' />
                </a>
            </div>

            <ul className="md:flex md:justify-end md:p-3 md:gap-3 text-white md:items-center hidden">
             <li>
               <a href="/" className="hover:opacity-80">Início</a>
             </li>
             <li>
               <a href="#" className="hover:opacity-80">Cardápio</a>
             </li>
             <li>
               <a href="#" className="hover:opacity-80">Sobre</a>
             </li>
            </ul>

            <div className="md:flex md:items-center md:gap-x-2 text-white text-center md:min-w-32 hover:opacity-80 hidden">
             <MdAccountCircle className="text-xl" />
             <a href="#" className="gap-y-0 min-w-[109px]">
               Fazer Login
               <p className="text-xs opacity-70">ou Registrar</p>
             </a>
            </div>

            <div className="flex items-center cursor-pointer md:hidden">
              <div className="text-white">
                <MdOutlineMenu className="text-5xl" />
              </div>
            </div>
            
            <SideMenu />
            
          </div>

        </header>
        
      </>
    )
}