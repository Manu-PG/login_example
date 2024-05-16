import { RouteObject } from "react-router-dom";

//Common
import ErrorPage from "../pages/ErrorPage";

//Pages
import LoginPage from "../pages/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
