import * as actionTypes from "./todo_types";

const todo_state = {
  list: [{
    id:1,
    text:"hloow"
  }],
};

export const TodoReducer = (state = todo_state, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return  {
        ...state,
        list: [...state.list, action.payload]
      }
    case actionTypes.REMOVE_POST:
      return {
        ...state,
        list: state.list.filter(x => x.id !== action.payload),
      };
    default:
      return state;
  }
};
