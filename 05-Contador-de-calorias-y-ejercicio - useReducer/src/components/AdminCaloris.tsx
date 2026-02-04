import { useMemo } from "react"
import { CaloriList } from "./CaloriList"
import type { Activity } from "../types"

type AdminCalorisProps = {
    activities: Activity[]
}
export const AdminCaloris = ({activities}: AdminCalorisProps)=>{

    const consumend = useMemo(()=>activities.reduce((total, item)=> item.categories === 1? total + item.caloris : total, 0), [activities])

    const burned = useMemo(()=>activities.reduce((total, item)=> item.categories == 2? total + item.caloris : total, 0), [activities])

    const result = useMemo(()=> consumend - burned, [activities, consumend, burned])

    return(
        <div className="w-3/4 ring-1 p-2 flex justify-between bg-white shadow-2xl shadow-black rounded-md">
            <CaloriList
                caloris={consumend}
            />
            <CaloriList
                caloris={burned}
            />
            <CaloriList
                caloris={result}
            />
        </div>
    )
}