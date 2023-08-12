'use client'
import Login from "@/components/AuthForms/Login";
import Register from "@/components/AuthForms/Register";
import { useState } from "react";

export default function Auth() {
  const [form, setForm] = useState("Login");

  function handleForm() {
    form === "Register" ? setForm("Login") : setForm("Register")
  }

  return (
    <>
      <div className="flex bg-gradient-to-b from-amber-400 to-amber-50 h-screen">
        <div className="flex flex-col h-full items-center justify-center w-1/4 bg-gray-800">
          {
            form === "Register" ? <Register /> : <Login />
          }
          <div className="mt-2">
            <button className="text-white font-light text-sm" onClick={handleForm}>{
              form === "Register" ? "Voltar" : "Registrar-se"
            }</button>
          </div>
        </div>
        <div className="flex items-center justify-center w-3/4 bg-transparent">
          <div className="">
            <p>Informe aqui o seu texto</p>
          </div>
        </div>
      </div>
    </>
  )
}