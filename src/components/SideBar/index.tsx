import { MdOutlineSpaceDashboard, MdRestaurantMenu, MdOutlineRequestPage, MdOutlineSettings, MdOutlineExitToApp } from "react-icons/md";

export default function SideBar() {

  function getInitalLetters(Name: string) {
    var arr = Name.split(" ")
    var abbreviation = arr[0][0].toUpperCase() + arr[1][0].toUpperCase()

    return abbreviation
  }

  return (
    <>
      <div className="flex flex-col items-center h-screen w-80 bg-slate-900 text-white">

        <div className=" mt-10">

          <div className=" w-36 h-36">
            <div className=" w-full h-full bg-amber-400 rounded-full flex items-center justify-center">
              <h1 className=" text-4xl cursor-default select-none">
                {getInitalLetters("William Lima")}
              </h1>
            </div>
          </div>

        </div>

        <ul className="flex flex-col gap-8 mt-10 text-lg">

          <li className=" hover:text-amber-400 transition-colors ">
            <a href="#" className="flex items-center gap-2">
              <MdOutlineSpaceDashboard />
              Início
            </a>
          </li>

          <li className=" hover:text-amber-400 transition-colors ">
            <a href="#" className="flex items-center gap-2">
              <MdRestaurantMenu />
              Cardápio
            </a>
          </li>

          <li className=" hover:text-amber-400 transition-colors ">
            <a href="#" className="flex items-center gap-2">
              <MdOutlineRequestPage />
              Pedidos
            </a>
          </li>

          <li className=" hover:text-amber-400 transition-colors ">
            <a href="#" className="flex items-center gap-2">
              <MdOutlineSettings />
              Configurações
            </a>
          </li>

        </ul>

        <div className="text-white items-end flex h-full mb-10">
          <button className="flex items-center gap-2 text-lg hover:text-amber-400 transition-colors">
            <MdOutlineExitToApp />
            Sair
          </button>
        </div>

      </div>
    </>
  )
}