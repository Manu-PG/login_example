import { useContext, useEffect, useState } from "react";
import { UserContext } from ".";
import { getUser } from "../../../api/user";
import { AxiosError } from "axios";

type errorType = "NONE" | "GENERIC" | "NOT_LOGGED";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>("idle");
  const [errorType, setErrorType] = useState<errorType>("NONE");

  const initialUserCheck = async () => {
    setRequestStatus("loading");

    try {
      if (!user) {
        const newUser = await getUser();
        setUser(newUser);
      }
      setRequestStatus("done");
    } catch (error) {
      setRequestStatus("error");

      if (error instanceof AxiosError && error.response?.status === 401) setErrorType("NOT_LOGGED");
      else setErrorType("GENERIC");
    }
  };

  useEffect(() => {
    initialUserCheck();
  }, []);

  return { user, requestStatus, errorType };
};
