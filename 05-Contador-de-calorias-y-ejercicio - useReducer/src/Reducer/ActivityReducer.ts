import type { Activity } from "../types"


export type ActivityActions =
    { type: "save-activity", payload: { newActivitiy: Activity } }

type Activityt = {
    activities: Activity[]
}

export const ActivityState: Activityt = {
    activities: []
}

export const ActivityReducer = (
    state: Activityt = ActivityState,
    actions: ActivityActions
) => {


    if (actions.type == "save-activity") {
        return {
            ...state,
            activities: [...state.activities, actions.payload.newActivitiy]
        }
    }


    return state
}