import { db } from "../Data/db"
import type { GuitarItem, GuitarT } from "../types"

export type cartActions =
    { type: "addToCart", payload: { guitar: GuitarT } } |
    { type: "removeCart", payload: { id: GuitarT["id"] } } |
    { type: "incrementQuantity", payload: { id: GuitarT["id"] } } |
    { type: "decrementQuantity", payload: { id: GuitarT["id"] } } |
    { type: "clearCart" }

export type initialCart = {
    data: GuitarT[]
    cart: GuitarItem[]
}

const initilaStorage = (): GuitarItem[] => {
    const cartStorage = localStorage.getItem("cart")
    return cartStorage ? JSON.parse(cartStorage) : []
}

export const initialState: initialCart = {
    data: db,
    cart: initilaStorage()
}


export const cartReducer = (
    state: initialCart = initialState,
    actions: cartActions
) => {
    if (actions.type == "addToCart") {

        const itemExist = state.cart.find(item => item.id == actions.payload.guitar.id)
        let cartUpdate: GuitarItem[] = []
        if (itemExist) {
            cartUpdate = state.cart.map(item => {
                if (item.id === actions.payload.guitar.id) {
                    if (item.quantity < 10) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                }
                else {
                    return item
                }
            })
        } else {
            const updateCart: GuitarItem = { ...actions.payload.guitar, quantity: 1 }
            cartUpdate = [...state.cart, updateCart]
        }

        return {
            ...state,
            cart: cartUpdate
        }


    }

    if (actions.type == "removeCart") {


        return {
            ...state,
            cart: state.cart.filter(item => item.id !== actions.payload.id)
        }
    }

    if (actions.type == "incrementQuantity") {

        const updateCart = state.cart.map(item => {
            if (item.id === actions.payload.id && item.quantity < 10) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }

            return item
        })
        return {
            ...state,
            cart: updateCart
        }
    }

    if (actions.type == "decrementQuantity") {
        const updateCart = state.cart.map(item => {
            if (item.id === actions.payload.id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        return {
            ...state,
            cart: updateCart
        }
    }

    if (actions.type == "clearCart") {
        return {
            ...state,
            cart: []
        }
    }
    return state
}