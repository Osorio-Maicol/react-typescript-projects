import { useState } from "react"
import { menuItems } from "./data/db"
import type { MenuItems } from "./types"
import { Menu } from "./components/Menu"

function App() {

  const [data] = useState<MenuItems[]>(menuItems)
  return (
    <>
      <header className="w-full ring-1 p-5 flex justify-center bg-green-400">
        <h1 className="capitalize font-bold text-4xl drop-shadow-xl drop-shadow-green-900 text-white">calculadora de propinas y consumos</h1>
      </header>


      <main className="ring-1 rounded-3xl w-100% h-screen grid grid-cols-2 m-4 gri">
        <section className="flex items-center capitalize flex-col p-2 border-r-2">
          <h2 className="font-bold text-2xl mb-5">catalogo de produtos </h2>
          <div className="w-full text-xl flex flex-col space-y-2 items-center">
            {data.map(item => (
              <Menu
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </section>


        <section className="flex items-center capitalize flex-col p-2 border-r-2">
          <h2 className="font-bold text-2xl mb-5">calculadora</h2>
        </section>

      </main>
    </>

  )
}

export default App
