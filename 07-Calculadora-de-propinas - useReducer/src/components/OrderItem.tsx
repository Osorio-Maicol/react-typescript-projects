import type { Dispatch } from "react"
import { formarCurrency } from "../helpers/format"
import type { OrderItems } from "../types"
import type { orderActions } from "../Reducers/order-reducer"

type OrderItemProps = {
  item: OrderItems
  dispatch: Dispatch<orderActions>
}

export const OrderItem = ({ item, dispatch }: OrderItemProps) => {
  return (
    <div className="w-3/4 bg-white rounded-xl p-4 shadow-md flex justify-between items-center hover:shadow-lg transition-all">
      
      {/* INFO */}
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-lg">
          {item.name}
        </p>

        <p className="text-sm text-gray-500">
          {formarCurrency(item.price)} x {item.quantity}
        </p>

        <p className="font-bold text-green-600">
          {formarCurrency(item.price * item.quantity)}
        </p>
      </div>

      {/* DELETE */}
      <button
        onClick={() => dispatch({type: "deleteOrder", payload: {id: item.id}})}
        className="
          text-red-500 font-bold text-xl
          hover:text-red-700
          hover:scale-110
          transition-all duration-200
        "
        aria-label="Eliminar producto"
      >
        ✕
      </button>
    </div>
  )
}
