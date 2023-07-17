import { FaCircleUser } from "react-icons/fa6";

export default function Menu(){
    return(
      <header className='flex justify-center drop-shadow bg-orange-500'>
        <div className="flex p-2 justify-around gap-x-10 md:gap-x-32">
          <div className="min-w-14">
            <a href="/">
              <img src="/logo-96.png" alt="Logo do projeto" className='w-14 h-14' />
            </a>
          </div>
          <ul className="flex justify-end p-3 gap-3 text-white items-center">
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
          
          <div className="flex items-center gap-x-2 text-white text-center min-w-32 hover:opacity-80">
            <FaCircleUser className="text-xl" />
            <a href="#" className="gap-y-0 min-w-[109px]">
              Fazer Login
              <p className="text-xs opacity-70">ou Registrar</p>
            </a>
          </div>

        </div>
      </header>
    )
}