import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import appReducer from "./app_reducer";
import thunkMiddleware from "redux-thunk";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    app: appReducer
});


export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));