import { Link } from "react-router-dom";

import "../../styles/landingPage.css";

const HeaderLanding = () => {
  return (
    <header className="p-5">
      <div className="flex items-center justify-between">
        <h1
          className="text-3xl text-[color:var(--white)] ml-10
          sm:text-2xl sm:m-0 sm:mr-3"
        >
          Delivery Food
        </h1>
        <div className="flex gap-8 sm:gap-2">
          <Link
            to="/login"
            className="text-[color:var(--white)] text-lg hover:bg-[color:var(--white)] p-2
             hover:rounded-md hover:text-[color:var(--primary)] 
             hover:transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-[color:var(--white)] text-lg hover:bg-[color:var(--white)] p-2
             hover:rounded-md hover:text-[color:var(--primary)]
              hover:transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </div>
      <h2 className="text-[color:var(--white)] text-center text-lg my-6">
        Pide comida con nuestro servicio express
      </h2>
      <div className="flex justify-center">
        <Link
          to=""
          className="text-center bg-[color:var(--primary)] w-2/12 p-2 
          text-lg uppercase text-[color:var(--white)] rounded-md shadow-2xl"
        >
          ver productos
        </Link>
      </div>
    </header>
  );
};

export default HeaderLanding;
