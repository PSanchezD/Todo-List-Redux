import { createStore } from "redux";
import { combineReducers } from "redux";
import Reducer from "./reducer";

const rootReducer = combineReducers(Reducer)

const Store = createStore(rootReducer)

export default Store