import { useContext, useState } from "react";
import { UserContext } from ".";
import { getLogout, getUser, postLogin, postCreateUser } from "../../../api/user";

type RequestStatus = "idle" | "loading" | "done";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>("idle");

  const logoutUser = () => {
    setRequestStatus("loading");
    getLogout()
      .then((msg) => {
        if (msg.data === "logout") {
          setRequestStatus("done");
          setUser(undefined);
        }
      })
      .catch((error) => console.log(error));
  };

  const loginUser = (user: userLogin) => {
    setRequestStatus("loading");
    postLogin(user)
      .then((data) => {
        setRequestStatus("done");
        setUser(data);
      })
      .catch((error) => console.log(error));
  };

  const checkMe = () => {
    setRequestStatus("loading");
    getUser()
      .then((data) => {
        setRequestStatus("done");
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
        setRequestStatus("done");
        setUser(undefined);
      });
  };

  const registerUser = (user: userLogin) => {
    setRequestStatus("loading");
    postCreateUser(user)
      .then((data) => {
        setRequestStatus("done");
        setUser(data);
      })
      .catch((error) => console.log(error));
  };

  return { user, requestStatus, loginUser, logoutUser, checkMe, registerUser };
};
