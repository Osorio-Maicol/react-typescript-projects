import { menuItems } from "../data/db"
import type { MenuItems, OrderItems } from "../types"

export type orderActions =
    { type: "addOrder", payload: { item: MenuItems } } |
    { type: "deleteOrder", payload: { id: MenuItems["id"] } } |
    { type: "clearOrder"} |
    { type: "addTip", payload: {tip: number}}


export type orderState = {
    data: MenuItems[]
    order: OrderItems[]
    tip: number
}

export const initialState: orderState = {
    data: menuItems,
    order: [],
    tip: 0
}


export const orderReducer = (
    state: orderState = initialState,
    action: orderActions
) => {

    if (action.type == "addOrder") {


        const orderExist = state.order.find(order => order.id == action.payload.item.id)
        let order: OrderItems[] = []
        if (orderExist) {
            const orderUpdate = state.order.map(order => {
                if (order.id == action.payload.item.id) {
                    return {
                        ...order,
                        quantity: order.quantity + 1
                    }
                } else {
                    return order
                }
            })

            order = orderUpdate
        } else {
            const orderUpdate: OrderItems = { ...action.payload.item, quantity: 1 }
            order = [...state.order, orderUpdate]
        }

        return {
            ...state,
            order
        }
    }

    if (action.type == "deleteOrder") {

        const order = state.order.filter(order => order.id !== action.payload.id)
        
        return {
            ...state,
            order
        }
    }

 



    return state
}