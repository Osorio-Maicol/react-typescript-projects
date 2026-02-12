import type { Dispatch } from "react"
import { tipOptions } from "../data/db"
import type { orderActions } from "../Reducers/order-reducer"

type OrderTipProps = {
  tip: number
  dispatch: Dispatch<orderActions>
}

export const OrderTip = ({ dispatch, tip }: OrderTipProps) => {
  return (
    <div className="w-3/4 bg-white rounded-xl p-4 shadow-md flex flex-col items-center gap-4">
      
      <h3 className="font-bold text-2xl capitalize">
        propina
      </h3>

      <div className="flex gap-6">
        {tipOptions.map(item => (
          <label
            key={item.id}
            htmlFor={item.id}
            className="
              flex items-center gap-2 cursor-pointer
              px-3 py-1 rounded-lg
              hover:bg-green-50
              transition-all
            "
          >
            <input
              type="radio"
              id={item.id}
              name="tip"
              value={item.value}
              checked={item.value === tip}
              onChange={e => dispatch({type: "addTip", payload: {tip: +e.target.value}})}
              className="accent-green-500 cursor-pointer"
            />
            <span className="font-medium">
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}
