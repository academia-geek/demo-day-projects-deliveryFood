import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContent";
import {
  UserIcon,
  TemplateIcon,
  ShoppingCartIcon,
  LogoutIcon,
  ArchiveIcon,
} from "@heroicons/react/solid";

export const SideBar = ({ username, modalState }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <>
      {!modalState && (
        <div
          className="sidebar-profile-user w-2/12 flex flex-col items-center justify-center
          h-screen"
        >
          <ul className="flex flex-col items-center justify-center gap-16">
            <NavLink
              to={`/usuario/${username}`}
              className={({ isActive }) =>
                isActive
                  ? "active-menu-profile w-full text-center flex items-center"
                  : "no-active-menu-profile w-full text-center flex items-center text-white"
              }
            >
              <UserIcon className="h-10 w-10" />
              <span className="text-center w-full">Perfil</span>
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "active-menu-profile w-full text-center flex items-center"
                  : "no-active-menu-profile w-full text-center flex items-center text-white"
              }
            >
              <TemplateIcon className="h-10 w-10" />
              <span className="text-center w-full">Ver productos</span>
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active-menu-profile w-full flex items-center gap-2"
                  : "no-active-menu-profile w-full flex items-center text-white"
              }
            >
              <ShoppingCartIcon className="h-10 w-10" />
              <span className="text-center w-full">Ver Pedidos</span>
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active-menu-profile w-full flex items-center gap-2"
                  : "no-active-menu-profile w-full flex items-center text-white"
              }
            >
              <ArchiveIcon className="h-10 w-10" />
              <span className="text-center w-full">Ver Restaurantes</span>
            </NavLink>
            <div
              className="flex items-center text-white cursor-pointer"
              onClick={handleLogout}
            >
              <LogoutIcon className="h-10 w-10 mx-auto"></LogoutIcon>
              <span className="text-center w-full">Cerrar Sesion</span>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};
