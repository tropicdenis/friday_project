import { Dispatch } from "redux";
import { authAPI, RegistrationDataType } from "../api/cardsApi";
import {setAppStatusAC} from "./app_reducer";


export enum AUTH_ACTIONS_TYPE {
	SET_REGISTRATION_DATA = "SET_REGISTRATION_DATA",
	SET_RESPONSE_ERROR = "SET_RESPONSE_ERROR"
}

let initialState = {
	isRegistration: false,
	responseError: ''
}

type InitialStateType = typeof initialState;

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {
		case AUTH_ACTIONS_TYPE.SET_REGISTRATION_DATA:
			return { ...state, isRegistration: action.isRegistration }
		case AUTH_ACTIONS_TYPE.SET_RESPONSE_ERROR:
			return { ...state, responseError: action.responseError }
		default:
			return { ...state };
	}
}

// actions

export const setRegistrationData = (isRegistration: boolean) => ({ type: AUTH_ACTIONS_TYPE.SET_REGISTRATION_DATA, isRegistration } as const)
export const setResponseError = (responseError: string) => ({ type: AUTH_ACTIONS_TYPE.SET_RESPONSE_ERROR, responseError } as const)

//thunks

export const registrationTC = (data: RegistrationDataType) => (dispatch: Dispatch) => {
	dispatch(setAppStatusAC('loading'))
	authAPI.registration(data).then(res => {
		dispatch(setRegistrationData(true))
		dispatch(setAppStatusAC('succeeded'))
	}).catch((error: ErrorDataType) => {
		dispatch(setResponseError(error.response.data.error))
	})
}

export type ActionsType =
	ReturnType<typeof setRegistrationData> |
	ReturnType<typeof setResponseError>

export type ErrorDataType = {
	response: {
		data: ErrorRegistration
	}
}

export type ErrorRegistration = {
	emailRegExp: {},
	error: string
	in: string
	isEmailValid: boolean
	isPassValid: boolean
	passwordRegExp: string
}
