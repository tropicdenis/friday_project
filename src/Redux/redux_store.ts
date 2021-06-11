import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer, LoginReducerActionType} from "./loginReducer";
import {passwordRecoveryReducer, PasswordRecoveryReducerActionsType} from "./passwordRecoveryReducer";
import {appReducer, AppReducerActionType} from "./app_reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {registrationReducer, RegistrationReducerActionsType} from "./registrationReducer";
import authReducer, {ProfileActionsType} from "./authReducer";
import {CardsPackActionType, packsReducer} from "./packsReducer";
import {CardsActionType, cardsReducer} from "../components/Cards/cardsReducer";
import {SearchActionType, searchReducer} from "../components/Search/searchReducer";


let rootReducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer,
    isAuth: authReducer,
    packs: packsReducer,
    cards: cardsReducer
});


type AppActionType = AppReducerActionType
    | ProfileActionsType
    | CardsPackActionType
    | LoginReducerActionType
    | PasswordRecoveryReducerActionsType
    | RegistrationReducerActionsType
    | CardsActionType
    | SearchActionType


export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppThunk = ThunkAction<void, AppStateType, unknown, AppActionType>