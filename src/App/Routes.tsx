import React, {lazy, useContext} from 'react'
import {BrowserRouter as Router, Routes as Switch, Route, Navigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {AppState, AuthState} from "./App";

export const Login = lazy(() => import('../pages/login'))
export const Register = lazy(() => import('../pages/register'))
export const TodoList = lazy(() => import('../pages/todo-list'))
export const NotFound = lazy(() => import('../pages/NotFound'))

export default function Routes(){
  
  const {status} = useContext(AuthContext)
  console.log(status)
  
  return(
    <Router>
      <AuthState>
        <AppState>
          <Switch>
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Switch>
        </AppState>
    </AuthState>
    </Router>
  )
}
