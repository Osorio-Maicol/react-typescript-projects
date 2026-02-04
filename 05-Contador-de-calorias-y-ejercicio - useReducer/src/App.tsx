import { useEffect, useMemo, useReducer } from "react"
import { Form } from "./components/Form"
import { ActivityReducer, ActivityState } from "./Reducer/ActivityReducer"
import { ActivityList } from "./components/ActivityList"
import { AdminCaloris } from "./components/AdminCaloris"

function App() {

  const [state, dispatch] = useReducer(ActivityReducer, ActivityState)

  const isEmpty = useMemo(()=>state.activities.length
  ,[state.activities])

  useEffect(()=>{
    localStorage.setItem("activity", JSON.stringify(state.activities))
  }
  ,[state.activities])


  const activityEmpty = useMemo(()=>state.activities.length < 1, [state.activities])
  return (

    <>
      <header className="bg-green-400 w-full flex justify-center items-center p-2">

        <h1 className="text-end capitalize text-3xl font-extrabold text-shadow-md text-shadow-white">Contador de calorias y ejercicio - useReducer</h1>
        <div className="w-1/4 text-end">
          <button className="ring-1 px-2 py-1 rounded-md capitalize font-medium shadow-black duration-300 cursor-pointer  disabled:opacity-20 disabled:ring-offset-black disabled:cursor-auto" disabled={activityEmpty} onClick={()=>dispatch({type: "clear-activity"})}>reiniciar app</button>
        </div>
      </header>

      <main className="w-full bg-green-200 h-100% p-5 space-y-3 ">
        <section className="w-full flex justify-center">
          <Form
            dispatch={dispatch}
            state={state}
          
          />
        </section>

        <section className="p-2 w-full flex justify-center">
            <AdminCaloris
              activities={state.activities}
            />
        </section>

        {isEmpty? <p className="text-2xl capitalize font-extrabold text-shadow-md text-shadow-white text-center">consumos y calorias</p> : <p className="text-2xl capitalize font-extrabold text-shadow-md text-shadow-white text-center">no hay datos que mostrar</p>}

        <section className="w-full flex justify-center">
           <ActivityList
            activityState= {state.activities}
            dispatch={dispatch}
           />
        </section>
      </main>
    </>
  )
}

export default App
