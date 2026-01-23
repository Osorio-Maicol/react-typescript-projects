import type { MenuItems } from "../types"
import { formarCurrency } from "../helpers/format"

type MenuProps = {
  item: MenuItems
  addOrder: (item: MenuItems) => void
}

export const Menu = ({ item, addOrder }: MenuProps) => {
  return (
    <button
      onClick={() => addOrder(item)}
      className="
        w-3/4 bg-white rounded-xl p-4
        flex justify-between items-center
        shadow-md hover:shadow-lg
        hover:bg-green-50
        transition-all duration-300
        cursor-pointer
      "
    >
      <p className="text-lg font-medium">
        {item.name}
      </p>

      <span className="font-bold text-green-600">
        {formarCurrency(item.price)}
      </span>
    </button>
  )
}
