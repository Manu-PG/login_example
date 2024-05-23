import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../providers/UserProvider/UserContext/useUser";
import { LoadingContainer } from "./ProtectedPage.styled";
import Spinner from "../../assets/svg/spinner";

type props = {
  children: React.ReactNode;
};

const ProtectedPage = ({ children }: props) => {
  const { user, requestStatus, checkMe } = useUser();

  useEffect(() => checkMe(), []);

  if (requestStatus === "loading" || requestStatus === "idle") {
    return (
      <LoadingContainer>
        <Spinner size={150} />
      </LoadingContainer>
    );
  }

  if (!user && requestStatus === "done") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedPage;
