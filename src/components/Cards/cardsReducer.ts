import {Dispatch} from "redux";
import {setAppStatusAC} from "../../Redux/app_reducer";
import {cardsPackAPI} from "../../api/cardsApi";

export enum ACTION_TYPES {
    GET_CARDS = "GET_CARDS"
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
    maxGrade: "",
    minGrade: "",
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
            return {...state, cards: action.data.cards }
        default:
            return state
    }
}
//Action
export const getCardsAC = (data: InitialStateCards) => ({type:ACTION_TYPES.GET_CARDS, data})

//Thunk
export const getCardsTC = (cardsPack_id: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    cardsPackAPI.getCards(cardsPack_id)
        .then(res => {
            dispatch(getCardsAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setAppStatusAC('succeeded'))
        })
}