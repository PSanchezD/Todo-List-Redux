import * as types from './todo_types'

export const ADDPOST = (text)=>{
    return{
        type:types.ADD_POST,
        payload:{
            text: text
        }
    }
}

export const REMOVEPOST = (listID)=>{
    return {
        type:types.REMOVE_POST,
        payload: {
            id:listID
        }
        
    }
}