import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hook/useAuthContext";

const ProtectedRoutes = ({ children }) => {
  const { userState } = useAuthContext();
  const { user } = userState;

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
