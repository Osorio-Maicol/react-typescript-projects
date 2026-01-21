export type GuitarT = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
}

export type GuitarItem = Pick<GuitarT, "id" | "name" | "image" | "description" | "price"> & {
    quantity : number
}