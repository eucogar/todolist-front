import {TodoList} from "../../models/TodoList";

export type TodoListAction =
  | {type: 'getAll', payload: {todoList: TodoList[]}}
  | {type: 'add', payload: {todoList: TodoList}}
  | {type: 'delete', payload: {todoList: TodoList[]}}
  | {type: 'update', payload: {todoList: TodoList[]}}
  | {type: 'addError', payload: {error: string}}
  | {type: 'removeError'}

export const GetAll = 'getAll';
export const Add = 'add';
export const AddError = 'addError';
export const RemoveError = 'removeError';
export const Delete = 'delete';
export const Update = 'update';
