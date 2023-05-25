import React, {useEffect} from "react";
import {createContext, useReducer} from "react";
import {TodoList} from "../models/TodoList";
import {todoListReducer, TodoListState} from "../store/reducer/TodoList";
import services from "../services/TodoListService"
import getUserId from "../services/storage";

type contextProps = {
  todoList: TodoList[];
  stateTodoList: TodoListState
  getAll: () =>  void;
  Add: (todoList: TodoList) => void;
  Delete: (id: number) =>  void;
  Update: (todoList: TodoList, id: number) =>  void;
  RemoveError : () => void,
  AddError : (error: string) => void
}

const inicialState: TodoListState = {
  errorMessage: '',
  todoList: [] as TodoList[],
  status: 'loading'
}

export const TodoListContext = createContext({} as contextProps)

export const TodoListProvider = ({children}: {children: JSX.Element | JSX.Element[]} ) => {
  
  const [ stateTodoList, dispatch ] = useReducer( todoListReducer, inicialState );
  const {get, update, unavilitable, create} = services
  const {todoList} = stateTodoList
  
  useEffect(()=>{
    console.log(stateTodoList)
  },[stateTodoList])
  
  const getAll = async () => {
    try {
  
      const idUser = getUserId()
      const response = await get(idUser)
      dispatch({type:"getAll", payload: {todoList: response}})
    }catch (e:any){
      dispatch({type:"addError", payload: {error: e.err.response.data}})
    }
  }
  const Add = async (data: TodoList) => {
    console.log(data)
    data.idUser = getUserId()
    try {
      const response = await create(data)
      dispatch({type:"add", payload: {todoList: response}})
    }catch (e:any){
      dispatch({type:"addError", payload: {error: e.err.response.data}})
    }
  }
  const Delete = async (id:number) => {
    try {
      console.log(id)
      const response = await unavilitable(id)
      let newList = todoList.filter(x=>x.id !== id)
      dispatch({type:"delete", payload: {todoList: newList}})
    }catch (e:any){
      dispatch({type:"addError", payload: {error: e.err.response.data}})
    }
  }
  const Update = async (data: TodoList, id: number) => {
    try {
      data.idUser = getUserId()
      const response = await update(data, id)
      let newList = todoList.filter(x=>x.id !== id)
      newList.push(response)
      dispatch({type:"update", payload: {todoList: newList}})
    }catch (e:any){
      dispatch({type:"addError", payload: {error: e.err.response.data}})
    }
  }
  
  const RemoveError = () =>{
    dispatch({type: "removeError"})
  }
  
  const AddError = (error: string) =>{
    dispatch({type: "addError", payload:{error: error}})
  }
  return (
    <TodoListContext.Provider value={{...stateTodoList, stateTodoList, getAll , Add, Delete, Update, RemoveError, AddError}}>
      {children}
    </TodoListContext.Provider>
)
}
