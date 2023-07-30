'use client'
import { useEffect, useState } from "react";
import { MdPersonPin } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";


export default function Menu() {

  const [navbarTheme, setNavbarTheme] = useState(false)
  const [sideMenu, setSideMenu] = useState(false)

  const changeNavbarState = () => {
    window.scrollY >= 10 ? setNavbarTheme(true) : setNavbarTheme(false)
  }

  const changeNavbarTheme = () => {

    const menuWrapper = document.getElementById('wrapper')

    if (navbarTheme === true) {
      menuWrapper?.classList.add('menu-wrapper-on')
      menuWrapper?.classList.remove('menu-wrapper-off')
    } else {
      menuWrapper?.classList.add('menu-wrapper-off')
      menuWrapper?.classList.remove('menu-wrapper-on')
    }

  }

  const changeNavbarMode = () => {
    const wrapper = document.getElementById('wrapperSideMenu')

    if (sideMenu === true) {
      wrapper?.classList.remove('hidden')
    } else {
      wrapper?.classList.add('hidden')
    }

  }

  useEffect(() => {

    changeNavbarTheme()
    changeNavbarMode()

  }, [navbarTheme, sideMenu])

  window.addEventListener('scroll', changeNavbarState)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div id="wrapper" className="flex justify-around p-7 text-sm menu-wrapper-off uppercase items-center">

          <div>
            <a href="#">
              <h1 className="text-2xl font-bold">GreatFood</h1>
            </a>
          </div>

          <div className="flex">
            <nav className="md:hidden">
              <ul className="flex items-center gap-10">
                <li className="hover:opacity-60">
                  <a href="/">Início</a>
                </li>
                <li className="hover:opacity-60">
                  <a href="/cardapio">Cardápio</a>
                </li>
                <li className="hover:opacity-60">
                  <a href="#">Galeria</a>
                </li>
                <li className="hover:opacity-60">
                  <a href="#">Sobre</a>
                </li>
                <li className="ml-5 hover:opacity-60">
                  <a href="#">
                    <MdPersonPin className="text-2xl" />
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <div className="md:flex items-center flex-col hidden" onClick={() => setSideMenu(!sideMenu)}>
                <a className="flex gap-1 items-center cursor-pointer" >
                  {
                    sideMenu === true ? (<MdClose className="text-2xl flex flex-row" />) : (<MdMenu className="text-2xl flex flex-row" />)
                  }
                  <span>Menu</span>
                </a>

                <div id="wrapperSideMenu" className="absolute top-[88px] right-12 menu-wrapper-on w-80">
                  <nav>
                    <ul className="divide-y">
                      <li className="hover:opacity-50">
                        <a href="/" className="block">
                          <div className="flex gap-2 items-center px-6 py-3">
                            <MdOutlineHome className="text-lg" />
                            Início
                          </div>
                        </a>
                      </li>
                      <li className="hover:opacity-50">
                        <a href="/cardapio" className="block">
                          <div className="flex gap-2 items-center px-6 py-3">
                            <MdOutlineRestaurantMenu className="text-lg" />
                            Cardápio
                          </div>
                        </a>
                      </li>
                      <li className="hover:opacity-50">
                        <a href="https://google.com" className="block">
                          <div className="flex gap-2 items-center px-6 py-3">
                            <MdOutlineImage className="text-lg" />
                            Galeria
                          </div>
                        </a>
                      </li>
                      <li className="hover:opacity-50">
                        <a href="https://google.com" className="block">
                          <div className="flex gap-2 items-center px-6 py-3">
                            <MdInfoOutline className="text-lg" />
                            Sobre
                          </div>
                        </a>
                      </li>

                    </ul>
                  </nav>
                </div>

              </div>
            </div>

          </div>



        </div>
      </header>
    </>
  )
}