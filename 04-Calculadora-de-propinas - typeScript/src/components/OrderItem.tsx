import { formarCurrency } from "../helpers/format"
import type { MenuItems, OrderItems } from "../types"

type OrderItemProps = {
  item: OrderItems
  deleteOrder: (id: MenuItems["id"]) => void
}

export const OrderItem = ({ item, deleteOrder }: OrderItemProps) => {
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
        onClick={() => deleteOrder(item.id)}
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
