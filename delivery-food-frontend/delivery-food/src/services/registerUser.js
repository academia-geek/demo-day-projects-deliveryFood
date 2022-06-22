import axios from "axios";

// funcion para enviar el fomrulario de registro al backend
export const registerUser = async (user) => {
  try {
    await axios("http://104.197.97.195/api/usuarios", {
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
