import {TodoList} from "../models/TodoList";
import api, {todoListControllers} from "./api"
const {apiDelete, apiGet, apiPut, apiPost} = api
export default{
  async get(idUser:number){
    const request = await apiGet<TodoList[]>(`${todoListControllers}list/${idUser}`)
    return request.data
  },
  async create(data: TodoList){
    const request = await apiPost<TodoList>(`${todoListControllers}Insertar`, data)
    return request.data
  },
  async update(data: TodoList, id: number){
    let url = `${todoListControllers}update?id=${id}`
    const request = await apiPut<TodoList>(url, data)
    return request.data
  },
  async unavilitable(id: number){
    let url = `${todoListControllers}delete/${id}`
    const request = await apiDelete<TodoList>(url)
    return request.data
  },
}
