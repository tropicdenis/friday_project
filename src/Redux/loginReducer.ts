import {Dispatch} from "redux";
import {authAPI, LoginType, ResponseType} from "../api/cardsApi";
import {setResponseError} from "./registrationReducer";

export const initialState = {
    isLoggedIn: false,
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
    },
    responseError: ""
}

export const loginReducer = (state: InitialStateLoginType = initialState, action: ActionType): InitialStateLoginType => {
    switch (action.type) {
        case "LOGIN/SET-LOGIN-DATA":
            return {...state, isLoggedIn: action.value}
        case "LOGIN/SET-DATA":
            return {...state, dataLogin: action.data}
        case "LOGIN/SET-RESPONSE-ERROR":
            return {...state, responseError: action.responseError}
        default:
            return state
    }
}

//Action
export const setLoginDataAC = (value: boolean) =>
    ({type: "LOGIN/SET-LOGIN-DATA", value} as const)
export const setDataResponseAC = (data: ResponseType) =>
    ({type: "LOGIN/SET-DATA", data} as const)
export const setResponseErrorAC = (responseError: string) =>
    ({type: "LOGIN/SET-RESPONSE-ERROR", responseError} as const)

//Thunks
export const loginTC = (data: LoginType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then((res) => {
            dispatch(setLoginDataAC(true))
            dispatch(setDataResponseAC(res.data))
        })
        .catch((error: ErrorDataType) => {
            dispatch(setResponseError(error.response.data.error))
        })
}

//Types
export type ActionType =
    ReturnType<typeof setLoginDataAC>
    | ReturnType<typeof setDataResponseAC>
    | ReturnType<typeof setResponseErrorAC>

export type InitialStateLoginType = typeof initialState

type ErrorDataType = {
    response: {
        data: ErrorRegistration
    }
}

type ErrorRegistration = {
    emailRegExp: {},
    error: string
    in: string
    isEmailValid: boolean
    isPassValid: boolean
    passwordRegExp: string
}