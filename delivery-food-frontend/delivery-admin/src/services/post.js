import axios from "axios";
import url from "./url";

const post = async(path, content) => {
  const respond = await axios(url + path, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: content
    });
    return respond;
};
export default post;