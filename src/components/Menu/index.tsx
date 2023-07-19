'use client'
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Menu(){

  const [sideMenu, setSideMenu] = useState(false);

  useEffect(()=>{
    const wrapper = document.getElementById('wrapperSideMenu')

    if(sideMenu === true){
      wrapper?.classList.remove('hidden')
    }else{
      wrapper?.classList.add('hidden')
    }

  },[sideMenu])

  function toggleSideMenu(){
    setSideMenu(!sideMenu)
  }

    return(
      <>
       <header className='flex flex-col justify-center bg-orange-400 shadow-md'>

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
          
            <a onClick={toggleSideMenu} className="flex items-center cursor-pointer md:hidden">
              <div className="text-white">
                {
                  sideMenu === true ? ( <MdMenuOpen className="text-5xl" /> ) : (<MdOutlineMenu className="text-5xl" />)   
                }
              </div>
            </a>
            
          </div>

          <div id="wrapperSideMenu" className="absolute left-0 top-[4.5rem] bg-orange-400 p-10 w-1/2 h-side-menu hidden shadow-md md:hidden">

            <div className="flex flex-col h-full">

              <ul className="flex flex-col h-2/4 justify-start p-3 gap-8 text-white items-center">
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
       
              <div className="flex items-end gap-x-2 text-white text-center min-w-32 hover:opacity-80 justify-center grow">
                <MdAccountCircle className="text-xl" />
                <a href="#" className="gap-y-0 min-w-[109px]">
                  Fazer Login
                  <p className="text-xs opacity-70">ou Registrar</p>
                </a>
              </div>

            </div>

          </div>

        </header> 
      </>
    )
}