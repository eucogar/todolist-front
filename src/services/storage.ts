import {User} from "../models/User";

export default function getUserId (): number{
  const user = JSON.parse(localStorage.getItem("localSesion") || "") as User
  return user.id
}
