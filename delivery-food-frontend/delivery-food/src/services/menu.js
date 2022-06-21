import axios from "axios";

export const getMenu = async (id) => {
  const res = await axios.get(`http://104.197.97.195/api/mongo/getMenu/${id}`);
  const menu = res.data;
  return menu;
};
