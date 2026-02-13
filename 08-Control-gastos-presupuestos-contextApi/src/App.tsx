import { ButgetForm } from "./components/ButgetForm"



function App() {
  return (
    <>
      <header className="p-2 w-full bg-blue-400 text-center text-2xl capitalize font-extrabold text-shadow-white text-shadow-md mb-3">
        <h1>control de gastos</h1>
      </header>

      <main className="w-full flex justify-center space-y-5">
        <div className="w-2/4 shadow-black/50 rounded-md shadow-xl p-5 ring-1">
          <ButgetForm />
        </div>
      </main>
    </>
  )
}

export default App
