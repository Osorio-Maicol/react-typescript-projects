import { useReducer } from "react"
import { Form } from "./components/Form"
import { ActivityReducer, ActivityState } from "./Reducer/ActivityReducer"
import { ActivityList } from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer(ActivityReducer, ActivityState)

  return (

    <>
      <header className="bg-green-400 w-full flex justify-center items-center p-2">

        <h1 className="text-end capitalize text-3xl font-extrabold text-shadow-md text-shadow-white">Contador de calorias y ejercicio - useReducer</h1>
        <div className="w-1/4 text-end">
          <button className="ring-1 px-2 py-1 rounded-md capitalize font-medium hover:shadow-md shadow-black duration-300 cursor-pointer hover:text-green-100">reiniciar app</button>
        </div>
      </header>

      <main className="w-full bg-green-200 h-100% p-5 space-y-3 ">
        <section className="w-full flex justify-center">
          <Form
            dispatch={dispatch}
          />
        </section>

        <section className="w-full flex justify-center">
           <ActivityList
            activityState= {state.activities}
           />
        </section>
      </main>
    </>
  )
}

export default App
