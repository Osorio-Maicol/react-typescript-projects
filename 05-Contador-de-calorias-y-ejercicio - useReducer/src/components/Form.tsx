import { useEffect, useMemo, useState, type Dispatch } from "react"
import {v4 as uuidv4} from "uuid"
import { categories } from "../Data/db"
import type { Activity } from "../types"
import type { ActivityActions, Activityt } from "../Reducer/ActivityReducer"

type FormsProps = {
    dispatch: Dispatch<ActivityActions>
    state: Activityt
}

export const Form = ({ dispatch, state }: FormsProps) => {

    const initilState = {
        id: uuidv4(),
        categories: 1,
        nombre: "",
        caloris: 0
    }
    const [calories, setCalories] = useState<Activity>(initilState)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {

        const updateActiviti = ["categories", "caloris"].includes(e.target.name)

        setCalories({
            ...calories,
            [e.target.name]: updateActiviti ? +e.target.value : e.target.value
        })

    }

    const isValidForm = useMemo(() => () => {
        const { nombre, caloris } = calories
        return nombre.trim() != "" && caloris > 0
    }, [calories])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: "save-activity", payload: { newActivitiy: calories } })
        setCalories(initilState)

    }

    useEffect(()=>{
        if(state.activityId){
            const updateActivity = state.activities.filter(item=>item.id == state.activityId)[0]
            setCalories(updateActivity)
        }
    },[state.activityId])

    return (
        <form className="bg-white rounded-lg w-3/4 p-4 space-y-4 shadow-md" onSubmit={handleSubmit

        }>

            {/* CATEGORÍAS */}
            <div className="flex flex-col gap-1">
                <label htmlFor="categories" className="text-sm font-semibold capitalize">categoría</label>

                <select id="categories" name="categories" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={calories.categories} onChange={handleChange}>
                    <option value="" disabled>
                        seleccione
                    </option>

                    {categories.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* NOMBRE */}
            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold capitalize">nombre</label>
                <input type="text" name="nombre" value={calories.nombre} className=" w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} placeholder="ej: Manzana , Natacion " />
            </div>


            {/* CALORÍAS */}
            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold capitalize">calorías</label>
                <input type="number" name="caloris" value={calories.caloris} className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} placeholder="ej: 500, 1000" />
            </div>

            {/* BOTÓN */}
            <button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-35 capitalize text-xl" disabled={!isValidForm()}> {`agergar ${calories.categories == 1 ? "comidas" : "ejercicios"}`}</button>


        </form>
    )
}
