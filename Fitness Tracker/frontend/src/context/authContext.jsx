import { useEffect, createContext, useReducer } from "react";
import { initialState, authReducer } from "../components/authReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = localStorage.getItem("accessToken");
    if (user) {
      dispatch({
        type: "LOGIN",
        payload: {
          user,
          accessToken,
        },
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
