import { RouteObject } from "react-router-dom";

//Common
import ErrorPage from "../pages/ErrorPage";

//Pages
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LadingPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedPage from "../pages/ProtectedPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedPage>
        <LandingPage />
      </ProtectedPage>
    ),
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
