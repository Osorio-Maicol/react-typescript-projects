import {  createContext, useReducer, type Dispatch, type ReactNode } from "react"
import { butgetReducer, initialState, type butgetActions, type butgetState } from "../reducers/butger-reducer"

export type butgetContextProps = {
    state: butgetState
    dispatch: Dispatch<butgetActions>
}

export type butgetProviderProps = {
    children: ReactNode
}

export const ButgetContext = createContext<butgetContextProps>({} as butgetContextProps )

export const ButgetProvider = ({children}: butgetProviderProps)=>{

    const [state, dispatch] = useReducer(butgetReducer, initialState)

    return (
        <ButgetContext.Provider
            value={{
                state,
                dispatch
            }}        
        >
            {children}
        </ButgetContext.Provider>
    )
}