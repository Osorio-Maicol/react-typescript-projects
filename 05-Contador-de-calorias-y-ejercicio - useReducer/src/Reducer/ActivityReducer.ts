import type { Activity } from "../types"


export type ActivityActions =
    { type: "save-activity", payload: { newActivitiy: Activity } } |
    { type: "update-activity", payload : {id: Activity["id"]}} | 
    { type: "delete-activity", payload: {id: Activity["id"]}}

export type Activityt = {
    activities: Activity[]
    activityId: Activity["id"]
}

const initialStorage = ():Activity[]=>{
    const initialState = localStorage.getItem("activity")
    return initialState? JSON.parse(initialState) : [] 
}

export const ActivityState: Activityt = {
    activities: initialStorage(),
    activityId : ""
}

export const ActivityReducer = (
    state: Activityt = ActivityState,
    actions: ActivityActions
) => {


    if (actions.type == "save-activity") {

        let updateActivity : Activity[] = []
        if(state.activityId){
            updateActivity = state.activities.map(item=> item.id == state.activityId? actions.payload.newActivitiy : item)
        }else{
            updateActivity =  [...state.activities, actions.payload.newActivitiy]
        }
        return {
            ...state,
            activities: updateActivity,
            activityId : ""
        }
    }

    if(actions.type == "update-activity"){
        return{
            ...state,
            activityId : actions.payload.id
        }
    }

    if(actions.type == "delete-activity"){
        return{
            ...state,
            activities: state.activities.filter(item=> item.id !== actions.payload.id)
        }
    }


    return state
}