import { useMemo, useState } from "react"
import { useButget } from "../Hooks/useButget"

export const ButgetForm = () => {

    const [butget, setButget] = useState(0)
    const {dispatch} = useButget()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        e.preventDefault()
        setButget(+e.target.valueAsNumber)
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch({type: "add-butget", payload: {butget}})
        
    }

    const isValidButget = useMemo(() => {
        return isNaN(butget) || butget <= 0
    }, [butget])

    return (
        <form className="space-y-2.5" onSubmit={handleSubmit}>
            <input type="number" name="butget" id="butget" className="w-full ring-1 p-2 rounded-xl" placeholder="agrega un presupuesto iniciar ej: 500" value={butget} onChange={e => handleChange(e)} />


            <input type="submit" value="guardar" className="bg-blue-500 hover:bg-blue-600 hover:text-shadow-md hover:text-shadow-white cursor-pointer capitalize px-2 py-1 rounded-md w-full text-xl font-extrabold duration-300 disabled:opacity-25 disabled:bg-blue-500 disabled:text-shadow-none" disabled={isValidButget} />
        </form>
    )
}