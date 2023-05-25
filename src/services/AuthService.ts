import {User} from "../models/User";
import api, {userControllers} from "./api"
const {apiPost} = api

export default{
  async login(data: User){
    const request = await apiPost<User>(`${userControllers}Login`, data)
    return request.data
  },
  async register(data: User){
    const request = await apiPost<User>(`${userControllers}Register`, data)
    return request.data
  },
}
