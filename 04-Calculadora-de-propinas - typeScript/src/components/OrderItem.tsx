import { formarCurrency } from "../helpers/format"
import type { MenuItems, OrderItems } from "../types"

type OrderItemProps = {
    item: OrderItems
    deleteOrder: (id: MenuItems["id"]) => void
}

export const OrderItem = ({ item, deleteOrder}: OrderItemProps) => {

    return (
        <div className="ring-1 w-3/4 rounded-xl p-2 flex justify-between shadow-black/50 shadow-md items-center">
            <div>
                <div className="flex">
                    <p >{item.name} - </p>
                    <p>{formarCurrency(item.price)}</p>
                </div>
                <div className="flex space-x-2.5">
                    <p>{item.quantity} -</p>
                    <p>{formarCurrency(item.price * item.quantity)}</p>
                </div>
            </div>
            <button className="text-2xl cursor-pointer text-red-400 font-extrabold hover:text-red-600 duration-200" onClick={(()=>deleteOrder(item.id))}>
                x
            </button>
        </div>
    )
}