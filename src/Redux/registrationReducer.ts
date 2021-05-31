import { Dispatch } from "redux";
import { authAPI, RegistrationDataType } from "../api/cardsApi";


export enum AUTH_ACTIONS_TYPE {
	SET_REGISTRATION_DATA = "SET_REGISTRATION_DATA"
}

let initialState = {
	isRegistration: false
}

type InitialStateType = typeof initialState;

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {
		case AUTH_ACTIONS_TYPE.SET_REGISTRATION_DATA:
			return { ...state, isRegistration: action.isRegistration }
		default:
			return { ...state };
	}

}

// actions

export const setRegistrationData = (isRegistration: boolean) => ({ type: AUTH_ACTIONS_TYPE.SET_REGISTRATION_DATA, isRegistration } as const)

//thunks

export const registrationTC = (data: RegistrationDataType) => (dispatch: Dispatch) => {
	authAPI.registration(data).then(res => {
		dispatch(setRegistrationData(true))
		return res.data
	}).catch((error: string) => {

		console.log(error);
	})
}

type ActionsType =
	ReturnType<typeof setRegistrationData>


type ErrorRegistration = {
	emailRegExp: {},
	error: string
	in: string
	isEmailValid: boolean
	isPassValid: boolean
	passwordRegExp: string
}
