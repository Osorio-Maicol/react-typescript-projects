import { useMemo } from "react"
import { categories } from "../Data/db"
import type { Activity } from "../types"

type ActivityListProps = {
    activityState: Activity[]
}

export const ActivityList = ({ activityState }: ActivityListProps) => {

    const categoriesItems = useMemo(() => (categoriId: Activity["categories"]) => (categories.map(item => (item.id == categoriId ? item.name : ""))), [activityState])


    return (
        <>

            <div className="w-3/4 justify-center items-center space-y-2">
                {activityState.map(item => (
                    <div key={item.id} className="ring-1 ring-gray-200 w-full p-4 rounded-md bg-white flex flex-col gap-3">

                        {/* Tipo */}
                        <div className={`${item.categories ==1 ? "bg-green-500" : "bg-orange-500"}  text-white text-sm font-bold px-3 py-1 rounded-md w-fit`}>
                            {categoriesItems(item.categories)}
                        </div>

                        {/* Contenido */}
                        <div className="flex justify-between items-center">

                            {/* Nombre y calorías */}
                            <div className="flex items-center gap-6">
                                <p className="capitalize text-xl font-extrabold">
                                    {item.nombre}
                                </p>
                                <span className="text-xl font-bold text-gray-700">
                                    {`${item.caloris} cal`}
                                </span>
                            </div>

                            {/* Acciones */}
                            <div className="flex gap-3 text-sm font-semibold">
                                <button className="text-blue-600 hover:underline">
                                    editar
                                </button>
                                <button className="text-red-600 hover:underline">
                                    eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>



    )
}
