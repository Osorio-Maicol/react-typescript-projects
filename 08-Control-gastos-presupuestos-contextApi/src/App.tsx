import { useMemo } from "react"
import { ButgetForm } from "./components/ButgetForm"
import { useButget } from "./Hooks/useButget"
import { ButgetTraker } from "./components/ButgetTraker"



function App() {
  const { state } = useButget()
  const isValidButget = useMemo(() => state.butget > 0, [state.butget])
  return (
    <>
      <header className="p-2 w-full bg-blue-400 text-center text-2xl capitalize font-extrabold text-shadow-white text-shadow-md mb-3">
        <h1>control de gastos</h1>
      </header>

      <main className="w-full flex justify-center space-y-5">
        <div className="w-2/4 shadow-black/50 rounded-md shadow-xl p-5 ring-1">
          {!isValidButget ?
            <ButgetForm /> :
            <ButgetTraker />}
        </div>
      </main>
    </>
  )
}

export default App
