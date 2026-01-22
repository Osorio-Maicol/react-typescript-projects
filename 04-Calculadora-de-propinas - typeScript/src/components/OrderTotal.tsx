import { useMemo } from "react"


export const OrderTotal = () => {
    
    return (
        <div className="ring-1 w-3/4 rounded-xl p-2 flex shadow-blue-700 shadow- items-center flex-col capitalize text-xl space-y-1">
            <h3 className="font-extrabold text-2xl ">factura</h3>
            <div className="flex  justify-between w-full px-2 border-b">
                <p>{"subtotal"}</p>
                <span>{"30"}</span>
            </div>

            <div className="flex  justify-between w-full px-2 border-b">
                <p>{"propina"}</p>
                <span>{"30"}</span>
            </div>

            <div className="flex justify-between w-full px-2 border-b">
                <p>{"total a pagar"}</p>
                <span>{"30"}</span>
            </div>
            
        </div>
    )
}