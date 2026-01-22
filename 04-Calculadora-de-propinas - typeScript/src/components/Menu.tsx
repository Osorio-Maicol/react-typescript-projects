import type { MenuItems } from "../types"

type MenuProps = {
    item: MenuItems
    addOrder: (item: MenuItems) => void
}
export const Menu = ({item, addOrder}: MenuProps)=>{

    return(

        <button className="flex ring-1 w-3/4 p-2 rounded-xl hover:bg-green-400/50 cursor-pointer hover:outline-1 hover:outline-green-950 items-center justify-between" onClick={()=>addOrder(item)}>
            <p>{item.name}</p>
            <span className="font-bold text-green-800 underline">{`$${item.price}`}</span>
        </button>
        
    )
}