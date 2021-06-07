import { applyMiddleware, combineReducers, createStore } from "redux";
import { loginReducer } from "./loginReducer";
import { passwordRecoveryReducer } from "./passwordRecoveryReducer";
import {appReducer} from "./app_reducer";
import thunkMiddleware from "redux-thunk";
import { registrationReducer } from "./registrationReducer";
import authReducer from "./authReducer";


let rootReducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer,
    isAuth: authReducer
});


export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));