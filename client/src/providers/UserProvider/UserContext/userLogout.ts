import { useContext, useState } from "react";
import { UserContext } from ".";
import { getLogout } from "../../../api/user";

export const useLogout = () => {
  const { user, setUser } = useContext(UserContext);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>("idle");

  const logoutUser = () => {
    setRequestStatus("loading");
    return getLogout()
      .then(() => {
        setRequestStatus("done");
        setUser(undefined);
      })
      .catch((error) => {
        setRequestStatus("error");
        throw error;
      });
  };

  return { user, requestStatus, logoutUser };
};
