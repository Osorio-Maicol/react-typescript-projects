import { useState } from "react"
import { db } from "./Data/db"
import Guitar from "./Components/Guitar"
import Header from "./Components/Header"


function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  const addToCart = (guitar)=>{
    const guitarExist = cart.findIndex(item=>item.id == guitar.id)
    if(guitarExist == -1){
      guitar.quantity = 1
      setCart([...cart, guitar])
      console.log("no existia ")
    }else{
      console.log("ya existe")
    }

    
    
    console.log(guitarExist)
  }
  return (
    <>
      <Header />

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
