import { useEffect, useMemo, useState } from "react"
import { db } from "../Data/db"

const useCart = () => {

    const initialCart = () => {
        const cartStorage = localStorage.getItem("cart")
        return cartStorage ? JSON.parse(cartStorage) : []
    }
    const [data, setData] = useState(db)
    const [cart, setCart] = useState(initialCart)


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (guitar) => {

        const itemExist = cart.findIndex(item => item.id == guitar.id)
        if (itemExist >= 0) {
            if (cart[itemExist].quantity < 10) {

                const itemUpdate = [...cart]
                itemUpdate[itemExist].quantity++
                setCart(itemUpdate)
            }
        } else {
            guitar.quantity = 1
            setCart([...cart, guitar])
        }

    }

    const removeCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const incrementQuantity = (id) => {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity < 10) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }

            return item
        })

        setCart(updateCart)
    }

    const decrementQuantity = (id) => {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })

        setCart(updateCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const isEmpty = useMemo(() => cart.length == 0, [cart])
    const carTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0, [cart]))
    return {
        data,
        cart,
        addToCart,
        removeCart,
        incrementQuantity, 
        decrementQuantity, 
        clearCart,
        isEmpty,
        carTotal
    }
}

export default useCart