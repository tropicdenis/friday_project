import { Dispatch } from '@reduxjs/toolkit';
import React from 'react';
import { cardsPackAPI } from '../api/cardsApi';
import { AppThunk } from './redux_store';


export enum ACTION_TYPES {
	GET_CARDS_PACK = 'GET_CARDS_PACK'
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
	page: 0,
	pageCount: 0
}

export type initialCardsStateType = typeof initialState;


export const cardsReducer = (state: initialCardsStateType = initialState, action: CardsPackActionType): initialCardsStateType => {
	switch (action.type) {
		case ACTION_TYPES.GET_CARDS_PACK:

			return {
				...state, cardPacks: action.data.cardPacks.map(pack => ({ ...pack }))
			}
		default:
			return state
	}
}


export const getAllCardsPackAC = (data: initialCardsStateType) => ({ type: ACTION_TYPES.GET_CARDS_PACK, data })



export const getCardsPackTC = () => (dispatch: Dispatch) => {
	cardsPackAPI.getCardsPack().then(res => {
		dispatch(getAllCardsPackAC(res.data))
	}).catch(err => {
	})
}

export const createCardsPackTC = (cardsPack: any): AppThunk => dispatch => {
	cardsPackAPI.createCardsPack(cardsPack).then(res => {
		dispatch(getCardsPackTC())
	}).catch(err => {
	})
}

export const deleteCardsPackTC = (packsId: string): AppThunk => dispatch => {
	cardsPackAPI.deleteCardsPack(packsId).then(res => {
		dispatch(getCardsPackTC())
	}).catch(err => {
	})
}

export type CardsPackActionType = ReturnType<typeof getAllCardsPackAC>