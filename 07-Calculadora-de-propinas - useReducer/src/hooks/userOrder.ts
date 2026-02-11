import { useState } from "react";
import type { OrderItems } from "../types";


export const useOrder = () => {

    const [ tip, setTip] = useState(0)

    

    return {
        tip,
        setTip,
    }
}