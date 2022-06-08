import { typeUsers } from "../types";

export const login = (userAuth) => ({
  type: typeUsers.login,
  payload: userAuth
})