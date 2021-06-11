export enum ACTION_TYPES {
    SEARCH_VALUE = "SEARCH_VALUE"
}
const initialState = {
    searchValue: ""
}
export type InitialStateSearch = typeof initialState
export type SearchActionType = ReturnType<typeof setSearchValueAC>

//Reducer
export const searchReducer = (state: InitialStateSearch, action: SearchActionType): InitialStateSearch => {
    switch (action.type) {
        case ACTION_TYPES.SEARCH_VALUE: {
            return {...state, searchValue: action.searchValue}
        }
        default:
            return state
    }
}
//Action
export const setSearchValueAC = (searchValue: string) => ({type: ACTION_TYPES.SEARCH_VALUE, searchValue})
