import axios from "axios";

// funcion para enviar el fomrulario de registro al backend
export const registerUser = async (user) => {
  try {
    await axios("http://35.225.227.102/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
