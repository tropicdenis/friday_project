
//Types
export type RequestStatusType = 'loading' | 'succeeded'

const initialState = {
    status: 'loading' as RequestStatusType
}
type InitialStateType = typeof initialState
type ActionType = SetAppStatus
export type SetAppStatus = ReturnType<typeof setAppStatusAC>

//Reducer
export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status};
        default :
            return state
    }
}

//Action
export const setAppStatusAC = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}

