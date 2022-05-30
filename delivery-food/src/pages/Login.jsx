import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const mavigaete = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("email invalido").required("Campo Obligatorio"),
      password: Yup.string().required("Campo Obligatorio"),
    }),
  });
  return (
    <div className="">
      <header className="h-20 flex shadow items-center px-6 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 cursor-pointer text-[color:var(--white)]"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => mavigaete("/")}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="m-auto text-[color:var(--white)] text-2xl">
          Delivery Food
        </h1>
      </header>

      <main className="py-5 px-10 bg-gray-100">
        <div className="flex gap-20 sm:flex-wrap shadow-xl py-5 bg-white">
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="sm:w-screen flex flex-col gap-3 min-w-[50%] px-20  border-r-2 border-gray-300"
          >
            <h3 className="text-blue-600 text-3xl">Iniciar sesión</h3>
            <div className=" flex flex-col relative">
              <label htmlFor="">Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                className="p-3 rounded border-2 border-gray-400"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <span>
                {formik.errors.email && (
                  <span className="absolute top-0 left-full bg-red-600 p-2 rounded-3xl rounded-bl-none w-40">
                    {formik.errors.email}
                  </span>
                )}
              </span>
            </div>
            <div className=" flex flex-col relative">
              <label htmlFor="">Contaseña:</label>
              <input
                type="password"
                name="password"
                className="p-3 rounded border-2 border-gray-400"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <span>
                {formik.errors.password && (
                  <span className="absolute top-0 left-full bg-red-600 p-2 rounded-3xl rounded-bl-none w-40">
                    {formik.errors.password}
                  </span>
                )}
              </span>
            </div>
            <button
              type="submit"
              className="px-10 py-5 rounded text-blue-600 text-3xl border-solid border-4 border-blue-600 font-bold hover:bg-blue-600 hover:text-white"
            >
              Ingresar
            </button>
          </form>

          <div className="flex flex-col items-center justify-center w-full gap-10 text-center">
            <p>O ingresa con:</p>
            <button className="flex shadow-xl px-10 py-2 rounded w-40 h-15">
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
              <a href="" className="text-blue-600 font-bold text-3lg">
                Registrate aquí
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
