import { useRoutes } from "react-router-dom";
import Home from "./page/Home";
import CreateBooks from "./page/CreateBooks";
import EditBooks from "./page/EditBooks";
import ShowBooks from "./page/ShowBooks";
import DeleteBooks from "./page/DeleteBooks";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/create",
    element: <CreateBooks />,
  },
  {
    path: "/books/edit/:id",
    element: <EditBooks />,
  },
  {
    path: "/books/details/:id",
    element: <ShowBooks />,
  },
  {
    path: "/books/delete/:id",
    element: <DeleteBooks />,
  },
];
const App = () => {
  const routeElements = useRoutes(routes);

  return (
    <>
      <div className="text-center font-SpaceThink text-[6rem] text-transparent bg-clip-text bg-gradient-to-br from-red-200 to-red-400 w-fit mx-auto">Book Store</div>
      {routeElements}
    </>
  );
};

export default App;
