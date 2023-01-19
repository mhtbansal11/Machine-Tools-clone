

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./AppReducer/reducer";
// import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as cartReducer} from "./CartReducer/reducer";

let rootReducer = combineReducers({appReducer,cartReducer})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store };