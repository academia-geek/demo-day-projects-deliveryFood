import axios from "axios";

export const getEstablecimientos = async () => {
  const res = await axios.get("http://104.197.97.195/api/establecimientos");
  const establecimientos = await res.data;
  return establecimientos;
};
