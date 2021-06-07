import { Dispatch } from "redux";
import { authAPI, PasswordRecoveryDataType } from "../api/cardsApi";
import { ErrorDataType } from "./registrationReducer";
import {setAppStatusAC} from "./app_reducer";

export enum RECOVERY_ACTIONS_TYPE {
    SET_RECOVERY_FlAG = "SET_RECOVERY_FlAG",
    SET_RESPONSE_ERROR_PASSWORD = "SET_RESPONSE_ERROR_PASSWORD"
}

let initialState = {
    isRecovered: false,
    responseError: ''
}

type InitialStateType = typeof initialState;

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case RECOVERY_ACTIONS_TYPE.SET_RECOVERY_FlAG:
            return { ...state, isRecovered: action.isRecovered }
        case RECOVERY_ACTIONS_TYPE.SET_RESPONSE_ERROR_PASSWORD:
            return { ...state, responseError: action.responseError }
        default:
            return state;
    }
}

// actions

export const setRecoveryFlag = (isRecovered: boolean) => ({
    type: RECOVERY_ACTIONS_TYPE.SET_RECOVERY_FlAG,
    isRecovered
} as const)
export const setResponseErrorPassword = (responseError: string) => ({
    type: RECOVERY_ACTIONS_TYPE.SET_RESPONSE_ERROR_PASSWORD,
    responseError
} as const)

//thunks

export const passwordRecoveryThunk = (recoveryData: PasswordRecoveryDataType) => (dispatch: Dispatch) => {
    authAPI.passwordRecovery(recoveryData).then(res => {
        dispatch(setAppStatusAC('loading'))
        dispatch(setRecoveryFlag(true))
        dispatch(setAppStatusAC('succeeded'))
    }).catch((error: ErrorDataType) => {
        dispatch(setResponseErrorPassword(error.response.data.error))
    })
}

export const setNewPasswordTC = (data: setNewPasswordTCType) => (dispatch: Dispatch) => {
    authAPI.setNewPassword(data).then(res => {
    }).catch(err => {
    })
}

type setNewPasswordTCType = {
    newPassword: string
    token: string
}

type ActionsType =
    ReturnType<typeof setRecoveryFlag>
    | ReturnType<typeof setResponseErrorPassword>


