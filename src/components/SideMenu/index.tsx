import { MdAccountCircle } from "react-icons/md";

export default function SideMenu(){
  return(
    <div className="absolute left-0 top-16 bg-orange-500 p-10 w-1/2 hidden">
      <ul className="flex flex-col justify-start p-3 gap-8 text-white items-center h-screen">
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

      
      <div className="flex items-center gap-x-2 text-white text-center min-w-32 hover:opacity-80 justify-center">
        <MdAccountCircle className="text-xl" />
        <a href="#" className="gap-y-0 min-w-[109px]">
          Fazer Login
          <p className="text-xs opacity-70">ou Registrar</p>
        </a>
      </div>

    </div>
  )
}
