import {TodoList} from "../../models/TodoList";
import {Add, Delete, GetAll, TodoListAction, Update, AddError, RemoveError} from "../Actions/TodoList";

export interface TodoListState {
  errorMessage: string,
  todoList: TodoList[]
  status: 'loading' | 'sucess' | 'error'
}

export const todoListReducer = (state:TodoListState, action:TodoListAction):TodoListState  => {
  switch (action.type) {
    case GetAll:
      return {
        ...state,
        todoList: action.payload.todoList,
        status: "sucess"
      };
    case Add:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload.todoList),
        status: "sucess"
      };
    case Update:
      return {
        ...state,
        todoList: action.payload.todoList,
        status: "sucess"
      };
    case Delete:
      return {
        ...state,
        todoList: action.payload.todoList,
        status: "sucess"
      };
    case AddError:
      return {
        ...state,
        errorMessage: action.payload.error,
        status: "error"
      };
    case RemoveError:
      return {
        ...state,
        errorMessage: "",
        status: "error"
      };
    default:
      return state;
  }
}
