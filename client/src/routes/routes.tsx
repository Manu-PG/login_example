import { RouteObject } from "react-router-dom";

//Common
import ErrorPage from "../pages/ErrorPage";

//Pages
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LadingPage";
import RegisterPage from "../pages/RegisterPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
