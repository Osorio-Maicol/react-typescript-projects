import { useMemo } from "react"
import { formarCurrency } from "../helpers/format"
import type { OrderItems } from "../types"

type OrderTotalProps = {
  order: OrderItems[]
  tip: number
}

export const OrderTotal = ({ order, tip }: OrderTotalProps) => {

  const subtotal = useMemo(
    () => order.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [order]
  )

  const tipTotal = useMemo(
    () => subtotal * tip,
    [subtotal, tip]
  )

  const total = useMemo(
    () => subtotal + tipTotal,
    [subtotal, tipTotal]
  )

  return (
    <div className="w-3/4 bg-white rounded-xl p-4 shadow-md flex flex-col gap-3">
      
      <h3 className="font-bold text-2xl text-center capitalize">
        factura
      </h3>

      <div className="flex justify-between text-gray-600">
        <p>subtotal</p>
        <span>{formarCurrency(subtotal)}</span>
      </div>

      <div className="flex justify-between text-gray-600">
        <p>propina</p>
        <span>{formarCurrency(tipTotal)}</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold text-xl text-green-600">
        <p>total a pagar</p>
        <span>{formarCurrency(total)}</span>
      </div>
    </div>
  )
}
