// funcion para enviar el fomrulario de registro al backend
export const registerUser = async (user) => {
  const res = await fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(user),
  });
  console.log(res);
};
