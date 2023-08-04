
export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="shadow-lg shadow-slate-500 h-2/4 p-4 rounded-lg bg-rose-600">

          <div className=" shadow-md shadow-black h-full w-96 rounded-lg bg-white flex gap-4 justify-center flex-col px-5 sm:w-auto sm:px-2">
            <h1 className="flex text-lg font-bold justify-center shadow-black">Login</h1>

            <div className="flex flex-col justify-center gap-3 w-3/4 self-center">
              <input type="text" className="rounded-md focus:caret-rose-600 focus:ring-rose-500 focus:border-rose-500" placeholder="Informe seu email" />
              <input type="password" name="password" id="password" placeholder="Informe sua senha" className=" rounded-md focus:caret-rose-600 focus:ring-rose-500 focus:border-rose-500" />
            </div>

            <div className="flex flex-col items-center justify-center mt-3 gap-3">
              <button className="px-24 py-2 bg-rose-600 text-white rounded-full sm:px-16 hover:opacity-90 transition-opacity">
                Entrar
              </button>
              <a href="" className=" opacity-60 hover:opacity-100 transition-opacity">
                registrar-se
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}