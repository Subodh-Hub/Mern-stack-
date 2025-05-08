import { Link, NavLink } from "react-router-dom";
import useLogout from "../hook/useLogout";
import { useAuthContext } from "../hook/useAuthContext";

const Navbar = () => {
  const { userState } = useAuthContext();
  const { user } = userState;
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  console.log("userState", userState);
  return (
    <header className="my-0 mx-auto flex items-center justify-between py-2 px-3 h-[95px]">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primaryLight" : "text-[#000]"
          }
        >
          <h1 className="text-[4rem] font-Spacethink font-[600] tracking-[7px]">
            Fitness Tracker
          </h1>
        </NavLink>
      </div>
      {user && (
        <span>
          Welcome,
          {" " +
            userState?.user?.firstName +
            " " +
            userState?.user?.lastName +
            ""}
        </span>
      )}
      {user && (
        <Link
          to="/login"
          className="text-[#000] bg-secondaryLight px-3 py-2 rounded-xl hover:bg-secondary hover:text-[#fff] transition-all ease-in duration-300 "
          onClick={handleLogout}
        >
          Logout
        </Link>
      )}

      {!user && (
        <div className="flex gap-3">
          <Link
            to="/login"
            className="text-[#000] bg-secondaryLight px-3 py-2 rounded-xl hover:bg-secondary hover:text-[#fff] transition-all ease-in duration-300 "
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-[#000] bg-secondaryLight px-3 py-2 rounded-xl hover:bg-secondary hover:text-[#fff] transition-all ease-in duration-300 "
          >
            Signup
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
