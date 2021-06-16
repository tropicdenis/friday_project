import { Dispatch } from '@reduxjs/toolkit';
import { CardsPackCreateType, CardsPackUpdateType, packsAPI } from '../api/cardsApi';
import { setAppStatusAC } from './app_reducer';
import { AppThunk } from './redux_store';

export enum ACTION_TYPES {
	GET_PACKS_PACK = 'GET_PACKS_PACK',
	SEARCH_NAME = "SEARCH_NAME"
}

const initialState = {
	cardPacks: [
		{
			_id: '',
			user_id: '',
			name: '',
			cardsCount: 0,
			created: '',
			updated: ''
		}
	],
	cardPacksTotalCount: 0,
	maxCardsCount: 0,
	minCardsCount: 0,
	page: 1,
	pageCount: 0
}

export type initialCardsStateType = typeof initialState;

//Reducer
export const packsReducer = (state: initialCardsStateType = initialState, action: CardsPackActionType): initialCardsStateType => {
	switch (action.type) {
		case ACTION_TYPES.GET_PACKS_PACK:
			return action.data
				/*...state, ...action.data, cardPacks: action.data.cardPacks.map(pack => ({ ...pack }))*/

		case ACTION_TYPES.SEARCH_NAME: {
			return {...state, cardPacks: state.cardPacks.filter(card => card.name === action.name)}
		}
		default:
			return state
	}
}
//Action
export const getAllCardsPackAC = (data: initialCardsStateType) => ({ type: ACTION_TYPES.GET_PACKS_PACK, data }as const)
export const setSearchNameAC = (name: string) => ({type: ACTION_TYPES.SEARCH_NAME, name}as const)

//Thunk
export const getCardsPackTC = (pageNumber: number) => (dispatch: Dispatch) => {
	dispatch(setAppStatusAC('loading'))
	packsAPI.getCardsPack(pageNumber, 10).then(res => {
		dispatch(getAllCardsPackAC(res.data))
		dispatch(setAppStatusAC('succeeded'))
	}).catch(err => {
		dispatch(setAppStatusAC('succeeded'))
	})
}

export const createCardsPackTC = (cardsPack: CardsPackCreateType, page: number): AppThunk => dispatch => {
	dispatch(setAppStatusAC('loading'))
	packsAPI.createPack(cardsPack).then(res => {
		dispatch(getCardsPackTC(page))
		dispatch(setAppStatusAC('succeeded'))
	}).catch(err => {
		dispatch(setAppStatusAC('succeeded'))
	})
}

export const deleteCardsPackTC = (packsId: string, page: number): AppThunk => dispatch => {
	dispatch(setAppStatusAC('loading'))
	packsAPI.deletePack(packsId).then(res => {
		dispatch(getCardsPackTC(page))
		dispatch(setAppStatusAC('succeeded'))
	}).catch(err => {
		dispatch(setAppStatusAC('succeeded'))
	})
}
export const updateCardsPackTC = (cardsPack: CardsPackUpdateType, page: number): AppThunk => dispatch => {
	dispatch(setAppStatusAC('loading'))
	packsAPI.updatePack(cardsPack).then(res => {
		dispatch(getCardsPackTC(page))
		dispatch(setAppStatusAC('succeeded'))
	}).catch(err => {
		dispatch(setAppStatusAC('succeeded'))
	})
}

export type CardsPackActionType =
	ReturnType<typeof getAllCardsPackAC>
	| ReturnType<typeof setSearchNameAC>
