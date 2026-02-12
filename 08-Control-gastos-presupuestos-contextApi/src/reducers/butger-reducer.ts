export type butgetActions =
    { type: "add-butget", payload: { butget: number } }


export type butgetState = {
    butget: number
}

export const initialState: butgetState = {
    butget: 0
}

export const butgetReducer = (
    state: butgetState = initialState,
    action: butgetActions
) => {

    if (action.type == "add-butget") {
        return {
            ...state,
            butget: action.payload.butget
        }
    }

    return state

}