

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./AppReducer/reducer";
// import { reducer as authReducer } from "./AuthReducer/reducer";

let rootReducer = combineReducers({appReducer})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store };