import { useEffect, useState } from "react"
import { db } from "./Data/db"
import Guitar from "./Components/Guitar"
import Header from "./Components/Header"


function App() {
  

  const initialCart = ()=>{
    const cartStorage = localStorage.getItem("cart")
    return cartStorage? JSON.parse(cartStorage) : []
  }
  const [data, setData] = useState(db)
  const [cart, setCart] = useState(initialCart)


  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (guitar) => {

    const itemExist = cart.findIndex(item => item.id == guitar.id)
    if(itemExist >=0){
      if(cart[itemExist].quantity <10){

        const itemUpdate = [...cart]
        itemUpdate[itemExist].quantity++
        setCart(itemUpdate)
      }
    }else{
      guitar.quantity = 1
      setCart([...cart, guitar])
    }

  }

  const removeCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const incrementQuantity = (id) => {
    const updateCart = cart.map(item => {
      if (item.id === id && item.quantity <10) {
        return {
          ...item,
          quantity: item.quantity +1
        }
      }

      return item
    })

    setCart(updateCart)
  }

  const decrementQuantity = (id)=>{
    const updateCart = cart.map(item=>{
      if(item.id === id && item.quantity>1){
        return{
          ...item,
          quantity: item.quantity -1
        }
      }
      return item
    })

    setCart(updateCart)
  }

  const clearCart = ()=>{
    setCart([])
  }

  return (
    <>
      <Header
        cart={cart}
        removeCart={removeCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        clearCart={clearCart}
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
