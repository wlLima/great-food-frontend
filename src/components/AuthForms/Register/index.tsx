export default function Register() {
  return (
    <>
      <form className="flex flex-col gap-4 items-center">
        <h1 className=" text-amber-400 font-semibold text-3xl mb-4">Cadastro</h1>
        <input type="text" name="username" id="username" placeholder="Nome" className="rounded-2xl" />
        <input type="date" name="username" id="username" placeholder="Nome" className="rounded-2xl w-full" />
        <input type="text" name="email" id="email" placeholder="Email" className=" rounded-2xl" />
        <input type="password" name="password" id="password" placeholder="Senha" className=" rounded-2xl" />
        <button type="submit" className="text-white bg-amber-400 w-44 rounded-full py-2  hover:bg-amber-500">Cadastrar</button>
      </form>
    </>
  )
}