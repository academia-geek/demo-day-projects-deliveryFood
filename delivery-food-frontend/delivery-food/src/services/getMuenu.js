import axios from "axios";

export const getMenu = async () => {
  const res = await axios.get(
    "https://mocki.io/v1/84d6266f-3c79-4376-becc-9259738e52de"
  );
  const menu = res.data;
  return menu;
};
