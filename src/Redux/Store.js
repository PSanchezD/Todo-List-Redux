import { createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoReducer } from "./todo_post/todo_Reducer";

const rootReducer = combineReducers({
    Todo:  TodoReducer
})

const Store = createStore(rootReducer, composeWithDevTools() )

export default Store