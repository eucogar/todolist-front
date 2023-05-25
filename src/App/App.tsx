import React, {Suspense} from 'react';
import '../styles/App.css';
import Routes from "./Routes";
import Loading from "../component/common/Loading";
import {AuthProvider} from "../context/AuthContext";
import {TodoListProvider} from "../context/TodoLitsContext";

export const AuthState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <TodoListProvider>
      {children}
    </TodoListProvider>
  )
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
       <Routes />
    </Suspense>
  );
}

export default App;
