import { useEffect } from "react";
import { useAuth } from "../../auth/AuthContent";
import { Logout } from "../../components/Logout";

const PerfilUsuario = () => {
  const { user } = useAuth();

  useEffect(() => {
    document.title = `Delivery Food | ${user.displayName}`;
  }, [user]);

  return (
    <>
      <h1>Perfil de {user.displayName}</h1>
      <Logout />
    </>
  );
};

export default PerfilUsuario;
