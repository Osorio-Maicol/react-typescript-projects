import { useState } from "react"
import { categories } from "../Data/db"
import type { Activity } from "../types"

export const Form = () => {

    const [calories, setCalories] = useState<Activity>({
        categories: 1,
        nombre: "",
        calories: 0
    })

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>)=>{

        const updateActiviti = ["categories", "calories"].includes(e.target.name)

        setCalories({
            ...calories,
            [e.target.name] : updateActiviti? +e.target.value : e.target.value
        })

        console.log(calories)
    }
    return (
        <form className="bg-white rounded-lg w-3/4 p-4 space-y-4 shadow-md">

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
                <input type="number" name="calories" value={calories.calories} className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} placeholder="ej: 500, 1000"/>
            </div>

            {/* BOTÓN */}
            <button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition">
                calcular
            </button>
        </form>
    )
}
