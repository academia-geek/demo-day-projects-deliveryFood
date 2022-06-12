import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContent";
import Swal from "sweetalert2";
import InputForm from "../components/InputForm";
import { registerUser } from "../services/registerUser";

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{6,30}$/, // 4 a 30 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

export default function Register() {
  const [document, setDocument] = useState({ campo: "", error: false });
  const [name, setName] = useState({ campo: "", error: false });
  const [lastName, setLastName] = useState({ campo: "", error: false });
  const [email, setEmail] = useState({ campo: "", error: false });
  const [password, setPassword] = useState({ campo: "", error: false });

  // const [linkEmail, setLinkEmail] = useState({ campo: "", error: false })

  const navigate = useNavigate();
  const { createUser, loginWithGoogle, addUsernameWhenUserIsRegistered } =
    useAuth();

  const createUserWithEmailAndPassword = async (name, email, password) => {
    try {
      createUser(email, password).then(({ user }) => {
        addUsernameWhenUserIsRegistered(user, name);
        window.location.href = `/usuario/${user.email.split("@")[0]}`;
      });
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Correo no valido",
          });
          break;
        case "auth/email-already-in-use":
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El correo ya está en uso!",
          });
          break;
        default:
          return null;
      }
    }
  };

  const loginGoogle = async () => {
    try {
      const { user } = await loginWithGoogle();
      window.location.href = `/usuario/${user.email.split("@")[0]}`;
    } catch (error) {
      console.log(error);
    }
  };

  // const linkEmailFn = () => {
  //   const email = linkEmail.campo;
  //   sendLinkEmail(email).then(() => {
  //     // The link was successfully sent. Inform the user.
  //     // Save the email locally so you don't need to ask the user for it again
  //     // if they open the link on the same device.
  //     window.localStorage.setItem('emailForSignIn', email);
  //     alert('mensaje enviado')
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    // usando el nombre y el apellido para crear el nombre de usuario
    const arrUserName = [name.campo, lastName.campo];

    if (Array.isArray(arrUserName)) {
      // registrando con firebase
      const userName = arrUserName.join(" ");
      createUserWithEmailAndPassword(userName, email.campo, password.campo);
    } else {
      throw new Error("Debe ser un array");
    }

    // enviando datos al servidor backend
    registerUser({
      docuement: document.campo,
      name: name.campo,
      lastName: lastName.campo,
      email: email.campo,
      password: password.campo,
    });
  };

  return (
    <div className="">
      <header className="h-20 flex shadow items-center px-6 w-full bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 cursor-pointer text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => navigate("/")}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="m-auto text-white text-2xl">Delivery Food</h1>
      </header>

      <main className="py-5 px-10 bg-gray-100">
        <div className="flex gap-20 sm:flex-wrap shadow-xl py-5 bg-white">
          <form
            onSubmit={(e) => handleSubmit(e)}
            action=""
            className="sm:w-screen flex flex-col gap-3 min-w-[50%] px-20 
            border-r-2 border-gray-300 animate__animated animate__bounceInDown"
          >
            <h3 className="text-blue-600 text-3xl">Registrate</h3>
            <InputForm
              type="number"
              name="document"
              label="Numero de documento :"
              state={document}
              setState={setDocument}
              error="El documento es requerido"
            />
            <InputForm
              type="text"
              name="name"
              label="Nombre :"
              state={name}
              setState={setName}
              error="El nombre es requerido"
            />
            <InputForm
              type="text"
              name="lastname"
              label="Apellido :"
              state={lastName}
              setState={setLastName}
              error="El apellido es requerido"
            />
            <InputForm
              type="email"
              name="email"
              label="Correo Electrónico :"
              state={email}
              setState={setEmail}
              expresion={expresiones.email}
              error="El email es obligatorio y tiene que ser un email valido"
            />
            <InputForm
              type="password"
              name="password"
              label="Contraseña :"
              state={password}
              setState={setPassword}
              expresion={expresiones.password}
              error="la contraseña debe tener mas de 6 caracteres y menos de 30 caracteres"
            />
            <button
              type="submit"
              className="px-10 py-5 rounded text-blue-600 text-3xl border-solid border-4 border-blue-600 font-bold hover:bg-blue-600 hover:text-white"
            >
              Registrarme
            </button>
          </form>

          <div
            className="flex flex-col items-center justify-center w-full gap-10
          animate__animated animate__bounceInDown"
          >
            {/* <div>
              <InputForm
                type="email"
                name="link-email"
                label="Ingresar con link de correo :"
                state={linkEmail}
                setState={setLinkEmail}
                expresion={expresiones.email}
                error="El email tiene que ser valido"
              />
              <button onClick={linkEmailFn} className="px-5 py-2 rounded text-blue-600 text-xl border-solid border-4 border-blue-600 font-bold hover:bg-blue-600 hover:text-white">Enviar</button>
            </div> */}
            <p>O ingresa con:</p>
            <button
              className="flex shadow-xl px-10 py-2 rounded w-40 h-15"
              onClick={loginGoogle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Google</p>
            </button>
            <Link to="/login" className="text-blue-600 font-bold text-3xl">
              ¿Ya tienes cuenta?
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
