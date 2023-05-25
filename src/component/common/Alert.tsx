import React, {useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/AuthContext";
import {TodoListContext} from "../../context/TodoLitsContext";

type AlertProps = {
  color?:string,
}

export default function Alert(props:AlertProps) {
  const {stateAuth, RemoveError : RAuth } = useContext(AuthContext)
  const {stateTodoList, RemoveError : RTodo } = useContext(TodoListContext)
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState("")
  
  const disableMessage = () =>{
    setVisible(false);RAuth();RTodo()
  }
  
  const validError = () =>{
    if(stateAuth.errorMessage.length > 0){
      setMessage(stateAuth.errorMessage)
      setVisible(true)
      //setTimeout(disableMessage,5000)
    }else if (stateTodoList.errorMessage.length > 0){
      setMessage(stateTodoList.errorMessage)
      setVisible(true)
      //setTimeout(()=>disableMessage,5000)
    }
    setTimeout(()=>setVisible(false),5000)
  }
  
  useEffect(()=>{
    validError()
  }, [stateTodoList, stateAuth])
  
  useEffect(() => {
    setTimeout(() => { setVisible(false) }, 2000)
  }, [])
  
  return (
    <div className={`alert alert-danger text-center ${visible==false && " d-none"}`} role="alert">
      {message}
    </div>
  )
}
