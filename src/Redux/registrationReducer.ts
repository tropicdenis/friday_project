import { Dispatch } from "redux";
import { authAPI, RegistrationDataType } from "../api/cardsApi";


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
	authAPI.registration(data).then(res => {
		dispatch(setRegistrationData(true))
	}).catch((error: ErrorDataType) => {
		debugger
		dispatch(setResponseError(error.response.data.error))
	})
}

type ActionsType =
	ReturnType<typeof setRegistrationData> |
	ReturnType<typeof setResponseError>

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
