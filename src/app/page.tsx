import Carousel from "@/components/Carousel";
import Menu from "@/components/Menu";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Menu />
      <Carousel />
      <main className="flex flex-col items-center justify-between px-24 py-12 sm:px-8 h-full">
        <div className="flex lg:flex-col">
          <img src="/hamburguers.jpg" alt="prato com hamburguers e batata" className="w-1/2 lg:w-full" />
          <div className="flex flex-col justify-center gap-5 bg-slate-50 text-center p-5 items-center">
            <h1 className=" text-3xl font-bold">Sobre nós</h1>
            <p className=" text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis eum maiores architecto nesciunt porro molestiae, voluptatibus reiciendis facere natus, inventore aut necessitatibus! Velit nobis delectus, assumenda non quaerat deserunt.</p>
            <button className=" bg-rose-600 p-3 text-white rounded-full w-56">Continue Lendo</button>
          </div>
        </div>

        <div className="flex flex-col my-20">

          <div className="flex items-center justify-center font-bold text-3xl mb-12">
            Produtos
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">

            <div className="flex h-full gap-4 p-5 border-b border-dashed">
              <div className="w-1/2 rounded-full">
                <img src="/hamburguer1.jpg" alt="teste" className="object-cover w-32 h-32 rounded-full" />
              </div>
              <div className="w-64 flex flex-col justify-evenly">
                <div className="font-semibold">
                  Nome do produto
                </div>
                <div className="opacity-50">
                  Ingredientes
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                R$ 28,60
              </div>
            </div>


            <div className="flex h-full gap-4 p-5 border-b border-dashed">
              <div className="w-1/2 rounded-full">
                <img src="/hamburguer1.jpg" alt="teste" className="object-cover w-32 h-32 rounded-full" />
              </div>
              <div className="w-64 flex flex-col justify-evenly">
                <div className="font-semibold">
                  Nome do produto
                </div>
                <div className="opacity-50">
                  Ingredientes
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                R$ 28,60
              </div>
            </div>


            <div className="flex h-full gap-4 p-5 border-b border-dashed">
              <div className="w-1/2 rounded-full">
                <img src="/hamburguer1.jpg" alt="teste" className="object-cover w-32 h-32 rounded-full" />
              </div>
              <div className="w-64 flex flex-col justify-evenly">
                <div className="font-semibold">
                  Nome do produto
                </div>
                <div className="opacity-50">
                  Ingredientes
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                R$ 28,60
              </div>
            </div>


            <div className="flex h-full gap-4 p-5 border-b border-dashed">
              <div className="w-1/2 rounded-full">
                <img src="/hamburguer1.jpg" alt="teste" className="object-cover w-32 h-32 rounded-full" />
              </div>
              <div className="w-64 flex flex-col justify-evenly">
                <div className="font-semibold">
                  Nome do produto
                </div>
                <div className="opacity-50">
                  Ingredientes
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                R$ 28,60
              </div>
            </div>


          </div>

          <div className="flex justify-center mt-10">
            <button className=" bg-rose-600 text-white rounded-full p-3 w-56">
              Ver todos os produtos
            </button>
          </div>

        </div>

      </main >
      <Footer />
    </div >
  )
}
