import axios from "axios";
import url from "./url";

const deleteApi = async (path) => {
  await axios.delete(url + path);
};

export default deleteApi;