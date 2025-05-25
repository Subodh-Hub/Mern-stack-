import { useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import { useAuthContext } from "./hook/useAuthContext.jsx";
import PublicRoutes from "./pages/PublicRoutes.jsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx";

const App = () => {
  const { userState } = useAuthContext();
  const routeElement = useRoutes([
    {
      path: "/",
      element:(
        <ProtectedRoutes>
          <Home />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/signup",
      element: (
        <PublicRoutes>
          <Signup />
        </PublicRoutes>
      ),
    },
    {
      path: "/login",
      element: (
        <PublicRoutes>
          <Login />
        </PublicRoutes>
      ),
    },
  ]);
  return (
    <div>
      <Navbar />
      {routeElement}
    </div>
  );
};

export default App;
