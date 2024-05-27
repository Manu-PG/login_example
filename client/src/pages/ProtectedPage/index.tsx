import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../providers/UserProvider/UserContext/useUser";
import { LoadingContainer } from "./ProtectedPage.styled";
import Spinner from "../../assets/svg/spinner";
import ErrorPage from "../ErrorPage";

type props = {
  children: React.ReactNode;
};

const ProtectedPage = ({ children }: props) => {
  const { user, requestStatus, errorType } = useUser();

  if (user) return children;

  if (requestStatus === "error" && errorType === "GENERIC") return <ErrorPage />;

  if (requestStatus === "loading" || requestStatus === "idle")
    return (
      <LoadingContainer>
        <Spinner size={150} />
      </LoadingContainer>
    );

  return <Navigate to="/login" />;
};

export default ProtectedPage;
