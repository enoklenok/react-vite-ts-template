// # lib
import { useRoutes } from "react-router-dom";

// # components
import { Login, Main } from "@core/view";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Main />,
      // children: [{ path: "", element: <SubComponent /> }],
    },
    { path: "/login", element: <Login /> },
  ]);

  return routes;
};

export default Routes;
