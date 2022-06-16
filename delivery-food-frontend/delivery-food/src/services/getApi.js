import axios from "axios";
import url from "./url";

export const get = async(path) => {
  const respond = await axios({
    method: 'get',
    url: url + path,
    responseType: 'stream'
  });
  return respond;
};