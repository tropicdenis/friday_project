import { Dispatch } from "redux";
import { authAPI } from "../api/cardsApi";
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
	authAPI.isAuth().then(res => {

	}
	).catch((error: ErrorDataType) => {
		return error.response.data.error
	})


}


export default authReducer;