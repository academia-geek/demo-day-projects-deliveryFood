import { Link } from "react-router-dom";

import "../../styles/landingPage.css";
import Logo from "../Logo";

const HeaderLanding = () => {
  return (
    <header className="header-landing-page p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex gap-8 sm:gap-2">
          <Link
            to="/login"
            className="text-[color:var(--white)] text-lg hover:bg-[color:var(--yellow)] p-2
             hover:rounded-md hover:text-[color:var(--dark-blue)] 
             hover:transition-all duration-300 hover:no-underline"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-[color:var(--white)] text-lg hover:bg-[color:var(--yellow)] p-2
             hover:rounded-md hover:text-[color:var(--dark-blue)]
              hover:transition-all duration-300 hover:no-underline"
          >
            Register
          </Link>
        </div>
      </div>
      <h2 className="text-[color:var(--white)] text-center text-3xl my-6">
        <span className="heading-1 capitalize">Pide comida con</span>
        <span className="heading-2 block capitalize">
          nuestro servicio express
        </span>
      </h2>
      <div className="flex justify-center"></div>
    </header>
  );
};

export default HeaderLanding;
