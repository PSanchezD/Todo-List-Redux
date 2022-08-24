import { combineReducers } from 'redux'
import {TodoReducer} from './todo_post/todo_Reducer'

const rootReducer = combineReducers({
    Todo:  TodoReducer
})

export default rootReducer