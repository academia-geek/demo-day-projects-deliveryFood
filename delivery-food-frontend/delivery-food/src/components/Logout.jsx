import { useAuth } from "../auth/AuthContent";
import { LogoutIcon } from "@heroicons/react/solid";

export const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <>
      <LogoutIcon onClick={handleLogout} className="h-10 w-10 cursor-pointer" />
    </>
  );
};
