export type MenuItems = {
    id: number,
    name: string,
    price: number
}

export type OrderItems = MenuItems & {
    quantity: number
}

export type Tip = {
    id: string,
    value: number,
    label: string
}