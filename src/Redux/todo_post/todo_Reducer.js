import * as actionTypes from "./todo_types";

const todo_state = {
  list: ["to test"],
};

export const TodoReducer = (state = todo_state, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        list: [...state.list, action.text]
      }
    case actionTypes.REMOVE_POST:
      return {
        ...state,
        list: state.list.filter((x) => x.id !== action.id)
      } 
    default:
      return state;
  }
};
