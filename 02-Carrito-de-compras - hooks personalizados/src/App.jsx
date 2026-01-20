import Guitar from "./Components/Guitar"
import Header from "./Components/Header"
import useCart from "./hooks/useCart"


function App() {
  

  const {data,cart,addToCart, removeCart, incrementQuantity, decrementQuantity, clearCart, isEmpty, carTotal} = useCart()

  return (
    <>
      <Header
        cart={cart}
        removeCart={removeCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        carTotal={carTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {data.map(item => (
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
