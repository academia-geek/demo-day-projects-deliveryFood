import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContent";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h1>cargando...</h1>;

  if (!user) return <Navigate to="/login" />;

  return <div>{children}</div>;
};

export default PrivateRoutes;
