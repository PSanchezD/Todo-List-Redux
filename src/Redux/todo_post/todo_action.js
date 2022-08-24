import * as types from './todo_types'


export const ADDPOST = (text)=>{
    return{
        type:types.ADD_POST,
        payload: {
            text:text,
            id: Date.now()
        }
    }
}

export const REMOVEPOST = (state)=>{
    return {
        type:types.REMOVE_POST,
        payload: state
    }
}