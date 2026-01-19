import { useState } from "react"
import { db } from "./Data/db"
import Guitar from "./Components/Guitar"
import Header from "./Components/Header"


function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  const addToCart = (guitar) => {

    const itemExist = cart.findIndex(item => item.id == guitar.id)
    if (itemExist < 0) {
      guitar.quantity = 1
      setCart([...cart, guitar])
    } else {
      const itemUpdate = [...cart]
      itemUpdate[itemExist].quantity++
      setCart(itemUpdate)
      console.log(cart)
    }

  }

  const removeCart = (id)=>{
    setCart(cart.filter(item=> item.id !== id))
  }

  return (
    <>
      <Header 
        cart={cart}
        removeCart={removeCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {db.map(item => (
            <Guitar
              key={item.id}
              data={item}
              addToCart={addToCart}
            />
          ))}


        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App
