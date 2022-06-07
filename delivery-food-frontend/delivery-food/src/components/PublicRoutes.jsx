import { useAuth } from "../auth/AuthContent";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (user) return <Navigate to={`/usuario/${user.email.split("@")[0]}`} />;

  return <div>{children}</div>;
};

export default PublicRoutes;
