import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContent";

export const useUserParams = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  if (user) {
    const navigateToUser = () => {
      return navigate(`/usuario/${user.displayName}`);
    };
    return { navigateToUser };
  }
};
