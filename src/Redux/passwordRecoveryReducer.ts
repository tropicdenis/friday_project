import {Dispatch} from "redux";
import {authAPI, PasswordRecoveryDataType} from "../api/cardsApi";

export enum RECOVERY_ACTIONS_TYPE {
	SET_RECOVERY_FlAG = "SET_RECOVERY_FlAG",
	SET_RESPONSE_ERROR = "SET_RESPONSE_ERROR"
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
		case RECOVERY_ACTIONS_TYPE.SET_RESPONSE_ERROR:
			return { ...state, responseError: action.responseError }
		default:
			return state;
	}
}

// actions

export const setRecoveryFlag = (isRecovered: boolean) => ({ type: RECOVERY_ACTIONS_TYPE.SET_RECOVERY_FlAG, isRecovered } as const)
export const setResponseError = (responseError: string) => ({ type: RECOVERY_ACTIONS_TYPE.SET_RESPONSE_ERROR, responseError } as const)

//thunks

export const passwordRecoveryThunk = (recoveryData: PasswordRecoveryDataType) => (dispatch: Dispatch) => {
	authAPI.passwordRecovery(recoveryData).then(res => {
		dispatch(setRecoveryFlag(true))
	}).catch((error: ErrorDataType) => {
		dispatch(setResponseError(error.response.data.error))
	})
}

type ActionsType =
	ReturnType<typeof setRecoveryFlag> |
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
