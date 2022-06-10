import axios from "axios";

const url = 'https://60f0-2800-e2-1f00-54b-108b-2fcb-b368-1171.ngrok.io/api/';
export const getApi = async(metodo, path) => {
  const respond = await axios({
    method: metodo,
    url: url + path,
    responseType: 'stream'
  });
  return respond;
};
export const postApi = async(metodo, path, content) => {
  const respond = await axios(url + path, {
  method: metodo,
  headers: {
    'Content-Type': 'application/json'
  },
  data: content
  });
  return respond;
};
