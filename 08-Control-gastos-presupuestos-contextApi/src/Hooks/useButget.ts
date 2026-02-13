import { useContext } from "react"
import { ButgetContext } from "../context/ButgetContext"

export const useButget = ()=>{

    const context = useContext(ButgetContext)
    return(
        context
    )
}