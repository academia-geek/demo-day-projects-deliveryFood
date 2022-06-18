import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContent";
import { MenuIcon } from "@heroicons/react/solid";
import { DrawerMenu } from "./DrawerMenu";

import logo from "../assets/logo.jpeg";

export const HeaderMenu = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <DrawerMenu
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        closeDrawer={setOpenDrawer}
      />
      <header className="menu p-5 shadow-lg flex items-center justify-between">
        {user !== null ? (
          <>
            <MenuIcon
              className="w-14 text-white cursor-pointer"
              onClick={() => setOpenDrawer(true)}
            />
            <input
              type="search"
              placeholder="Busca la comida que quieras"
              className="h-10 text-center border-2 bg-white"
            />
            <img
              src={logo}
              alt="logo"
              className="w-52 ml-10 cursor-pointer"
              onClick={() => navigate("/viewProducts")}
            />
          </>
        ) : (
          <>
            <div className="flex gap-2">
              <MenuIcon
                className="w-14 text-white"
                onClick={() => setOpenDrawer(true)}
              />
              <img
                src={logo}
                alt="logo"
                className="w-52 ml-10 cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <input
              type="search"
              placeholder="Busca la comida que quieras"
              className="search-food h-10 placeholder:text-slate-300 focus:outline-none"
            />
            <div className="flex gap-5">
              <Link
                to="/login"
                className="text-[color:var(--white)] text-lg hover:bg-[color:var(--yellow)] p-2
             hover:rounded-md hover:text-[color:var(--dark-blue)] 
             hover:transition-all duration-300 hover:no-underline"
              >
                Inicia Sesión
              </Link>
              <Link
                to="/register"
                className="text-[color:var(--white)] text-lg hover:bg-[color:var(--yellow)] p-2
            hover:rounded-md hover:text-[color:var(--dark-blue)] 
            hover:transition-all duration-300 hover:no-underline"
              >
                Registrate
              </Link>
            </div>
          </>
        )}
      </header>
    </>
  );
};
