import { Menu } from "./components/Menu"
import { OrderItem } from "./components/OrderItem"
import { OrderTip } from "./components/OrderTip"
import { OrderTotal } from "./components/OrderTotal"
import { useOrder } from "./hooks/userOrder"

function App() {
  const { data, order, addOrder, deleteOrder, tip, setTip, clearOrder } = useOrder()

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-green-500 p-6 shadow-lg">
        <h1 className="text-center text-white font-bold text-4xl capitalize drop-shadow-md">
          calculadora de propinas y consumos
        </h1>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        
        {/* CATÁLOGO */}
        <section className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-4 capitalize">
            catálogo de productos
          </h2>

          <div className="w-full flex flex-col gap-3">
            {data.map(item => (
              <Menu
                key={item.id}
                item={item}
                addOrder={addOrder}
              />
            ))}
          </div>
        </section>

        {/* ORDEN */}
        <section className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-4 capitalize">
            consumo
          </h2>

          {order.length ? (
            <div className="w-full flex flex-col gap-4 items-center">
              {order.map(item => (
                <OrderItem
                  key={item.id}
                  item={item}
                  deleteOrder={deleteOrder}
                />
              ))}

              <OrderTip setTip={setTip} tip={tip} />
              <OrderTotal order={order} tip={tip} />

              <button
                className="
                  w-3/4 bg-green-500 text-white text-xl font-semibold
                  py-2 rounded-xl
                  hover:bg-green-600 hover:shadow-lg
                  transition-all duration-300
                "
                onClick={clearOrder}
              >
                pagar
              </button>
            </div>
          ) : (
            <p className="w-3/4 text-center p-5 rounded-xl shadow bg-gray-50">
              la orden está vacía
            </p>
          )}
        </section>

      </main>
    </>
  )
}

export default App
