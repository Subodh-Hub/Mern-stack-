import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hook/useAuthContext";

const PublicRoutes = ({ children }) => {
  const { userState } = useAuthContext();
  const { user } = userState;

  return user ? <Navigate to="/" replace /> : children;
};

export default PublicRoutes;
