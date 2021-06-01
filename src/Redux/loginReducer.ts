import {Dispatch} from "redux";
import {authAPI, LoginType, ResponseType} from "../api/cardsApi";

export const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    dataLogin: {
        _id: "",
        email: "",
        name: "",
        avatar: null as string | null,
        publicCardPacksCount: 0,
        created: "",
        updated: "",
        isAdmin: false,
        verified: false,
        rememberMe: false,
        error: ""
    }
}

export const loginReducer = (state: InitialStateLoginType = initialState, action: ActionType): InitialStateLoginType => {
    switch (action.type) {
        case "LOGIN/SET-LOGIN-DATA":
            return {...state, isLoggedIn: action.value}
        case "LOGIN/INITIALIZED-APP":
            return {...state, isInitialized: action.isInitialized}
        case "LOGIN/SET-DATA":
            return {...state, dataLogin: action.data}
        default:
            return state
    }
}

//Action
export const setLoginDataAC = (value: boolean) =>
    ({type: "LOGIN/SET-LOGIN-DATA", value} as const)
export const setInitializeAC = (isInitialized: boolean) =>
    ({type: "LOGIN/INITIALIZED-APP", isInitialized} as const)
export const setDataAC = (data: ResponseType) =>
    ({type: "LOGIN/SET-DATA", data} as const)


//Thunks
export const loginTC = (data: LoginType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then((res) => {
            dispatch(setLoginDataAC(true))
            dispatch(setDataAC(res.data))
        })
}

//Types
export type ActionType =
    ReturnType<typeof setLoginDataAC>
    | ReturnType<typeof setInitializeAC>
    | ReturnType<typeof setDataAC>

export type InitialStateLoginType = typeof initialState