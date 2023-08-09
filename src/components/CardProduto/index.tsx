import { useEffect, useState } from "react";
import { MdAdd, MdRemove, MdAddShoppingCart } from "react-icons/md";

interface IProduto {
  id: string
  product: string;
  value: string;
  amount?: string;
  ingredients: string;
}

export default function CardProduto({ id, product, value, amount = "1", ingredients }: IProduto) {

  const [amountItem, setAmountdItem] = useState(0)

  useEffect(() => {
    setAmountdItem(parseInt(amount))
  }, [])

  function handleQuantity(operation: string) {

    if (operation === "sum") {
      setAmountdItem(amountItem + 1)
    } else if (amountItem > 0) {
      setAmountdItem(amountItem - 1)
    }

  }



  return (
    <>
      <div className="flex flex-col justify-center items-center h-96 gap-4 p-5 shadow-lg rounded-lg w-64 hover:bg-slate-100">
        <div className="rounded-full">
          <img src="/hamburguer1.jpg" alt="teste" className="object-cover rounded-md h-full" />
        </div>
        <div className="flex flex-col items-center justify-start gap-2">
          <div className="font-semibold">
            {product}
          </div>
          <div className="opacity-50">
            {ingredients}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            {value}
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => handleQuantity("sum")}>
              <MdAdd />
            </button>
            <input type="text" name="qtdItem" value={amountItem} id="qtdItem" className="w-9 h-[30px]" />
            <button onClick={() => handleQuantity("sub")}>
              <MdRemove />
            </button>
          </div>
          <div>
            <button className="text-white bg-rose-600 p-1 rounded-full w-32 flex items-center justify-center hover:opacity-70 transition-opacity">
              <MdAddShoppingCart />
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}