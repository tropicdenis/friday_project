import { Dispatch } from "redux";
import { setAppStatusAC } from "./app_reducer";
import { cardsAPI, CardType, UpdateCardType } from "../api/cardsApi";
import { AppThunk } from "./redux_store";

export enum ACTION_TYPES {
    GET_CARDS = "GET_CARDS",
    CREATE_CARD = "CREATE_CARD"
}
let initialState = {
    cards: [
        {
            answer: "",
            question: "",
            cardsPack_id: "",
            grade: "",
            shots: 1,
            user_id: "",
            created: "",
            updated: "",
            _id: ""
        }
    ],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: ""
}


export type InitialStateCards = typeof initialState
export type CardsActionType = ReturnType<typeof getCardsAC>

//Reducer
export const cardsReducer = (state: InitialStateCards = initialState, action: CardsActionType): InitialStateCards => {
    switch (action.type) {
        case ACTION_TYPES.GET_CARDS:

            return { ...state, ...action.data, cards: action.data.cards.map(card => ({ ...card })) }
        default:
            return state
    }
}
//Action
export const getCardsAC = (data: InitialStateCards) => ({ type: ACTION_TYPES.GET_CARDS, data })

//Thunk
export const getCardsTC = (cardsPack_id: string): AppThunk => dispatch => {
    dispatch(setAppStatusAC('loading'))
    cardsAPI.getCardsPack(cardsPack_id)
        .then(res => {
            dispatch(getCardsAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setAppStatusAC('succeeded'))
        })
}
export const createCardTC = (card: CardType, cardsPack_id: string): AppThunk => dispatch => {
    dispatch(setAppStatusAC('loading'))
    cardsAPI.createCard(card)
        .then(res => {
            dispatch(getCardsTC(cardsPack_id))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setAppStatusAC('succeeded'))
        })
}
export const deleteCardTC = (cardId: string, cardsPack_id: string): AppThunk => dispatch => {
    dispatch(setAppStatusAC('loading'))
    cardsAPI.deleteCard(cardId)
        .then(res => {
            dispatch(getCardsTC(cardsPack_id))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setAppStatusAC('succeeded'))
        })
}
export const updateCardTC = (card: UpdateCardType, cardsPack_id: string): AppThunk => dispatch => {
    dispatch(setAppStatusAC('loading'))
    cardsAPI.updateCard(card)
        .then(res => {
            dispatch(getCardsTC(cardsPack_id))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setAppStatusAC('succeeded'))
        })
}