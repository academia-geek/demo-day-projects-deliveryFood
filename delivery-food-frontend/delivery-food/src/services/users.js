import axios from "axios";
import url from "./url";

export const getUsers = async (email) => {
  try {
    const res = await axios.get(`${url}usuarios`);
    const data = res.data;
    const user = getUser(data, email);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (data, email) => {
  const findUser = data.find((user) => user.email === email);
  return findUser;
};
