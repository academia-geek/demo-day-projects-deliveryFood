import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

import "../../styles/landingPage.css";

const HeaderLanding = () => {
  return (
    <header className="header-landing-page p-5">
      <div className="flex items-center justify-between">
        <img src={logo} alt="logo" className="w-48 mx-10" />
        <div className="flex gap-8 sm:gap-2">
          <Link
            to="/login"
            className="text-[color:var(--white)] text-lg hover:bg-[color:var(--yellow)] p-2
             hover:rounded-md hover:text-[color:var(--dark-blue)] 
             hover:transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-[color:var(--white)] text-lg hover:bg-[color:var(--yellow)] p-2
             hover:rounded-md hover:text-[color:var(--dark-blue)]
              hover:transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </div>
      <h2 className="text-[color:var(--white)] text-center text-2xl my-6">
        <span className="heading-1 capitalize">Pide comida con</span>
        <span className="heading-2 block capitalize">
          nuestro servicio express
        </span>
      </h2>
      <div className="flex justify-center">
        <Link
          to=""
          className="btn-ver-productos text-center bg-[color:var(--yellow)] w-2/12 p-2 
          text-lg uppercase text-[color:var(--dark-blue)] rounded-md shadow-2xl 
          hover:bg-amber-300 hover:transition-all duration-300"
        >
          ver productos
        </Link>
      </div>
    </header>
  );
};

export default HeaderLanding;
