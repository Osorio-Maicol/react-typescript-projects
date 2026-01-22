import { useState } from "react";
import type { MenuItems, OrderItems } from "../types";
import { menuItems } from "../data/db";

export const useOrder = () => {

    const [data] = useState<MenuItems[]>(menuItems)
    const [order, setOrder] = useState<OrderItems[]>([])

    const addOrder = (item: MenuItems) => {

        const orderExist = order.find(order => order.id == item.id)
        if (orderExist) {
            const orderUpdate = order.map(order=>{
                if(order.id == item.id){
                    return {
                        ...order,
                        quantity: order.quantity +1
                    }
                }else{
                    return order
                }
            })

            setOrder(orderUpdate)
        } else {
            const orderUpdate: OrderItems = { ...item, quantity: 1 }
            setOrder([
                ...order,
                orderUpdate
            ])
        }

    }

    

    return {
        data,
        order,
        addOrder
    }
}