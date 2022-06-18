import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContent";
import Swal from "sweetalert2";
import InputForm from "../components/InputForm";
import { HeaderMenu } from "../components/HeaderMenu";
import { Footer } from "../components/Footer";

const expresiones = {
  // password: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

export default function Login() {
  const [email, setEmail] = useState({ campo: "", error: false });
  const [password, setPassword] = useState({ campo: "", error: false });

  const navigate = useNavigate();
  const { loginWithEmailandPassword, loginWithGoogle } = useAuth();

  const login = async (email, password) => {
    try {
      const { user } = await loginWithEmailandPassword(email, password);
      window.location.href = `/usuario/${user.email.split("@")[0]}`;
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El usuario no existe!",
          });
          break;
        case "auth/user-not-found":
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El usuario no existe!",
          });
          break;
        case "auth/wrong-password":
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La contraseña es incorrecta!",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email.campo, password.campo);
  };

  return (
    <div className="">
      <HeaderMenu />
      <main className="py-5 px-10 bg-gray-100">
        <div className="flex gap-20 sm:flex-wrap shadow-xl py-5 bg-white">
          <form
            onSubmit={(e) => handleSubmit(e)}
            action=""
            className="sm:w-screen flex flex-col gap-3 min-w-[50%] px-20 
            border-r-2 border-gray-300 animate__animated animate__bounceInDown"
          >
            <h3 className="text-blue-600 text-3xl">Iniciar sesión</h3>
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
              error="la contraseña debe tener mas de 4 caracteres y menos de 12 caracteres"
            />

            <button
              type="submit"
              className="px-10 py-5 rounded text-blue-600 text-3xl border-solid border-4 border-blue-600 font-bold hover:bg-blue-600 hover:text-white"
            >
              Ingresar
            </button>
          </form>

          <div className="flex flex-col items-center justify-center w-full gap-10 text-center animate__animated animate__animated animate__bounceInDown">
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
            <div>
              <p className="text-3lg">¿no tienes cuenta?</p>
              <Link to="/register" className="text-blue-600 font-bold text-3lg">
                Registrate aquí
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
