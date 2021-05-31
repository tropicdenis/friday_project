import {Dispatch} from "redux";
import {authAPI, LoginType} from "../api/cardsApi";

export const initialState = {
    isLoggedIn: false,
    isInitialized: false
}
// actionCreater
export const loginReducer = (state: InitialStateLoginType = initialState, action: ActionType): InitialStateLoginType => {
    switch (action.type) {
        case "LOGIN/SET-LOGIN-DATA":
            return {...state, isLoggedIn: action.value}
        case "LOGIN/INITIALIZED-APP":
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

//action
export const setLoginDataAC = (value: boolean) =>
    ({type: "LOGIN/SET-LOGIN-DATA", value} as const)
export const setInitializeAppAC = (isInitialized: boolean) =>
    ({type: "LOGIN/INITIALIZED-APP", isInitialized} as const)


//Thunks
export const loginTC = (data: LoginType) => (dispatch: Dispatch<ActionType>) => {
    authAPI.login(data)
        .then((res) => {
            dispatch(setLoginDataAC(true))
        })
}

//Types
export type ActionType =
    ReturnType<typeof setLoginDataAC>
    | ReturnType<typeof setInitializeAppAC>

export type InitialStateLoginType = typeof initialState