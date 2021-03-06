import { Dispatch } from "redux";
import { authAPI } from "../api/cardsApi";
import { setAppStatusAC } from "./app_reducer";
import { setDataResponseAC, setLoginDataAC, setResponseTokenAC } from "./loginReducer";
import { ErrorDataType } from "./registrationReducer";


export enum ACTION_TYPES {
    IS_AUTH = "IS_AUTH"
}

export type ProfileActionsType = ReturnType<typeof setIsAuth>

let initialState = {
    isAuth: false
};

type initialStateType = typeof initialState;

const authReducer = (state: initialStateType = initialState, action: ProfileActionsType): initialStateType => {
    switch (action.type) {
        case ACTION_TYPES.IS_AUTH:
            return {
                ...state, isAuth: action.isAuth
            };
        default:
            return state
    }
}

export const setIsAuth = (isAuth: boolean) => ({ type: ACTION_TYPES.IS_AUTH, isAuth } as const)

export const isAuthTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.isAuth()
        .then(res => {
            dispatch(setDataResponseAC(res.data))
            dispatch(setLoginDataAC(true))
            dispatch(setResponseTokenAC(res.data.token))
            dispatch(setAppStatusAC('succeeded'))
        }
        )
        .catch((error: ErrorDataType) => {
            dispatch(setLoginDataAC(false))
            dispatch(setAppStatusAC('succeeded'))
        })
}

export default authReducer;