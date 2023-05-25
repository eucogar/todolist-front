import React, {useContext, useEffect, useState} from "react";
import {TodoListContext} from "../context/TodoLitsContext";
import Note from "../component/Note";
import CardNote from "../component/CardNote";
import Alert from "../component/common/Alert";
import Button from "../component/common/Button";
import {AuthContext} from "../context/AuthContext";

export default function TodoList(){
  
  const {todoList, getAll} = useContext(TodoListContext)
  const {logOut} = useContext(AuthContext)
  
  const [register, setRegister] = useState(false)
  
  useEffect(()=>{
    getAll()
  },[])
  
  useEffect(()=>{
    setRegister(false)
  }, [todoList])
  
  return(
    <div className={"container-sm p-5 b-5 "}>
      <Button text={"Salir"} color={"danger"} onClick={logOut}/>
      <Alert/>
      <div className={"row justify-content-center p-5 m-3"}>
        {!register?<input className={"form-control  border-1"}
                placeholder={"Crea una nota..."}
                onClick={() => setRegister(true)}/> : <CardNote cancel = {()=>setRegister(false)}/>}
      </div>
      
      <div className={"row justify-content-center"}>
        {todoList.map(({id, title,description}, index)=>
          <div key={index}  className={"col"}>
            <Note key={index} id={id} title={title} description={description}/>
          </div>)}
      </div>
    </div>
  )
}
